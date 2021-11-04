import React, { ChangeEvent, createContext, useState } from 'react';

type FileState = {
  isFileLoaded: boolean;
  fileDataURL: string;
  fileContent: string;
  loadError?: string;
  onFileChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const initialState: FileState = {
  isFileLoaded: false,
  fileDataURL: '',
  fileContent: '',
};

export const FileContext = createContext<Partial<FileState>>(initialState);

interface FileProviderProps {
  children: React.ReactNode;
}

const FileProvider = ({ children }: FileProviderProps) => {
  const [isFileLoaded, setIsFileLoaded] = useState<boolean>(false);
  const [fileDataURL, setFileDataURL] = useState<string>('');
  const [fileContent, setFileContent] = useState<string>('');
  const [loadError, setLoadError] = useState<string>('');

  const onLoadFileAsText = (event: ProgressEvent<FileReader>): void => {
    let textContent: string = `${event?.target?.result}`;
    if (textContent) {
      setFileContent(textContent);
      setIsFileLoaded(true);
    }
  };

  const onLoadFileAsDataURL = (event: ProgressEvent<FileReader>): void => {
    let dataURL: string = `${event?.target?.result}`;
    if (dataURL) {
      setFileDataURL(dataURL);
      setIsFileLoaded(true);
    }
  };

  const onFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    var file = e.target.files && e.target.files[0];
    if (file) {
      const textReader = new FileReader();
      const dataUrlReader = new FileReader();

      textReader.addEventListener('load', onLoadFileAsText);
      textReader.readAsText(file);
      dataUrlReader.addEventListener('load', onLoadFileAsDataURL);
      dataUrlReader.readAsDataURL(file);
    }
  };

  return (
    <FileContext.Provider
      value={{
        isFileLoaded,
        fileDataURL,
        fileContent,
        loadError,
        onFileChange,
      }}
    >
      {children}
    </FileContext.Provider>
  );
};

export default FileProvider;
