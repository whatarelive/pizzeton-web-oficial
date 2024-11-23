import { defineAction } from "astro:actions";
import { scraping } from '@/actions/scraping';
import { createOpinion, getLastOpinions } from "@/actions/opinion";

export const server = {
    getChange: defineAction({
        handler: scraping
    }),
    createOpinion : defineAction({
        accept: 'form',
        handler: createOpinion,
    }),
    getLastOpinions : defineAction({
        handler: getLastOpinions
    })
}