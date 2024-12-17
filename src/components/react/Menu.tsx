import { useMenu } from "@/hooks/useMenu";
import MenuTabs from "@/components/react/MenuTabs";
import MenuContent from "@/components/react/MenuContent";
import MenuEmptyData from "@/components/react/MenuEmptyData";

export default function Menu() {
    const { menu, selectTab, handleClick } = useMenu('Pizzas');

  return (
    <>
        <MenuTabs selectTab={selectTab} handleClick={handleClick}/>
        
        {
          menu ? <MenuContent menu={menu}/> : <MenuEmptyData tab={selectTab}/>
        }
    </>
  )
}