import { z } from "astro:schema";

export const loginSchema = z.object({
    email: z.string()
        .email('No es un correo electronico valido.'),
    password: z.string()
        .regex(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 'No es valida la contraseña.')
        .min(5, 'La contraseña no puede tener menos de 5 carácteres.')
        .max(15, 'La contraseña no puede tener más de 15 carácteres.'),
});

export const registerSchema = z.object({
    name: z.string()
        .min(5, 'El nombre no puede tener menos de 10 carácteres.')
        .max(50, 'El nombre no puede tener más de 50 carácteres.'),
    email: z.string()
        .email('No es un correo electronico valido.'),
    password: z.string()
        .regex(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 'No es valida la contraseña.')
        .min(5, 'La contraseña no puede tener menos de 5 carácteres.')
        .max(15, 'La contraseña no puede tener más de 15 carácteres.'),
});

export const menuSchema = z.object({
    category: z.string()
});

export const opinionSchema = z.object({
    valoration: z.coerce.number({ message: "La valoración es requerida." })
        .min(1, { message: "Valoración incorrecta." })
        .max(5, { message: "Valoración incorrecta." }),
    opinion: z.string({ message: "La opinión es requerida." })
        .max(150, { message: "La opinión no puede tener más de 150 carácteres." })
});