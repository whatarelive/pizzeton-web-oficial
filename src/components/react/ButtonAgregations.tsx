import { useState } from "react";
import { aggregations } from "@/data/data";
import ProductPrice from "./ProductPrice";

export default function ButtonAgregations() {
    const [modal, setModal] = useState(false);

  return (
    <>
        <button className="btn w-fit" onClick={() => setModal(true)}>
            Mostrar Agregos
        </button>

        {
            modal &&
            <div className="absolute p-6 rounded-xl bg-thertiary shadow-lg">
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
                    <button className="btn" onClick={() => setModal(false)}>
                        Ocultar Agregos   
                    </button>            
                </div>
            </div>
        }    
    </>
  )
}
