import React from 'react';
import { WeatherProvider } from './components/WeatherContext';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  return (
    <WeatherProvider>
      <Dashboard />
    </WeatherProvider>
  );
};

export default App;
