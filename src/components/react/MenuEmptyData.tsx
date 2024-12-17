interface Props {
  tab: string;
}

export default function EmptyData({ tab }: Props) {
  return (
    <div className="flex flex-col lg:flex-row max-w-max items-center gap-6 p-4 bg-secondary rounded-xl justify-center">
      <img
        src="/svg/nodata.svg"
        alt="Sin menú disponible."
        className="w-56 xs:w-64 p-6 opacity-85 bg-base rounded-xl"
        />
      <div className="flex flex-col w-56 xs:w-64 items-center gap-6">
        <p className="font-bold text-wrap text-center text-amber-400">
          "No hay nada que mostrar por el momento en la categoría de {tab}."
        </p>
      </div>
    </div>
  )
}
