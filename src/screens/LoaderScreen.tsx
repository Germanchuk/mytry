import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'

interface LoaderScreenProps {

}

const LoaderScreen: FC<LoaderScreenProps> = () => {
	return (
		<View style={styles.container}>
			<ActivityIndicator animating color="black" size="large" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	}
})

export default LoaderScreen