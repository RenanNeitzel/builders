import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {WeatherDataType} from '@store/weatherActions';
import {getHoursFromUnix} from '@utils/getHoursFromUnix';

export const WeatherDetails = ({
  weatherData,
}: {
  weatherData: WeatherDataType | undefined;
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.divider} />
      <View style={styles.row}>
        <Text style={styles.text}>Sensação térmica</Text>
        <Text style={styles.text}>{`${weatherData?.main.feels_like}°`}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Nascer do sol</Text>
        <Text style={styles.text}>{`${getHoursFromUnix(
          weatherData?.sys.sunrise,
        )}`}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Pôr do sol</Text>
        <Text style={styles.text}>{`${getHoursFromUnix(
          weatherData?.sys.sunset,
        )}`}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Humidade do ar</Text>
        <Text style={styles.text}>{`${weatherData?.main.humidity}%`}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Velocidade do vento</Text>
        <Text style={styles.text}>{`${weatherData?.wind.speed}km/h`}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Pressão atmosférica</Text>
        <Text style={styles.text}>{`${weatherData?.main.pressure}hPa`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 16,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: 'white',
    marginVertical: 16,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  text: {
    color: 'white',
  },
});
