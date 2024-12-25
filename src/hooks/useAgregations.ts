import { actions } from "astro:actions";
import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import { agregationsStore } from "@/store/store";
    
export function useAgregations() {
    const [ loading, setLoading ] = useState(false);
    const { agregations } = useStore(agregationsStore);
    
    useEffect(() => {
        if (!agregations) {            
            setLoading(true);
    
            actions.getAgregations().then(({ data }) => {
                agregationsStore.set({ agregations: data });
                setLoading(false)
            }); 
        } 
    }, []);

    return { 
        loading,
        agregations
    };
}