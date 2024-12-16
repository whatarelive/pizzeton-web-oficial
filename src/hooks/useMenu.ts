import { actions } from "astro:actions";
import { useEffect, useState } from "react";
import type { Menu, Product } from "@/interfaces";

export function useMenu(initialValue: Menu) {
    const [selectTab, setSelectTab] = useState<Menu>(initialValue);
    const [menu, setMenu] = useState<Product[]| undefined>([]);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const tab = event.currentTarget.innerText as Menu;
        setSelectTab(tab);
    }

    useEffect(() => {
        actions.getMenu({ category: selectTab })
            .then(({data}) => setMenu(data))
    }, [selectTab])
    
    return {
        menu,
        selectTab,
        handleClick
    }
}