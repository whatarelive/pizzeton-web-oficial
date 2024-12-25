import { useMenu } from "@/hooks/useMenu";
import MenuTabs from "@/components/react/MenuTabs";
import MenuContent from "@/components/react/MenuContent";
import MenuEmptyData from "@/components/react/MenuEmptyData";
import Loading from "@/components/react/Loading";

export default function Menu() {
    const { menu, loading, selectTab, handleClick } = useMenu('Pizzas');

  return (
    <>
        <MenuTabs selectTab={selectTab} handleClick={handleClick}/>
        
        {
          loading
            ? <Loading/>
            : menu && menu.length > 0 
                ? <MenuContent menu={menu}/> 
                : <MenuEmptyData tab={selectTab}/>
        }
    </>
  )
}