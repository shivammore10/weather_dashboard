import React, { createContext, useContext, useState, ReactNode } from 'react';

type WeatherContextType = {
  unit: 'C' | 'F';
  toggleUnit: () => void;
};

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [unit, setUnit] = useState<'C' | 'F'>('C');

  const toggleUnit = () => {
    setUnit((prev) => (prev === 'C' ? 'F' : 'C'));
  };

  return (
    <WeatherContext.Provider value={{ unit, toggleUnit }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
};
