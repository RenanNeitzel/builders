import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {useLiveLocation} from './hooks/useLiveLocation';
import {useDispatch} from 'react-redux';
import {getWeather, WeatherDataType} from '@store/weatherActions';
import {Simple} from '@components/template/Simple';

import {Suspense} from '@components/organism/suspense';
import {ProgressOverlay} from '@components/atom/ProgressOverlay';
import {Weather} from '@components/molecule/Weather';
import {WeatherError} from '@components/molecule/Weather/WeatherError';
import {BackgroundImage} from '@components/organism/BackgroundImage';
import SkyBg from '../assets/images/sky-image.png';
import LogoBuilders from '../assets/images/logo-builders.png';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherDataType>();
  const dispatch = useDispatch();

  const {error, location} = useLiveLocation();

  console.log(weatherData);

  const getCurrentWeather = useCallback(() => {
    dispatch(
      getWeather(
        {
          lat: location.currentLatitude,
          lon: location.currentLongitude,
        },
        data => {
          setWeatherData(data);
          setIsLoading(false);
        },
      ),
    );
  }, [dispatch, location.currentLatitude, location.currentLongitude]);

  useEffect(() => {
    setIsLoading(true);
    if (location) {
      getCurrentWeather();
    }

    if (error) {
      setIsLoading(false);
    }
  }, [dispatch, location, getCurrentWeather, error]);

  const updateCurrentWeather = useCallback(() => {
    getCurrentWeather();
  }, [getCurrentWeather]);

  return (
    <Suspense
      condition={isLoading}
      fallback={
        <ProgressOverlay>
          <Text style={styles.text}>Estamos buscando sua localização</Text>
          <Text style={styles.text}>Aguarde um instante</Text>
        </ProgressOverlay>
      }>
      <BackgroundImage source={SkyBg} backgroundColor="white">
        <Simple>
          <View style={styles.content}>
            <View style={styles.imageWrapper}>
              <Image
                source={LogoBuilders}
                resizeMode="stretch"
                style={styles.logo}
              />
            </View>
            <View style={styles.wrapper}>
              {location ? (
                <Weather
                  weatherData={weatherData}
                  onUpdate={updateCurrentWeather}
                />
              ) : (
                <WeatherError error={error} />
              )}
            </View>
          </View>
        </Simple>
      </BackgroundImage>
    </Suspense>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: 'white',
  },
  content: {
    flexGrow: 1,
    marginVertical: 32,
  },
  wrapper: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginVertical: 32,
  },
  imageWrapper: {
    flexGrow: 1,
    alignItems: 'center',
  },
  logo: {
    width: '70%',
    height: 65,
  },
});

export default App;
