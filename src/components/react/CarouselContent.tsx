interface Props {
    isDynamic: boolean;
    imgBorderColor: string;
    image: string
    title?: string;
    description?: string;
}

export default function CarouselContent({ isDynamic, imgBorderColor, image, title, description }: Props) {
    if (isDynamic) {
        return (
            <div className="flex flex-col gap-6 md:flex-row md:justify-center md:items-center lg:gap-12">
                <img src={image} alt={`Image`}
                     className={`
                        rounded-3xl h-64 md:w-[350px] md:border-[5px] lg:max-w-[488px] lg:min-w-[488px] 
                        lg:h-[350px] lg:border-[10px] ${imgBorderColor}`
                    }
                />

                <div className="flex flex-col gap-2 md:w-[350px] lg:w-[488px] lg:gap-6">
                    <h6 className="lg:text-2xl">
                        {title}
                    </h6>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-6 md:flex-row md:justify-center md:items-center lg:gap-12">
            <div className="flex flex-col gap-2 md:w-[350px] lg:w-[488px] lg:gap-6">
                <h6 className="lg:text-2xl">
                    Interior del restaurante
                </h6>
                <p>
                    El cálido y acogedor interior de la pizzería está decorado con detalles rústicos que
                    evocan una atmósfera auténtica y familiar, mientras que una suave luz amarilla ilumina
                    las mesas de madera, creando un ambiente relajado y amigable. Las mesas, dispuestas de
                    forma ordenada, están rodeadas de sillas cómodas, ideal para disfrutar de una deliciosa
                    pizza en buena compañía.
                </p>
            </div>

            <img src={image} alt={`Image`}
                 className={`
                        rounded-3xl h-64 md:w-[350px] md:border-[5px] lg:max-w-[488px] lg:min-w-[488px] 
                        lg:h-[350px] lg:border-[10px] ${imgBorderColor}`
                 }
            />
        </div>
    )
}