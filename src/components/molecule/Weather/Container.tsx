import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';

export const Container = ({children}: {children: ReactNode}) => {
  return <View style={style.container}>{children}</View>;
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#3E3F43',
    opacity: 0.9,
    borderRadius: 15,
    width: '100%',
    padding: 16,
  },
});
