import { useCarousel } from "@/hooks/useCarousel";
import CarouselContent from "@/components/react/CarouselContent.tsx";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

interface Props {
    isDynamic: boolean;
    array: any[];
}

export default function Carousel({ isDynamic, array }: Props) {
    const { selectedIndex, previusSlide, nextSlide } = useCarousel({ size: array.length });

  return (
      <>
          <CarouselContent
              isDynamic={isDynamic}
              imgBorderColor={ isDynamic ? "md:border-secondary" : "md:border-base" }
              image={array[selectedIndex].img || array[selectedIndex]}
              title={array[selectedIndex].title}
              description={array[selectedIndex].description}
          />

          <div className="flex justify-around md:justify-center md:gap-24">
              <button className={`rounded-full p-2 ${ isDynamic ? "bg-secondary" : "bg-base" }`} onClick={previusSlide}>
                  <FaArrowLeft color="#ffffff"/>
              </button>
              <button className={`rounded-full p-2 ${ isDynamic ? "bg-secondary" : "bg-base" }`} onClick={nextSlide}>
                  <FaArrowRight color="#ffffff"/>
              </button>
          </div>
      </>
  )
}