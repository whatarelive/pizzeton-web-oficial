interface Props {
    selectTab: string;
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const buttons = ['Pizzas', 'Pastas', 'Bebidas', 'Postres'];

export default function MenuTabs({ selectTab, handleClick }: Props) {
  return (
    <div className="flex w-full max-w-screen-2xl justify-start gap-2">
        { 
            buttons.map(label => (
                <button 
                    key={label} 
                    onClick={handleClick}
                    aria-label="Cambiar la categoria de productos del menú"
                    className={`
                        rounded-lg px-2 py-1 text-sm sm:text-subtitle font-semibold
                        ${selectTab === label ? 'text-primary bg-white' : 'text-white text-opacity-80 hover:bg-secondary'}
                    `}
                >
                    { label }
                </button>
            )) 
        }
    </div>
  )
}