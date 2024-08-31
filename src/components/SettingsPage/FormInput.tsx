import React from 'react';

type FormInputProps = {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInput: React.FC<FormInputProps> = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="flex items-center border border-gray-400 rounded-xl p-3 mb-8">
      <label className="text-green-800 font-semibold mr-4 min-w-max ml-4">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly
        className="flex-grow border border-gray-400 rounded-xl p-1 focus:outline-none absolute ml-36 w-1/3 pl-4"
      />
    </div>
  );
};

export default FormInput;