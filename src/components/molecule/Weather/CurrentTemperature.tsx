import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {WeatherDataType} from '@store/weatherActions';

export const CurrentTemperature = ({
  main,
}: {
  main: WeatherDataType['main'] | undefined;
}) => <Text style={styles.text}>{`${main?.temp}°`}</Text>;

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 28,
    textAlign: 'center',
    marginVertical: 12,
  },
});
