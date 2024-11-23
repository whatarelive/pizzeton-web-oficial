import { z } from "astro:schema";


const OpinionSchema = z.object({
    opinionId: z.number(),
    userId: z.number(),
    opinion: z.string()
});

const opinionForData = z.object({});

export async function createOpinion(input: FormData) {
    const userName = input.get('userName');
    const phoneNumber = input.get('phoneNumber');
    const valoration = input.get('valoration');
    const opinion = input.get('opinion');
}

export async function getLastOpinions() {
    
}