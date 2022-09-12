import * as trpc from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/next'
import {PrismaClient} from '@prisma/client'
import superjson from 'superjson'
import {NotesRouter} from "../../../server/routers/Notes";


const prisma = new PrismaClient()

export const createContext = async (opts?: trpcNext.CreateNextContextOptions) => {
    return {
        req: opts?.req,
        prisma,
    }
}


export type Context = trpc.inferAsyncReturnType<typeof createContext>;

export function createRouter() {
    return trpc.router<Context>()
}

const router = createRouter().transformer(superjson).merge('note', NotesRouter);

export const appRouter = router;
export type AppRouter = typeof router;


export default trpcNext.createNextApiHandler({
    router,
    createContext,
    teardown: () => prisma.$disconnect(),
})