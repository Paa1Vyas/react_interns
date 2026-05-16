import React, { useState, useEffect } from 'react';
import { fetchWeatherData, fetchWeatherByCity, WEATHER_CODES } from '../weatherService';

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cityInput, setCityInput] = useState('New York');

  // Using coordinates for New York City as default
  const latitude = 40.7128;
  const longitude = -74.0060;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const data = await fetchWeatherData(latitude, longitude);
        setWeatherData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWeather();
  }, [latitude, longitude]);

  const handleCitySearch = async (e) => {
    e.preventDefault();
    if (!cityInput.trim()) return;
    
    try {
      setLoading(true);
      const data = await fetchWeatherByCity(cityInput);
      setWeatherData(data);
      setError(null);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading && !weatherData) return <div className="p-4 text-center">Loading weather...</div>;
  if (error && !weatherData) return <div className="p-4 text-red-500 text-center">Error: {error}</div>;
  if (!weatherData) return <div className="p-4 text-center">No weather data available</div>;

  const { current } = weatherData;
  const weatherDescription = WEATHER_CODES[current.weather_code] || 'Unknown';

  return (
    <div className="max-w-md mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg border border-blue-200 mt-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Weather Widget</h2>
      
      {/* Search Form */}
      <form onSubmit={handleCitySearch} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
            placeholder="Enter city name..."
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Search
          </button>
        </div>
      </form>

      {/* Weather Display */}
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="text-6xl font-bold text-gray-800">{current.temperature_2m}°C</div>
        <div className="text-xl capitalize text-gray-600">{weatherDescription}</div>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 bg-white/50 rounded-lg p-3">
          <div className="flex items-center gap-1">
            <span>💧</span>
            <span>Humidity: {current.relative_humidity_2m}%</span>
          </div>
          <div className="flex items-center gap-1">
            <span>💨</span>
            <span>Wind: {current.wind_speed_10m} km/h</span>
          </div>
          <div className="flex items-center gap-1">
            <span>🌧️</span>
            <span>Precipitation: {current.precipitation} mm</span>
          </div>
        </div>
        <div className="text-xs text-gray-500">
          Last updated: {new Date(current.time).toLocaleString()}
        </div>
      </div>

      {error && (
        <div className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded text-sm text-center">
          {error}
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;
