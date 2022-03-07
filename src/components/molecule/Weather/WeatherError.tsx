import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const WeatherError = ({error}: {error: string}) => (
  <View style={styles.card}>
    <Text style={styles.title}>Informações não encontradas</Text>
    <Text style={styles.description}>
      Para ter acesso às informações de clima da sua região, é necessiário que
      aceite o compatilhamento de localização.
    </Text>
    <Text style={styles.description}>
      <Text style={styles.bold}>Erro:</Text> {error}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3E3F43',
    opacity: 0.9,
    borderRadius: 15,
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
  },
  description: {
    fontSize: 13,
    color: 'white',
    marginVertical: 16,
  },
  bold: {
    fontWeight: '700',
  },
});
