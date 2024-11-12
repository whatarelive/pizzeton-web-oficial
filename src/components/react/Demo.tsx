import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react"
import { changeStore } from "@/store/ChangeStore"

interface Props {
    price: number
}

export default function Demo({ price }: Props) {
    const [finish, setFinish] = useState(price)
    const { value } = useStore(changeStore);

    useEffect(() => {
        setFinish(+(price / value).toFixed(2));
    }, [value]);

  return (
    <span className="border px-8">{ finish }</span>
  )
}
