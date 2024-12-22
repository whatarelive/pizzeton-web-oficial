import { useEffect, useRef } from 'react';
import Glide from '@glidejs/glide';
import OpinionsCard from '@/components/react/OpinionsCard';

interface Props {
    opinions: {
        user: {
            name: string, 
        } 
        opinion: string, 
        valoration: number,
    }[]
}

export default function CarouselOpinions({ opinions }: Props) {
    const glideRef = useRef<Glide | null>(null)

    useEffect(() => {
        if (opinions.length > 0 && !glideRef.current) {
            glideRef.current = new Glide('#glide', {
                type: 'carousel',
                perView: 4,
                gap: 20,
                autoplay: 2000,
                hoverpause: true,
                breakpoints: {
                1024: {
                    perView: 3
                },
                768: {
                    perView: 2
                },
                640: {
                    perView: 1,
                }
                }
            });

            glideRef.current.mount();
        }

        return () => {
            if (glideRef.current) {
                glideRef.current.destroy();
            }
        }
    }, [opinions])

  return (
    <div id='glide' className="w-full max-w-screen-2xl p-0">
        <div className="overflow-hidden w-full max-w-[300px] sm:max-w-[380px] 
                md:max-w-[680px] lg:max-w-[980px] xl:max-w-screen-xl justify-self-center" 
            data-glide-el="track"
        >
            <ul className="relative list-none touch-pan-y overflow-hidden m-0 p-0 
                    items-center whitespace-nowrap flex flex-nowrap will-change-transform"
            >
                {
                    opinions.map((op, index) => (
                        <li key={index} className="p-1">
                            <OpinionsCard op={op}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}
