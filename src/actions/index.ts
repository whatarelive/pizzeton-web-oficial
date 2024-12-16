import { z } from "astro:schema";
import { defineAction } from "astro:actions";
import { getChange } from '@/actions/scraping';
import { getMenu, getProminentPizzas } from "@/actions/menu";
import { createOpinion, getLastOpinions } from "@/actions/opinion";

export const server = {
    createOpinion : defineAction({
        accept: 'form',
        input: z.object({
            userName: z.string({ message: "El nombre de usuario es requerido." })
                .min(5, { message: "El nombre no puede tener menos de 5 carácteres." })
                .max(30, { message: "El nombre no puede tener más de 30 carácteres." }),
            phoneNumber: z.string({ message: "El número de teléfono es requerido." })
                .min(8, { message: "Número de teléfono incorrecto." })
                .max(11, { message: "Número de teléfono incorrecto." }),
            valoration: z.coerce.number({ message: "La valoración es requerida." })
                .min(1, { message: "Valoración incorrecta." })
                .max(5, { message: "Valoración incorrecta." }),
            opinion: z
                .string({ message: "La opinión es requerida." })
                .max(150, { message: "La opinión no puede tener más de 150 carácteres." })
        }),
        handler: createOpinion,
    }),
    getLastOpinions : defineAction({
        handler: getLastOpinions
    }),
    getChange,
    getMenu,
    getProminentPizzas,
}