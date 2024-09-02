import React from 'react';

type FormInputProps = {
  type?: 'text' | 'number' | 'email';
  label: string;
  placeholder?: string;
  value: string;
  readonly?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInput: React.FC<FormInputProps> = ({ type, label, placeholder, value, readonly, onChange }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center border border-gray-400 rounded-xl p-3 mb-8">
      <label className="text-green-800 font-semibold mb-2 sm:mb-0 sm:mr-4 min-w-max ml-0 sm:ml-4">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readonly}
        className="w-full sm:w-auto flex-grow border border-gray-400 rounded-xl p-2 focus:outline-none sm:ml-4"
      />
    </div>
  );
};

export default FormInput;