import { z } from "astro:schema";

export const menuSchema = z.object({
    category: z.string()
});

export const opinionSchema = z.object({
    user: z.string()
        .min(10, 'El nombre no puede tener menos de 10 carácteres.')
        .max(150, 'El nombre no puede tener más de 150 carácteres.'),
    valoration: z.coerce.number({ message: "La valoración es requerida." })
        .min(1, { message: "Valoración incorrecta." })
        .max(5, { message: "Valoración incorrecta." }),
    opinion: z.string({ message: "La opinión es requerida." })
        .max(150, { message: "La opinión no puede tener más de 150 carácteres." })
});