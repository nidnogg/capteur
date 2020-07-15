import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Accelerometer from './Accelerometer';
import Gyroscope from './Gyroscope';
import Magnetometer from './Magnetometer';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Main</Text>
      <StatusBar style="auto" />
      <Accelerometer />
      <Gyroscope />
      <Magnetometer />
    </View>
  );
}

const palette = ['#5e6f64', '#ba7967', '#ffdecf', '#3f4441'];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette[0],
    alignItems: 'center',
    justifyContent: 'center',
  },
});
