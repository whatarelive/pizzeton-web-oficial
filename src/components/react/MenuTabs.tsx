import React, { useState } from "react";
import { menu } from "@/data/data";
import MenuCard from "./MenuCard";
import type { Menu } from "@/interfaces";

const buttons = ['Pizzas', 'Pastas', 'Bebidas', 'Postres'];

export default function MenuTabs() {
    const [selectTab, setSelectTab] = useState<Menu>('Pizzas');

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const tab = event.currentTarget.innerText as Menu;
        setSelectTab(tab);
    }

  return (
    <>
        <div className="flex w-full max-w-screen-2xl justify-start gap-2">
            { 
                buttons.map(label => (
                    <button 
                        key={label} 
                        onClick={handleClick}
                        className={`
                            rounded-lg px-2 py-1 text-sm sm:text-subtitle font-semibold
                            ${selectTab === label ? 'text-primary bg-white' : 'text-white text-opacity-80'}
                        `}
                    >
                        { label }
                    </button>
                )) 
            }
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 w-full max-w-screen-2xl gap-4 md:gap-x-16">
            { 
                menu[selectTab].map(p => (
                    <li key={p.title}>
                        <MenuCard product={p}/>
                    </li>
                )) 
            }
        </ul>
    </>
  )
}