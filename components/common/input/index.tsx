import React, {FC} from 'react'

type InputProps = {
    label ?: string,
    inputColor?: string,
    type?: string,
    className: string,
    placeholder: string,
    value: string
}

const CustomInput: FC<InputProps> = ({label, type, inputColor, className, placeholder, value  }) => {

    return (
        <div className={className}>
            <p className='ml-3 text-slate-300 '>{label}</p>
            <input 
                type={type} 
                className={`w-full bg-transparent custom-input py-2 px-3 border ${inputColor}`}
                placeholder={placeholder}
                value={value}
                readOnly
             />
        </div>
    )
}

export default CustomInput