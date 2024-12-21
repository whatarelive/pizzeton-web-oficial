import { defineAction } from "astro:actions";
import { getRequest } from "./helpers/getRequest";
import type { EventFromRequest } from "@/interfaces";

export const getEvents = defineAction({
    handler: async () => {
        const events = await getRequest<EventFromRequest>('events');
        
        return events.map(({imgUrl, title, subtitle}) => {
            return {
                imgUrl, 
                title,
                subtitle,
            }
        })
    }
});