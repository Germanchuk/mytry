import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

interface RightSongItemProps {
	bpm: number
	tonality: string
	color: string
}

const RightSongItem: FC<RightSongItemProps> = ({
	tonality,
	color,
}) => {
	return (
		<View style={[styles.circle, { backgroundColor: color }]}>
			<Text style={styles.text}>
				{tonality}
			</Text>
		</View>
	)
}

export default RightSongItem

const RADIUS = 30;

const styles = StyleSheet.create({
	circle: {
		width: RADIUS,
		height: RADIUS,
		borderRadius: RADIUS / 2,
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
	},
	text: {
		textAlign: 'center',
		fontWeight: '700',
	}
})