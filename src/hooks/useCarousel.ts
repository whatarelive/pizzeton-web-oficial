import { useState } from "react";

interface Props {
    size: number;
}

export function useCarousel({ size }: Props) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const previusSlide = () => {
        const isFirstSlide = selectedIndex === 0;
        const newIndex = isFirstSlide ? size - 1 : selectedIndex - 1;
        setSelectedIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = selectedIndex === size - 1;
        const newIndex = isLastSlide ? 0 : selectedIndex + 1;
        setSelectedIndex(newIndex);
    };

    return {
        selectedIndex,
        previusSlide,
        nextSlide
    }
}