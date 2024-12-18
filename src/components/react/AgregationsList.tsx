import { useAgregations } from "@/hooks/useAgregations";
import ProductPrice from '@/components/react/ProductPrice';
import MenuEmptyData from "@/components/react/MenuEmptyData";

export default function AggregationsList() {
    const { agregations } = useAgregations();

  return !agregations || agregations.length === 0 
        ? <MenuEmptyData tab="Agregos"/>
        : <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-x-12">
            {
                agregations.map((aggs, index) => (
                    <div key={index} className="flex flex-row gap-6 justify-between">
                        <p className="text-lg">
                            { aggs.title }
                        </p>
                        <span>
                            <b> + </b>
                            <ProductPrice price={aggs.price}/>
                        </span>
                    </div>
                ))
            }
         </div>
}
