import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface NoItemsScreenProps {

}

const NoItemsScreen: FC<NoItemsScreenProps> = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>
				No items ...
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 28,
		color: 'gray',
	}
})

export default NoItemsScreen