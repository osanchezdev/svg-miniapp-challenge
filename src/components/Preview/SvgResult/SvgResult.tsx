import React, { useContext } from 'react';
import { useEffect } from 'react';
import { SvgContext } from '../../../context/svgContext';

import './SvgResult.css';

const SvgResult = () => {
  const { svgContent, filters } = useContext(SvgContext);

  useEffect(() => {
    let svgWrapper = document.getElementById('svg-result');
    if (svgWrapper && svgContent) {
      svgWrapper.innerHTML = svgContent;
    }
  }, [svgContent]);

  useEffect(() => {
    let xlinkns = 'http://www.w3.org/1999/xlink';
    let svgWrapper = document.getElementById('svg-result');
    let svg = svgWrapper?.getElementsByTagName('svg')[0];

    if (svgWrapper) {
      var graphicsEls = svg?.getElementsByTagName('path');

      if (svg && graphicsEls) {
        for (var i = 0; i < graphicsEls.length; i++) {
          var element = graphicsEls[i];

          element?.setAttribute('opacity', `${filters?.opacity}`);
          element?.setAttribute(
            'transform',
            `rotate(${filters?.rotate}) ` +
              `scale(${filters?.scale} ${filters?.scale}) ` +
              `translate(${filters?.translateX} ${filters?.translateY})`
          );
        }
      }
    }
  }, [filters]);

  return <div id="svg-result" className="svg-result__wrapper"></div>;
};

export default SvgResult;
