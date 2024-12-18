import { useEffect } from "react";
import { actions } from "astro:actions";
import { useStore } from "@nanostores/react";
import { agregationsStore } from "@/store/store";

export function useAgregations() {
    const { agregations } = useStore(agregationsStore);
    
    useEffect(() => {
        if (!agregations || agregations.length === 0) {            
            actions.getAgregations().then(({ data }) => {
                agregationsStore.set({ agregations: data });
            });    
        }
    }, []);

    return { 
        agregations
    };
}