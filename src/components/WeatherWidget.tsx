import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useWeather } from './WeatherContext';

interface WeatherWidgetProps {
  onRemove: () => void;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ onRemove }) => {
  const { unit } = useWeather();
  
  // Hardcoded weather data
  const temperature = unit === 'C' ? 25 : 77; // Example temperature
  const condition = "Sunny"; // Hardcoded condition
  const weatherIcon = "☀️"; // Use appropriate icons

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{`New York`}</Typography>
        <Typography variant="h6">{`${temperature}°${unit}`}</Typography>
        <Typography variant="body1">{condition} {weatherIcon}</Typography>
        <IconButton onClick={onRemove} aria-label="remove">
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;
