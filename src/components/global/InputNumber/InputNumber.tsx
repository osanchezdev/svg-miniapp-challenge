import React from 'react';

import './InputNumber.css';

interface InputNumberI {
  id: string;
  label: string;
  placeholder: string;
  currentValue?: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputNumber = ({
  id,
  label,
  placeholder,
  handleChange,
}: InputNumberI) => {
  return (
    <div key={id} className="input-number__wrapper">
      <div className="input-number-label__wrapper">
        <label className="input-number-label">{label}</label>
      </div>
      <input
        id={id}
        className="input-number"
        type="number"
        min="0"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputNumber;
