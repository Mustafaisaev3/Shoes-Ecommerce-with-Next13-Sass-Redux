import React from "react";

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
	labelKey?: string;
	label?: string | any;
}
const CheckBox: React.FC<CheckBoxProps> = ({ labelKey, label, ...rest }) => {
    return (
        <label className="checkbox" htmlFor={label}>
            <input
                id={label}
                type="checkbox"
                className=""
                {...rest}
            />
            <div className="checkbox-round"></div>
            <span className="ms-4 -mt-0.5">{labelKey ? labelKey : label}</span>
        </label>    
    );
}

export default CheckBox
