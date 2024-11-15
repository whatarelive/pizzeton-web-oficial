import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useCarousel } from "@/hooks/useCarousel";

const images = ['/pizzeria2.jpeg', '/pizzeria1.jpeg', '/pizzeria3.jpeg'];

export default function Carousel() {
    const { selectedIndex, previusSlide, nextSlide } = useCarousel({ size: images.length });

  return (
    <>
        <img 
            src={images[selectedIndex]} 
            alt={`Image`} 
            className="rounded-3xl h-56"
        />
        <div className="flex justify-around">
            <button className="rounded-full bg-base p-2" onClick={previusSlide}>
                <FaArrowLeft color="#ffffff"/>
            </button>
            <button className="rounded-full bg-base p-2" onClick={nextSlide}>
                <FaArrowRight color="#ffffff"/>
            </button>
        </div>
    </>
  )
}