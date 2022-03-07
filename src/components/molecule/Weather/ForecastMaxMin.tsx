import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {WeatherDataType} from '@store/weatherActions';

export const ForecastMaxMin = ({
  main,
}: {
  main: WeatherDataType['main'] | undefined;
}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{`Máx.: ${main?.temp_max}°`}</Text>
      <Text style={styles.text}>{`Mín.: ${main?.temp_min}°`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  text: {
    color: 'white',
    marginHorizontal: 5,
  },
});
