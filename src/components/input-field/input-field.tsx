import React from "react";

interface InputFieldProps {
  label?: string;
  type?: string;
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type = "text", id, name, value, placeholder, onChange, className = "" }) => {
  return (
    <div className={`mb-3  ${className}`}>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="placeholder:text-[#aca5c3] mt-3 px-4 py-3 w-full bg-[#d8d6e2] text-white text-lg  rounded-lg outline-none focus:ring-2 focus:ring-purple-600"
      />
    </div>
  );
};

export default InputField;
