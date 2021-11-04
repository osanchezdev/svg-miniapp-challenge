import React from 'react';
import SvgResult from './SvgResult/SvgResult';
import SvgControls from './SvgControls/SvgControls';
import SvgThumbnail from './SvgThumbnail/SvgThumbnail';

import './Preview.css';

const Preview = () => {
  return (
    <div className="preview__wrapper">
      <div className="preview__left-panel">
        <SvgThumbnail />
        <SvgControls />
      </div>
      <div className="preview__right-panel">
        <SvgResult />
      </div>
    </div>
  );
};

export default Preview;
