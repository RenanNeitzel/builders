import React from 'react';
import {ImageBackground, ImageBackgroundProps, StyleSheet} from 'react-native';

interface Props extends ImageBackgroundProps {
  backgroundColor?: string;
  children: React.ReactNode;
}

export const BackgroundImage = ({
  backgroundColor = 'transparent',
  children,
  ...props
}: Props) => (
  <ImageBackground
    resizeMode="cover"
    style={[styles.backgroundImage, {backgroundColor}]}
    {...props}>
    {children}
  </ImageBackground>
);

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
});
