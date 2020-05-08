import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Badge, Button } from 'react-native-elements'

export default function App() {
	return (
		<View style={styles.container}>
			<Text>This is a React Android app. We think this is very great. </Text>
			<Text>And this is some more.</Text>
			<Text>Hello.</Text>
			<Button title="Information" raised icon={{ name: "cached" }} />
			<Badge value="99" status="warning" />
			<Avatar
				rounded
				source={{
					//uri: 'https://tanguay.info/main/images/sevillaMarathon.jpg',
					uri: 'https://tanguay.info/main/images/nantesFinish.jpg',
				}}
				size="large"
			/>
		</View>
	);
}
//https://tanguay.info/main/images/nantesFinish.jpg

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
