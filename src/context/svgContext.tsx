import React, { createContext, useEffect, useState } from 'react';

type SvgFilters = {
  opacity: number;
  rotate: number;
  scale: number;
  translateX: number;
  translateY: number;
  bboxFilter: number;
};

type SvgState = {
  svgContent: string;
  filters: SvgFilters;
  setSvgContent?: (svgContent: string) => void;
  handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const initialState: SvgState = {
  svgContent: '',
  filters: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    translateX: 0,
    translateY: 0,
    bboxFilter: 0,
  },
  handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
};

export const SvgContext = createContext<Partial<SvgState>>(initialState);

interface SvgProviderProps {
  children: React.ReactNode;
}

const SvgProvider = ({ children }: SvgProviderProps) => {
  const [svgContent, setSvgContent] = useState<string>('');
  const [filters, setFilters] = useState<SvgFilters>(initialState.filters);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFilters({
      ...filters,
      [id]: Number(value),
    });
  };

  return (
    <SvgContext.Provider
      value={{
        svgContent,
        filters,
        setSvgContent,
        handleFilterChange,
      }}
    >
      {children}
    </SvgContext.Provider>
  );
};

export default SvgProvider;
