import ProductPrice from './ProductPrice';
import type { Product } from '@/interfaces'

interface Props extends Omit<Product, 'imgUrl'> {}

export default function MenuCard({ title, subtitle, price }: Props) {
  return (
    <article className="flex flex-1 flex-col border-b-[1px] gap-2 py-2 justify-between border-base">
        <div className="flex flex-col xs:flex-row justify-between">
            <h6>{ title }</h6>
            <ProductPrice price={ price } />
        </div>
        <p>{ subtitle }</p>
    </article>
  )
}
