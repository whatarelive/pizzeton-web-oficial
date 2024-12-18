import { useStore } from '@nanostores/react';
import { uiStore } from '@/store/store';
import AgregationsList from '@/components/react/AgregationsList';
import AgregationsButton from '@/components/react/AgregationsButton';

export default function AggregationsModal() {
    const { modal } = useStore(uiStore);

  return (
    <>
        {
            modal &&
            <div className='absolute flex z-40 bg-secondary items-center justify-center bg-opacity-90 w-full h-full'>
                <div className="p-6 w-fit rounded-xl bg-thertiary shadow-xl shadow-base">
                    <h4 className="mb-6">
                        Agregos para las Pizzas
                    </h4>
                 
                    <AgregationsList/>

                    <div className="flex w-full mt-6 justify-center">
                       <AgregationsButton title="Ocultar Agregos"/>          
                    </div>
                </div>
            </div>
        }
    </>
  )
}
