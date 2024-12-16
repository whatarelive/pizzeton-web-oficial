import { z } from "astro:schema";
import { defineAction } from "astro:actions";
import pizzetonApi from "@/api/pizzetonApi";
import type { Product, Prominent } from "@/interfaces";

const MenuSchema = z.object({
    category: z.string()
});

export const getMenu = defineAction({
    input: MenuSchema,
    handler: async ({ category }) => {
        try {
            const { data } = await pizzetonApi.get<Product[]>(`products/${category}`);
    
            if (data.length === 0) {
                throw new Error("No hay productos para mostrar.");
            }
    
            return data;
    
        } catch (errors) {
            console.log(errors);
        }
    }
})

export const getProminentPizzas = defineAction({
    handler: async () => {
        try {
            const { data, status } = await pizzetonApi.get<Prominent[]>(`product/prominents?limit=4`);
            
            if (status !== 200) throw new Error("Failed fecth.");
            
            if (data.length === 0) return [];
            
            return data.map(({ product }) => {
                return product
            });
    
        } catch (error) {
            console.log("Error fetching prominent pizzas.", error); 
            
            throw new Error("Failed to fetch prominents pizzas.");
        }
    }
})