import { actions } from "astro:actions";
import { useStore } from "@nanostores/react";
import { useCallback, useEffect, useState } from "react";
import { menuStore } from "@/store/store";
import type { Menu, Product } from "@/interfaces";


export function useMenu(initialValue: Menu) {
    const { categories } = useStore(menuStore);
    const [ menu, setMenu ] = useState<Product[] | undefined>([]);
    const [ selectTab, setSelectTab ] = useState<Menu>(initialValue);
    
    const handleClick = useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
            const tab = event.currentTarget.innerText as Menu;
            setSelectTab(tab);
        },
        [selectTab],
    )

    useEffect(() => {
        const value = categories.find((c) => c.tab === selectTab);

        if (!value) {
            actions.getMenu({ category: selectTab }).then(({data}) => {
                menuStore.set({ 
                    categories: [...categories, { tab: selectTab, men: data! }] 
                });

                setMenu(data);
            });
        } else {
            setMenu(value.men)
        } 

    }, [selectTab])
    
    return {
        menu,
        selectTab,
        handleClick
    }
}