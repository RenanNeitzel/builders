import React from 'react';
import {ActivityIndicator, StyleSheet, View, ViewStyle} from 'react-native';

export interface Props {
  visible?: boolean;
  style?: ViewStyle;
  spinnerColor?: string;
}

export const Loading: React.FunctionComponent<Props> = React.memo(
  ({style, visible = true, spinnerColor = 'black'}) =>
    visible ? (
      <View style={[styles.loading, style]}>
        <ActivityIndicator color={spinnerColor} />
      </View>
    ) : null,
);

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
