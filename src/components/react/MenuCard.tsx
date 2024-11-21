import ProductPrice from './ProductPrice';
import type { MenuProduct } from '@/interfaces'

interface Props {
    product: MenuProduct;
}

export default function MenuCard({product}: Props) {
    const { title, subtitle, price } = product;

  return (
    <article className="flex flex-1 flex-col border-b-[1px] gap-2 py-2 justify-between border-base">
        <div className="flex justify-between">
            <h6>{title}</h6>
            <ProductPrice price={price} />
        </div>

        { 
            subtitle && <p>{subtitle}</p>
        }
    </article>
  )
}
