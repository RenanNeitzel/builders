import {Alert, Platform} from 'react-native';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';

export const useLocationPermission = async () => {
  await check(
    Platform.OS === 'android'
      ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
      : PERMISSIONS.IOS.LOCATION_ALWAYS,
  ).then(result => {
    switch (result) {
      case RESULTS.UNAVAILABLE:
      case RESULTS.LIMITED:
      case RESULTS.GRANTED:
        break;

      case RESULTS.DENIED:
        request(
          Platform.OS === 'android'
            ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
            : PERMISSIONS.IOS.LOCATION_ALWAYS,
        );
        break;

      case RESULTS.BLOCKED:
        Alert.alert(
          'Permissão negada',
          'Não foi possível buscar as informações de clima/tempo. É necessário aceitar o compartilhamento de localização',
          [
            {
              text: 'Entendi',
            },
          ],
        );
        break;
    }
  });
};
