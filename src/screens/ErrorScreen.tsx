import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface ErrorScreenProps {

}

const ErrorScreen: FC<ErrorScreenProps> = () => {
	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 32 }}>Random error for example!</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ff8a80'
	}
})

export default ErrorScreen