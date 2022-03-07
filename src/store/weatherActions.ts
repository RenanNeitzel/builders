import {GET_WEATHER, SET_ERROR} from './types';
import {API_BASE_URL, API_KEY} from '../../env';

export type ParamsLocationType = {
  lat: number | undefined;
  lon: number | undefined;
};

export type WeatherDataType = {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lat: number;
    lon: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: [
    {
      description: string;
      icon: string;
      id: number;
      main: string;
    },
  ];
  wind: {
    deg: number;
    speed: number;
  };
};

export const getWeather = (
  {lat, lon}: ParamsLocationType,
  onSuccess = (resultData: WeatherDataType) => {
    resultData;
  },
  onError = () => {},
) => {
  return async (dispatch: any) => {
    try {
      const result = await fetch(
        `${API_BASE_URL}/data/2.5/weather?units=metric&lang=pt_br&lat=${lat}&lon=${lon}&appid=${API_KEY}`,
      );

      if (!result.ok) {
        const resultData = await result.json();
        throw new Error(resultData.message);
      }

      const resultData = await result.json();
      dispatch({
        type: GET_WEATHER,
        payload: resultData,
      });
      onSuccess(resultData);
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error,
      });
      onError();
    }
  };
};
