import React, { createContext, useState } from 'react';

type SvgState = {
  svgContent: string;
};

const initialState: SvgState = {
  svgContent: '',
};

export const SvgContext = createContext<Partial<SvgState>>(initialState);

interface SvgProviderProps {
  children: React.ReactNode;
}

const SvgProvider = ({ children }: SvgProviderProps) => {
  const [svgContent, setSvgContent] = useState<string>('');
  return (
    <SvgContext.Provider
      value={{
        svgContent,
      }}
    >
      {children}
    </SvgContext.Provider>
  );
};

export default SvgProvider;
