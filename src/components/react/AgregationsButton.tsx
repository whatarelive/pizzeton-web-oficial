import { uiStore } from "@/store/store";

interface Props {
  title: string;
}

export default function AgregationsButton({ title }: Props) {
  return (
    <button 
      className="btn w-fit" 
      aria-label="Mostrar la lista de agregos"
      onClick={() => uiStore.set({ modal: !uiStore.value.modal })}
    >
      { title }
    </button>
  )
}
