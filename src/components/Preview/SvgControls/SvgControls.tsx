import React from 'react';
import InputNumber from '../../global/InputNumber/InputNumber';
import Range from '../../global/Range/Range';

interface Props {}

const SvgControls = (props: Props) => {
  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('e', e.currentTarget.value);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('e', e.currentTarget.value);
  };
  return (
    <div className="svg_controls__wrapper">
      <div>
        <Range
          id="opacity"
          label="Opacity"
          step={0.1}
          min={0}
          max={1}
          currentValue={0.5}
          handleChange={handleRangeChange}
        />
        <Range
          id="rotate"
          label="Rotate"
          step={0.1}
          min={-360}
          max={360}
          currentValue={0}
          handleChange={handleRangeChange}
        />
        <Range
          id="scale"
          label="Scale"
          step={0.1}
          min={1}
          currentValue={1}
          handleChange={handleRangeChange}
        />
        <Range
          id="traslateX"
          label="traslateX"
          step={0.1}
          min={-100}
          max={100}
          currentValue={0}
          handleChange={handleRangeChange}
        />
        <Range
          id="traslateY"
          label="traslateY"
          step={0.1}
          min={-100}
          max={100}
          currentValue={0}
          handleChange={handleRangeChange}
        />
        <InputNumber
          id="bbox-diagonal-filter"
          label="BBox Filter"
          placeholder="0"
          handleChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default SvgControls;
