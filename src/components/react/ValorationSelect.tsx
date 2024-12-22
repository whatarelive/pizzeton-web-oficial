import React, { useState } from "react";

const VALORATION_OPTIONS = [1, 2, 3, 4, 5];

export default function ValorationSelect() {
    const [value, setValue] = useState<string | number>('placeHolder');

    const handleChange = ( event: React.ChangeEvent<HTMLSelectElement> ) => {
        setValue(event.target.value);
    }

  return (
    <div className="pr-3 pl-1 focus-within:outline-none focus-within:ring-2 focus-within:ring-amber-500 bg-primary rounded-lg">
        <select id="valoration" name="valoration" value={value} onChange={handleChange}
            className={`w-full pl-2 py-3 focus:outline-none bg-primary ${
                value === 'placeHolder' ? 'text-slate-300 text-opacity-80' : 'text-white text-opacity-100'
            }`} 
        >    
            <option value="placeHolder" className="text-slate-300 text-opacity-80">
                Seleccione valoración
            </option>
            
            {VALORATION_OPTIONS.map((valoration, index) => (
                <option key={index} value={valoration}>
                    { valoration } 
                </option>
            ))}
        </select>
    </div>
  )
}
