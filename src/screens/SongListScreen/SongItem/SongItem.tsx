import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { Card, Text } from 'react-native-paper'
import { songInterface } from '../../../fakeData'
import RightSongItem from './RightSongItem'

interface SongItemProps {
	handlePress: (id: number) => void
	song: songInterface
}

const SongItem: FC<SongItemProps> = ({
	handlePress,
	song,
}) => {
	return (
		<Card elevation={4} onPress={() => handlePress(song.id)} style={styles.card}>
			<Card.Title title={song.title}
				left={
					(props: any) => (<RightSongItem bpm={song.bpm} tonality={song.key} color={song.color} {...props} />)
				}
			/>
		</Card>
	)
}

export default SongItem

const styles = StyleSheet.create({
	card: {
		marginHorizontal: 8,
		marginVertical: 8,
	},
})