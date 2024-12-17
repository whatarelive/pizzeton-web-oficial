import { useStore } from '@nanostores/react';
import { uiStore } from '@/store/UiStore';
import ProductPrice from '@/components/react/ProductPrice';
import AgregationsButton from '@/components/react/AgregationsButton';
import { aggregations } from '../../data/data';

export default function AggregationsModal() {
    const { modal } = useStore(uiStore);

  return (
    <>
        {
            modal &&
            <div className='absolute flex z-40 bg-secondary items-center justify-center bg-opacity-90 w-full h-full'>
                <div className="p-6 w-fit rounded-xl bg-thertiary shadow-xl shadow-base">
                    <h4>Agregos para las Pizzas</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 my-6 gap-2 md:gap-x-12">
                        {
                            aggregations.map((aggs, index) => (
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

                    <div className="flex w-full justify-center">
                       <AgregationsButton title="Ocultar Agregos"/>          
                    </div>
                </div>
            </div>
        }
    </>
  )
}
