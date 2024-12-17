import { uiStore } from "@/store/UiStore";

interface Props {
  title: string;
}

export default function AgregationsButton({ title }: Props) {
  return (
    <button 
      className="btn w-fit" 
      onClick={() => uiStore.set({ modal: !uiStore.value.modal })}
    >
      { title }
    </button>
  )
}
