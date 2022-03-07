import React from 'react';
import {View, StyleSheet, ViewProps} from 'react-native';

import {Progress, ProgressProps} from '@components/atom/Progress';

interface ProgressOverlayProps extends ProgressProps {
  children?: React.ReactNode;
  style?: ViewProps['style'];
  color?: string;
}

export const ProgressOverlay = ({
  children,
  color = 'white',
  style,
  ...props
}: ProgressOverlayProps) => {
  return (
    <View style={[styles.container, style]}>
      <Progress color={color} {...props} />
      {children && <View>{children}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    backgroundColor: 'black',
  },
});
