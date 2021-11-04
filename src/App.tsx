import React, { useContext, useState } from 'react';
import { FileContext } from './context/fileContext';
import Upload from './components/global/Upload/Upload';
import Preview from './components/Preview/Preview';

interface Props {}

const App = (props: Props) => {
  const { isFileLoaded, onFileChange } = useContext(FileContext);

  return (
    <div className="app__wrapper">
      {isFileLoaded ? (
        <div className="app__preview__wrapper">
          <Preview />
        </div>
      ) : (
        <div className="app__upload__wrapper">
          <Upload id="svg-input" handleChange={onFileChange} />
        </div>
      )}
    </div>
  );
};

export default App;
