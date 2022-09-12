import type {NextPage} from "next";
import Head from "next/head";

import {StrictMode} from 'react'

import Sidebar from "@components/Sidebar";
import AppBar from "@components/AppBar";
import dynamic from "next/dynamic";
import EditorProvider from "../Context/EditorProvider";
import NotesProvider from "Context/NotesProvider";
import {trpc} from "../utils/trpc";

const Editor = dynamic(() => import("@components/Editor"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});

const Home: NextPage = () => {

    const value = trpc.useQuery(["notenotes"])

    if (!value.data) {
        return <div>Loading...</div>
    }

    console.log(value.data)

    return (
        <div className="flex min-h-screen flex-col ">
            <Head>
                <title>Notes App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <StrictMode>
                <EditorProvider>
                    <NotesProvider>
                        <main className={"flex min-h-screen"}>
                            <Sidebar/>
                            <AppBar/>
                            <Editor/>
                        </main>
                    </NotesProvider>
                </EditorProvider>
            </StrictMode>
        </div>
    );
};

export default Home;
