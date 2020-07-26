import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Magnetometer } from 'expo-sensors';


function Magneto() {
	//Cria uma variavel data e recebe a funcao para setar seu valor. Essa variavel eh uma estrutura com x,y e z
	const [data, setData] = React.useState({
		x: 0,
		y: 0,
		z: 0
	})
	//Cria uma variavel subscription e a funcao para setar seu valor.
	const [subscription, setSubscription] = React.useState(null);

	//Se nao subscreveu e o magnetometro esta disponivel...
	if(!subscription && Magnetometer.isAvailableAsync()){
		setSubscription(Magnetometer.addListener(result => {setData(result)}));
	}

	//Decompoe a variavel data em x, y, z
	const {x, y, z} = data;
	return (
		<View>
			<Text style={styles.text}>Magneto</Text>
			<Text style={styles.text}> x: {x} y: {y} z: {z}</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	text: {
		textAlign: 'center'
	}
})

export default Magneto;