import { useState } from "react";
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
        <div className="flex gap-2">
            { 
                buttons.map(label => (
                    <button 
                        key={label} 
                        onClick={handleClick}
                        className={`
                            ${selectTab === label && 'bg-white text-primary text-opacity-100'}
                            text-white text-opacity-80 rounded-lg px-2 py-1 text-sm font-semibold
                        `}
                    >
                        { label }
                    </button>
                )) 
            }
        </div>

        <ul className="grid columns-1 md:columns-2 w-full gap-4">
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