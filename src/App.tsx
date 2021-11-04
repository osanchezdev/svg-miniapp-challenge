import React, { useState } from 'react';
import Upload from './components/global/Upload/Upload';
import Preview from './components/Preview/Preview';

interface Props {}

const App = (props: Props) => {
  const [fileLoaded, setFileLoaded] = useState<boolean>(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('handleInputChange');
    setFileLoaded(true);
  };
  return (
    <div className="app__wrapper">
      {fileLoaded ? (
        <div className="app__preview__wrapper">
          <Preview />
        </div>
      ) : (
        <div className="app__upload__wrapper">
          <Upload id="svg-input" handleChange={handleInputChange} />
        </div>
      )}
    </div>
  );
};

export default App;
