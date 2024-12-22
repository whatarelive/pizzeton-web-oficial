import { FaStar } from "react-icons/fa6";

interface Props {
    op: {
        user: {
            name: string, 
        } 
        opinion: string, 
        valoration: number,
    }
}

const VALORATION_VALUES = [1, 2, 3, 4, 5];

export default function OpinionsCard({ op }: Props) {
    const { opinion, user, valoration } = op;

  return (
    <div className="flex flex-col items-center w-full max-w-[300px] sm:max-w-[380px] gap-4 p-6 bg-primary rounded-xl">
        <ul className="inline-flex">
            {VALORATION_VALUES.map((key) => (
                <li key={key}>
                    <FaStar className="w-6 h-6" color={`${key <= valoration ? '#eab308': '#ffffff'}`}/>
                </li>
            ))}
        </ul>
        <p className="text-center">
            { opinion }
        </p>
        <h6>{ user.name }</h6>    
    </div>
  )
}
