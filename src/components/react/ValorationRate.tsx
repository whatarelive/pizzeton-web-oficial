import { FaStar } from "react-icons/fa6";

const VALORATION_VALUES = [1, 2, 3, 4, 5];

interface Props {
  valoration: number;
}

export default function ValorationRate({ valoration }: Props) {
  return (
    <ul className="inline-flex">
        {VALORATION_VALUES.map((key) => (
          <li key={key}>
            <FaStar className="w-6 h-6" color={`${key <= valoration ? '#eab308': '#ffffff'}`}/>
          </li>
        ))}
    </ul>
  )
}