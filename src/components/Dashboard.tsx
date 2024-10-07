import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import WeatherWidget from './WeatherWidget';
import { useWeather } from './WeatherContext';

const Dashboard: React.FC = () => {
  const [widgets, setWidgets] = useState<number[]>([]);
  const { toggleUnit } = useWeather();

  useEffect(() => {
    const savedWidgets = JSON.parse(localStorage.getItem('widgets') || '[]');
    setWidgets(savedWidgets);
  }, []);

  useEffect(() => {
    localStorage.setItem('widgets', JSON.stringify(widgets));
  }, [widgets]);

  const addWidget = () => {
    setWidgets((prev) => [...prev, prev.length]);
  };

  const removeWidget = (index: number) => {
    setWidgets((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Box sx={{ m: 2, flexGrow: 1 }}>
      <Stack direction="row" spacing={3}>
        <Button variant="outlined" onClick={addWidget}>Add Widget</Button>
        <Button variant="outlined" onClick={toggleUnit}>Toggle Unit</Button>
      </Stack>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {widgets.map((_, index) => (
          <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }} key={index}>
            <WeatherWidget onRemove={() => removeWidget(index)} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
