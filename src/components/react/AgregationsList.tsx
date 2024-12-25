import { useAgregations } from "@/hooks/useAgregations";
import ProductPrice from '@/components/react/ProductPrice';
import MenuEmptyData from "@/components/react/MenuEmptyData";
import Loading from "@/components/react/Loading";

export default function AggregationsList() {
    const { loading, agregations } = useAgregations();

  return (
    <>
        {
            loading 
                ? <Loading/>
                : agregations && agregations.length > 0 
                    ? <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-x-12">
                        {
                            agregations.map((aggs, index) => (
                                <li key={index} className="flex flex-row gap-6 justify-between">
                                    <p className="text-lg">
                                        { aggs.title }
                                    </p>
                                    <span>
                                        <b> + </b>
                                        <ProductPrice price={aggs.price}/>
                                    </span>
                                </li>
                            ))
                        }
                    </ul>
                    : <MenuEmptyData tab="Agregos"/>
        }
    </>
  ) 
}
