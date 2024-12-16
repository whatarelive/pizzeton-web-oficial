import MenuCard from "./MenuCard";
import { useMenu } from "@/hooks/useMenu";

const buttons = ['Pizzas', 'Pastas', 'Bebidas', 'Postres'];

export default function MenuTabs() {
    const { menu, selectTab, handleClick } = useMenu('Pizzas');

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
                menu.map(({ title, subtitle, price }) => (
                    <li key={title}>
                        <MenuCard title={title} subtitle={subtitle} price={price}/>
                    </li>
                )) 
            }
        </ul>
    </>
  )
}