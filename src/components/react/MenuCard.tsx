import ProductPrice from './ProductPrice';
import type { MenuProduct } from '@/interfaces'

interface Props {
    product: MenuProduct;
}

export default function MenuCard({product}: Props) {
    const { img, title, subtitle, price } = product;

  return (
    <article className="flex flex-col border-b-[1px] gap-2 py-2 justify-between border-base">
        <img src={img} alt={`Imagen de la ${title}`} className='hidden'/>
        
        <div className="flex justify-between">
            <h6 className='text-white font-semibold'>
                {title}
            </h6>
    
            <ProductPrice price={price} />
        </div>

        { 
            subtitle && 
            <p className='text-white text-sm text-opacity-70'>
                {subtitle}
            </p>
        }
    </article>
  )
}
