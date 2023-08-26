import React from "react";

interface RadioBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
	labelKey?: string;
	label?: string | any;
}
const RadioBox: React.FC<RadioBoxProps> = ({ name, labelKey, label, ...rest }) => {
    return (
        <label className="radiobox" htmlFor={label}>
            <input
                id={label}
                type="radio"
                className=""
                name={name}
                {...rest}
            />
            <div className="radiobox-round"></div>
            <span className="ms-4 -mt-0.5">{labelKey ? labelKey : label}</span>
        </label>    
    );
}

export default RadioBox
