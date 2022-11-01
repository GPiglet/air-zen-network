import React, {useEffect, useState, forwardRef} from 'react'

const CustomInput = forwardRef((props: any, ref: any) => {
    const [value, setValue] = useState<string>('');
    useEffect(() => {
        setValue(props.value);
    }, [props.value])
    return (
        <div className={`w-full ${props.className} ${!props.invalid ? ('custom-input-gradient') : (props.invalidClassName ? props.invalidClassName : 'border-2 border-white rounded-md')}`}>
            <input
                ref={ref}
                className="custom-input-dark text-left w-full"
                placeholder={props.placeholder}
                value={value}
                onChange={(e)=>{setValue(e.target.value); if ( props.onChange ) props.onChange(e)}}
            />
        </div>
    )
})

CustomInput.displayName = 'CustomInput'
export default CustomInput