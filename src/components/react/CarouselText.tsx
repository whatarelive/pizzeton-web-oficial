import { useCarousel } from "@/hooks/useCarousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { especialities } from "@/data/data";

export default function CarouselText() {
    const { selectedIndex, nextSlide, previusSlide } = useCarousel({ size: especialities.length });

  return (
    <>
        <img 
            src={especialities[selectedIndex].img} 
            alt={`Image`} 
            className="rounded-3xl min-h-52 max-h-64"
        />

        <div className="flex flex-col gap-2">
            <h6 className="font-semibold">
                {especialities[selectedIndex].title}
            </h6>
            <p className="text-sm text-white text-opacity-70">
                {especialities[selectedIndex].description}
            </p>
        </div>
        
        <div className="flex justify-around">
            <button className="rounded-full bg-thertiary p-2" onClick={previusSlide}>
                <FaArrowLeft color="#ffffff"/>
            </button>
            <button className="rounded-full bg-thertiary p-2" onClick={nextSlide}>
                <FaArrowRight color="#ffffff"/>
            </button>
        </div>
    </>
  )
}
