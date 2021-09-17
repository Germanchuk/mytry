import React, { FC, useCallback, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import DraggableFlatList, { RenderItemParams } from 'react-native-draggable-flatlist'
import { Title } from 'react-native-paper'
import { Part, partsExample, songInterface } from '../../../fakeData'
import SongPart from './SongPart'

interface SongProps {
	song: songInterface
}

const Song: FC<SongProps> = ({
	song,
}) => {

	const [data, setData] = useState(partsExample);

	const renderItem = useCallback(({ item, drag, isActive }: RenderItemParams<Part>) => {
		return (<SongPart
			item={item}
			drag={drag}
			isActive={isActive}
		/>)
	}, []);

	return (
		<View style={styles.container}>
			<Title style={{ marginHorizontal: 8, fontSize: 22, textDecorationLine: 'underline' }}>{song.title}</Title>

			<DraggableFlatList
				data={data}
				renderItem={renderItem}
				keyExtractor={(item, index) => `draggable-item-${item.id}`}
				onDragEnd={({ data }) => setData(data)}
				autoscrollSpeed={700}
			/>

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// paddingHorizontal: 8,
		backgroundColor: 'white'
	}
})

export default Song