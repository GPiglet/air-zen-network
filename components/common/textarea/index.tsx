import React, {FC} from 'react'

type InputProps = {
    label ?: string,
    inputColor?: string,
    rows: number,
    className: string,
    placeholder: string,
    value: string
}

const CustomTextarea: FC<InputProps> = ({label, inputColor, className, placeholder, rows, value  }) => {

    return (
        <div className={className}>
            <p className='ml-3 text-slate-300 '>{label}</p>
            <textarea 
                rows={rows}
                className={`w-full bg-transparent custom-input py-2 px-3 border ${inputColor}`}
                placeholder={placeholder}
                defaultValue={value}
                readOnly
             />
        </div>
    )
}

export default CustomTextarea