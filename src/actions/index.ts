import { getChange } from '@/actions/scraping';
import { getAgregations, getMenu, getProminentPizzas } from "@/actions/menu";
import { createOpinion, getLastOpinions } from "@/actions/opinion";
import { getEvents } from './event';
import { logOut, register, singIn } from './auth';

export const server = {
    createOpinion,
    getLastOpinions,
    getChange,
    getMenu,
    getProminentPizzas,
    getAgregations,
    getEvents,
    singIn,
    register,
    logOut
}