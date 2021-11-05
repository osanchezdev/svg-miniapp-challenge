import React, { useContext } from 'react';
import { useEffect } from 'react';
import { SvgContext } from '../../../context/svgContext';
import { calculateDiagonal } from '../../../utils';

import './SvgResult.css';

const SvgResult = () => {
  const { svgContent, filters } = useContext(SvgContext);

  useEffect(() => {
    let svgWrapper = document.getElementById('svg-result');
    if (svgWrapper) {
      if (svgContent) svgWrapper.innerHTML = svgContent;
      var svg = svgWrapper?.getElementsByTagName('svg')[0];
      let graphicsEls: any[] = [
        svg?.getElementsByTagName('path'),
        svg?.getElementsByTagName('rect'),
        svg?.getElementsByTagName('circle'),
        svg?.getElementsByTagName('ellipse'),
        svg?.getElementsByTagName('polygon'),
        svg?.getElementsByTagName('polyline'),
        svg?.getElementsByTagName('line'),
      ];

      if (svg && graphicsEls) {
        for (var i = 0; i < graphicsEls.length; i++) {
          for (let j = 0; j < graphicsEls[i].length; j++) {
            let element = graphicsEls[i][j];
            let { width, height } = element.getBBox();

            element?.setAttribute('transform-origin', `center center`);
            element?.setAttribute('opacity', `${filters?.opacity}`);
            element?.setAttribute(
              'transform',
              `rotate(${filters?.rotate}) ` +
                `scale(${filters?.scale} ${filters?.scale}) ` +
                `translate(${filters?.translateX} ${filters?.translateY})`
            );

            if (filters && filters['bboxFilter'])
              if (calculateDiagonal(width, height) < filters['bboxFilter'])
                element.remove();
          }
        }
      }
    }
  }, [svgContent, filters]);

  return <div id="svg-result" className="svg-result__wrapper"></div>;
};

export default SvgResult;
