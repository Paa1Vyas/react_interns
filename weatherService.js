// Weather API Service using Open-Meteo
// API Documentation: https://open-meteo.com/en/docs
// Note: Open-Meteo API is free and doesn't require an API key for basic usage
// For premium features (higher rate limits, more parameters), you can get an API key from https://open-meteo.com/

// Optional: Set your API key here if you have one (for premium features)
const API_KEY = null; // Replace with your API key if you have one

/**
 * Fetch current weather data for given coordinates
 * @param {number} latitude - Latitude coordinate
 * @param {number} longitude - Longitude coordinate
 * @returns {Promise<Object>} Weather data
 */
export const fetchWeatherData = async (latitude, longitude) => {
  try {
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,wind_direction_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max&timezone=auto`;
    
    // Add API key if provided
    if (API_KEY) {
      url += `&apikey=${API_KEY}`;
    }
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

/**
 * Fetch weather data for a specific city name (using geocoding first)
 * @param {string} cityName - Name of the city
 * @returns {Promise<Object>} Weather data
 */
export const fetchWeatherByCity = async (cityName) => {
  try {
    // First get coordinates from geocoding API
    const geoResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`
    );
    
    if (!geoResponse.ok) {
      throw new Error(`Geocoding API error: ${geoResponse.status}`);
    }
    
    const geoData = await geoResponse.json();
    
    if (!geoData.results || geoData.results.length === 0) {
      throw new Error(`City not found: ${cityName}`);
    }
    
    const { latitude, longitude } = geoData.results[0];
    
    // Then fetch weather data
    return await fetchWeatherData(latitude, longitude);
  } catch (error) {
    console.error('Error fetching weather by city:', error);
    throw error;
  }
};

// Export constants for weather codes interpretation
export const WEATHER_CODES = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Fog',
  48: 'Depositing rime fog',
  51: 'Light drizzle',
  53: 'Moderate drizzle',
  55: 'Dense drizzle',
  56: 'Light freezing drizzle',
  57: 'Dense freezing drizzle',
  61: 'Slight rain',
  63: 'Moderate rain',
  65: 'Heavy rain',
  66: 'Light freezing rain',
  67: 'Heavy freezing rain',
  71: 'Slight snow fall',
  73: 'Moderate snow fall',
  75: 'Heavy snow fall',
  77: 'Snow grains',
  80: 'Slight rain showers',
  81: 'Moderate rain showers',
  82: 'Violent rain showers',
  85: 'Slight snow showers',
  86: 'Heavy snow showers',
  95: 'Thunderstorm',
  96: 'Thunderstorm with slight hail',
  99: 'Thunderstorm with heavy hail'
};

export default {
  fetchWeatherData,
  fetchWeatherByCity,
  WEATHER_CODES
};