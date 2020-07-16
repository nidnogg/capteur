import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Accelero from './Accelero';
import Gyro from './Gyro';
import Magneto from './Magneto';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Main</Text>
      <StatusBar style="auto" />
      <Accelero />
      <Gyro />
      <Magneto />
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
