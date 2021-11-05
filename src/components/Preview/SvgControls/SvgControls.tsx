import React, { useContext } from 'react';
import { SvgContext } from '../../../context/svgContext';
import InputNumber from '../../global/InputNumber/InputNumber';
import Range from '../../global/Range/Range';

import './SvgControls.css';

interface Props {}

const SvgControls = (props: Props) => {
  const { filters, handleFilterChange } = useContext(SvgContext);

  return (
    <div className="svg_controls__wrapper">
      <Range
        id="opacity"
        label="Opacity"
        step={0.1}
        min={0}
        max={1}
        currentValue={filters && filters['opacity']}
        handleChange={handleFilterChange}
      />
      <Range
        id="rotate"
        label="Rotate"
        step={0.1}
        min={-360}
        max={360}
        currentValue={filters && filters['rotate']}
        handleChange={handleFilterChange}
      />
      <Range
        id="scale"
        label="Scale"
        step={0.1}
        min={0.1}
        max={10}
        currentValue={filters && filters['scale']}
        handleChange={handleFilterChange}
      />
      <Range
        id="translateX"
        label="translateX"
        step={0.1}
        min={-500}
        max={1000}
        currentValue={filters && filters['translateX']}
        handleChange={handleFilterChange}
      />
      <Range
        id="translateY"
        label="translateY"
        step={0.1}
        min={-500}
        max={1000}
        currentValue={filters && filters['translateY']}
        handleChange={handleFilterChange}
      />
      <InputNumber
        id="bboxFilter"
        label="BBox Filter"
        placeholder="0"
        currentValue={filters && filters['bboxFilter']}
        handleChange={handleFilterChange}
      />
    </div>
  );
};

export default SvgControls;
