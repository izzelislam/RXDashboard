import React from 'react'

type Props = {
  title:string,
  placeholder?:string
  type?:string
  value?:string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput = ({title, placeholder, type="text", onChange, value}: Props) => {
  return (
    <div className="mb-3">
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">{title}</span>
        </div>
        <input 
          type={type} 
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="input input-bordered focus:border-none w-full" 
        />
      </label>
    </div>
  )
}

export default TextInput