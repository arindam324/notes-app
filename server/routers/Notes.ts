import z from 'zod'
import {createRouter} from '../../pages/api/trpc/[trpc]'

export const NotesRouter = createRouter().query("notes", {
    async resolve({ctx}) {
        return ctx.prisma.note.findMany();
    }
}).mutation('add', {
    input: z.object({
        id: z.string(),
        heading: z.string(),
        description: z.string(),
        content: z.string(),
    }),
    async resolve({ctx, input}) {
        return await ctx.prisma.note.create({
            data: input
        })
    }
})