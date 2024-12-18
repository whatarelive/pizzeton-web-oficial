import { useId } from "react";
import { actions } from "astro:actions";
import { useStore } from "@nanostores/react";
import { changeStore } from "@/store/store";

const MONEDA_VALUES = ['CUP', 'EUR', 'USD', 'MLC'];

interface Props {
  isHidden: boolean;
}

export default function ChangeSelect({ isHidden }: Props) {
  const { moneda } = useStore(changeStore);
  const id = useId();
  
  const onChange = async(event :React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const value = event.target.value;
    
    if(moneda !== value) {
      const { data } = await actions.getChange();
      changeStore.set({ moneda: value, value: data![value] });
    }
  }

  return (
    <div className={`${!isHidden ? 'flex' : 'hidden'} lg:flex items-center p-2 g-4`}>
      <label htmlFor={id} className="pr-3">
        Moneda
      </label>
      
      <select id={id} onChange={onChange} className="w-20 xl:w-24 p-1.5 rounded-md ring-base ring-1 bg-primary text-white font-medium">
        {MONEDA_VALUES.map(op => (
          <option key={op} value={op} className={`${op === moneda && 'hidden'} font-medium`}>
            {op}
          </option>
        ))}
      </select>
    </div>
  )
}
