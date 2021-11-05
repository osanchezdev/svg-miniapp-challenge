import React, { useContext } from 'react';
import { SvgContext } from '../../../context/svgContext';
import InputNumber from '../../global/InputNumber/InputNumber';
import Range from '../../global/Range/Range';

interface Props {}

const SvgControls = (props: Props) => {
  const { handleFilterChange } = useContext(SvgContext);

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
          handleChange={handleFilterChange}
        />
        <Range
          id="rotate"
          label="Rotate"
          step={0.1}
          min={-360}
          max={360}
          currentValue={0}
          handleChange={handleFilterChange}
        />
        <Range
          id="scale"
          label="Scale"
          step={0.1}
          min={0.1}
          max={2}
          currentValue={1}
          handleChange={handleFilterChange}
        />
        <Range
          id="translateX"
          label="translateX"
          step={0.1}
          min={-500}
          max={1000}
          currentValue={0}
          handleChange={handleFilterChange}
        />
        <Range
          id="translateY"
          label="translateY"
          step={0.1}
          min={-500}
          max={1000}
          currentValue={0}
          handleChange={handleFilterChange}
        />
        <InputNumber
          id="bboxFilter"
          label="BBox Filter"
          placeholder="0"
          handleChange={handleFilterChange}
        />
      </div>
    </div>
  );
};

export default SvgControls;
