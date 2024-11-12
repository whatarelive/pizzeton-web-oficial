import { defineAction } from "astro:actions";
import { scraping } from '@/actions/scraping';

export const server = {
    getChange: defineAction({
        handler: scraping
    })
}