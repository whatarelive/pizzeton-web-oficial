import MenuCard from "@/components/react/MenuCard";
import type { Product } from "@/interfaces";

interface Props {
  menu: Product[];
}

export default function MenuContent({ menu }: Props) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 w-full max-w-screen-2xl gap-4 md:gap-x-16">
      { 
        menu.map(({ title, subtitle, price }) => (
          <li key={title}>
            <MenuCard title={title} subtitle={subtitle} price={price}/>
          </li>
        )) 
      }
    </ul>
  )
}