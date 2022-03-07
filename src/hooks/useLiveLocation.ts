import {useEffect, useState} from 'react';

import Geolocation from '@react-native-community/geolocation';
import {Platform} from 'react-native';
import {useLocationPermission} from './useLocationPermission';

export const useLiveLocation = () => {
  const [location, setLocation] = useState<{
    currentLatitude: number | undefined;
    currentLongitude: number | undefined;
  }>({currentLatitude: undefined, currentLongitude: undefined});
  const [error, setError] = useState('');

  useLocationPermission();

  useEffect(() => {
    if (Platform.OS === 'android') {
      Geolocation.getCurrentPosition(
        position => {
          const currentLatitude = position.coords.latitude;
          const currentLongitude = position.coords.longitude;
          setLocation({currentLatitude, currentLongitude});
        },
        e => setError(e.message),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
      );

      return;
    }

    const watchID = Geolocation.watchPosition(
      position => {
        const currentLatitude = position.coords.latitude;
        const currentLongitude = position.coords.longitude;
        setLocation({currentLatitude, currentLongitude});
      },
      e => setError(e.message),
    );

    return () => Geolocation.clearWatch(watchID);
  }, []);

  return {error, location};
};
