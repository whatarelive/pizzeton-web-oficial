import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import { changeStore } from "@/store/store";

interface Props {
  price: number;
}

export default function ProductPrice({ price }: Props) {
    const [ finish, setFinish ] = useState(price);
    const { moneda, value } = useStore(changeStore);

    useEffect(() => {
      const change = (moneda === 'CUP') ? price : +(price / value).toFixed(2);
      setFinish(change);
    }, [value]);

  return <strong>{`$ ${finish}`}</strong>
}
