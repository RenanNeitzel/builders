import React, {ReactNode} from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';

export const Simple = ({children}: {children: ReactNode}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle={'light-content'}
      />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <SafeAreaView>{children}</SafeAreaView>
      </ScrollView>
    </View>
  );
};
