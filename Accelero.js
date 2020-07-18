import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Accelerometer } from 'expo-sensors';


const Accelero = () => {

  const [data, setData] = useState({});
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);


  const _toggle = () => {
    if (subscription){
      _unsubscribe();
    }
    else {
      _subscribe();
    }
  };

  const _subscribe = () => {
    Accelerometer.setUpdateInterval(15);
    setSubscription(Accelerometer.addListener(accelerometerData => {
      setData(accelerometerData);
    }));
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  let {x, y, z} = data;

  return (
    <View style={styles.sensor}>
      <Text style={styles.text}>Accelerometer: (in Gs where 1 G = 9.81 m s^-2)</Text>
      <Text style={styles.text}>
        x: {round(x)} y: {round(y)} z: {round(z)}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={_toggle} style={styles.button}>
          <Text>Toggle</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function round(n) {
  if (!n) {
    return 0;
  }
  return Math.floor(n * 100) / 100;
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  sensor: {
    marginTop: 45,
    paddingHorizontal: 10,
  },
  text: {
    textAlign: 'center',
  },
});

export default Accelero;