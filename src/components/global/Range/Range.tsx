import React from 'react';

import './Range.css';

interface RangeI {
  id: string;
  label: string;
  step: number;
  min?: number;
  max?: number;
  currentValue?: number;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Range = ({
  id,
  label,
  step,
  min,
  max,
  currentValue,
  handleChange,
}: RangeI) => {
  return (
    <div key={id} className="range__wrapper">
      <label className="range-label">{`${label}${
        currentValue ? `: ${currentValue}` : ''
      }`}</label>
      <input
        id={id}
        className="range-input"
        type="range"
        onChange={handleChange}
        step={step}
        min={min}
        max={max}
      />
    </div>
  );
};

export default Range;
