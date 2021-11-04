import React from 'react';
import './Upload.css';

interface UploadI {
  id: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Upload = ({ id, handleChange }: UploadI) => {
  return (
    <div className="upload__wrapper">
      <input
        id={id}
        type="file"
        placeholder=""
        className="upload__input"
        accept="image/svg+xml"
        onChange={handleChange}
      />
      <span>Upload</span>
    </div>
  );
};

export default Upload;
