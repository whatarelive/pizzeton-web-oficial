import { db, desc, Opinions } from "astro:db";
import { z } from "astro:schema";
import { randomUUID } from "node:crypto";

const OpinionSchema = z.object({
    date: z.date(),
    opinion: z.string().max(150),
    opinionId: z.string(),
    phoneNumber: z.string().min(8).max(10),
    userName: z.string().min(5).max(100),
    valoration: z.coerce.number().min(1).max(5)
});

const OpinionForData = OpinionSchema.omit({
    opinionId: true,
    date: true
});

type Request = typeof OpinionForData._output;

export async function createOpinion({ userName, opinion, valoration, phoneNumber }: Request) {
    try {
        await db.insert(Opinions).values({
            idOpinion: randomUUID().toString(),
            date: new Date(),
            userName: userName,
            userPhone: phoneNumber,
            valoration: valoration,
            opinion: opinion
        });

    } catch (errors) {
        console.log(errors);
    }
}

export async function getLastOpinions() {
    try {
        const data = await db.select().from(Opinions).orderBy(desc(Opinions.date)).limit(8);

        return data.map(opinion => ({
            userName: opinion.userName,
            valoration: opinion.valoration,
            opinion: opinion.opinion
        }));

    } catch (errors) {
        console.log(errors);
    }
}