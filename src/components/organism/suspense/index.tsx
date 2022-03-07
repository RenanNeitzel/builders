import React from 'react';
import {Choose, If} from 'react-extras';
import {StyleSheet, View, ViewStyle, Text} from 'react-native';

import {Loading} from '@components/atom/Loading';

interface SuspenseProps {
  condition: boolean;
  children?: React.ReactNode;
  fallback?: React.ReactNode;
  spinnerColor?: string;
  style?: ViewStyle;
  spinnerStyle?: ViewStyle;
  spinnerText?: string | false;
}

export const Suspense: React.FunctionComponent<SuspenseProps> = ({
  condition,
  children,
  fallback,
  spinnerColor = 'white',
  style = {},
  spinnerStyle = {},
  spinnerText = false,
}: SuspenseProps) => {
  const spinnerCalculatedStyle = spinnerText
    ? styles.spinnerWithText
    : undefined;
  return (
    <Choose>
      <Choose.When condition={!condition}>{children ?? null}</Choose.When>
      <Choose.Otherwise>
        <If condition={Boolean(fallback)}>{fallback}</If>
        <If condition={!fallback}>
          <View style={[styles.wrapper, style]}>
            <Loading
              visible
              style={[spinnerCalculatedStyle, spinnerStyle]}
              spinnerColor={spinnerColor}
            />
            {spinnerText && <Text style={styles.text}>{spinnerText}</Text>}
          </View>
        </If>
      </Choose.Otherwise>
    </Choose>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    flex: 1,
    flexGrow: 1,
    backgroundColor: 'transparent',
  },
  spinnerWithText: {
    marginBottom: 20,
    justifyContent: 'flex-end',
  },
  text: {
    textAlign: 'center',
    flexGrow: 1,
  },
});
