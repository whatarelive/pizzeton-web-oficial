import { getChange } from '@/actions/scraping';
import { getMenu, getProminentPizzas } from "@/actions/menu";
import { createOpinion, getLastOpinions } from "@/actions/opinion";

export const server = {
    createOpinion,
    getLastOpinions,
    getChange,
    getMenu,
    getProminentPizzas,
}