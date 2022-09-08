import type {NextPage} from 'next'
import Head from 'next/head'

import Sidebar from '@components/Sidebar'
import AppBar from "@components/AppBar";
import dynamic from "next/dynamic";


const Editor = dynamic(() => import("@components/Editor"), {
    ssr: false,
    loading: () => <p>Loading...</p>
})

const Home: NextPage = () => {
    return (
        <div className="flex min-h-screen flex-col ">
            <Head>
                <title>Notes App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={"flex"}>
                <Sidebar/>
                <AppBar/>
                <Editor/>
            </main>
        </div>
    )
}

export default Home
