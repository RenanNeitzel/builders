import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Circle, CirclePropTypes} from 'react-native-progress';

export interface ProgressProps {
  progress?: number;
  indeterminate?: boolean;
  fake?: boolean;
  msToSetIndeterminate?: number;
  msFakeInterval?: number;
  size?: number;
  color?: CirclePropTypes['color'];
}

export const Progress = ({
  progress,
  indeterminate,
  fake,
  msFakeInterval = 2000,
  msToSetIndeterminate = 6000,
  size = 100,
  color = 'black',
}: ProgressProps) => {
  const [finalProgress, setFinalProgress] = useState(progress ?? 0);
  const [finalIndeterminate, setFinalIndeterminate] = useState(
    indeterminate ?? true,
  );

  useEffect(() => {
    let timeoutFunction: number;

    if (fake) {
      timeoutFunction = setTimeout(
        () => setFinalIndeterminate(false),
        msToSetIndeterminate,
      );
    }

    return () => {
      if (timeoutFunction) {
        clearTimeout(timeoutFunction);
      }
    };
  }, [fake, msToSetIndeterminate]);

  useEffect(() => {
    let timeoutFunction: number;
    if (fake && !finalIndeterminate) {
      timeoutFunction = setTimeout(() => {
        let temp = finalProgress + Math.random() / 10;
        if (temp > 1) {
          setFinalIndeterminate(true);
          temp = 1;
        }
        setFinalProgress(temp);
      }, msFakeInterval);
    }

    return () => {
      if (timeoutFunction) {
        clearTimeout(timeoutFunction);
      }
    };
  }, [
    setFinalProgress,
    finalProgress,
    finalIndeterminate,
    fake,
    msFakeInterval,
  ]);

  return (
    <View style={styles.container}>
      <Circle
        size={size}
        style={styles.progress}
        progress={finalProgress}
        indeterminate={finalIndeterminate}
        color={color}
        textStyle={styles.textStyle}
        showsText
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  progress: {margin: 10, alignSelf: 'center'},
  textStyle: {color: 'black', fontFamily: 'montserrat'},
});
