import pizzetonApi from "@/api/pizzetonApi";

export async function getRequest<T>(url: string) {
    try {
        const { data, status } = await pizzetonApi.get<T[]>(url);
        
        if (status !== 200) throw new Error("Failed fecth.");
    
        if (data.length === 0) return [];
            
        return data;

    } catch (error) {
        console.log(`Error fetching ${url}.`, error); 
        throw new Error(`Failed to fetch ${url}.`);
    }
}