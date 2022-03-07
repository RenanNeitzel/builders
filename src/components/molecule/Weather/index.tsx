import {WeatherDataType} from '@store/weatherActions';
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Container} from './Container';
import {ForecastMaxMin} from './ForecastMaxMin';
import {CurrentTemperature} from './CurrentTemperature';
import {WeatherDetails} from './WeatherDetails';

export const Weather = ({
  weatherData,
  onUpdate,
}: {
  weatherData: WeatherDataType | undefined;
  onUpdate: () => void;
}) => (
  <View style={styles.wrapper}>
    <Container>
      <Text style={styles.city}>{weatherData?.name}</Text>
      <CurrentTemperature main={weatherData?.main} />
      <ForecastMaxMin main={weatherData?.main} />
      <WeatherDetails weatherData={weatherData} />
    </Container>

    <TouchableOpacity style={styles.button} onPress={onUpdate}>
      <Text style={styles.textButton}>Atualizar dados do tempo</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    width: '100%',
  },
  city: {
    fontSize: 32,
    fontWeight: '500',
    textAlign: 'center',
    color: 'white',
  },
  button: {
    width: '100%',
    height: 50,
    marginVertical: 24,
    borderRadius: 50,
    backgroundColor: '#3333ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
});
