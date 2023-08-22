'use client'

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

interface InputProps {
    id: string,
    label: string,
    type?: string,
    disabled?: boolean,
    required?: boolean,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors
}

const Input: React.FC<InputProps> = ({
    id,
    label,
    type = 'text',
    disabled,
    required,
    register,
    errors 
}) => {
  return (
    <div className="input">
        <input 
            id={id}
            disabled={disabled}
            {...register(id, { required })}
            type={type}
            style={{
                border: `1px solid ${errors[id] ? '#ff5050' : '#262626'}`
            }}
        />
        <label 
            style={{
                color: `1px solid ${errors[id] ? '#ff5050' : '#262626'}`
            }}
        >
            {label}
        </label>
    </div>
  )
}

export default Input