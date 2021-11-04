import React, { useContext, useEffect } from 'react';
import { FileContext } from '../../../context/fileContext';

import './SvgThumbnail.css';

const SvgThumbnail = () => {
  const { isFileLoaded, fileDataURL } = useContext(FileContext);

  useEffect(() => {
    if (isFileLoaded) {
      const svg = document.getElementById('thumbnail');
      if (fileDataURL && svg) {
        svg.setAttribute('src', fileDataURL);
      }
    }
  }, [fileDataURL]);

  return (
    <div className="svg_thumbnail__wrapper">
      {isFileLoaded && fileDataURL && <img id="thumbnail" />}
    </div>
  );
};

export default SvgThumbnail;
