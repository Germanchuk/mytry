import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { FC, useEffect, useState } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { songInterface } from '../../fakeData'
import { RouteParamList } from '../../RoutesParamList'
import { getSongList } from '../../services/fakeApi'
import LoaderScreen from '../LoaderScreen'
import Filters from './Filters'
import NoItemsScreen from '../NoItemsScreen'
import SongItem from './SongItem/SongItem'

interface SongListScreenProps {
	navigation: NativeStackNavigationProp<RouteParamList, 'Home'>
}

const SongListScreen: FC<SongListScreenProps> = ({ navigation }) => {

	const [selected, setSelected] = useState('');
	const [songs, setSongs] = useState<Array<songInterface> | []>([]);
	const [loading, setLoading] = useState(false);

	const handlePress = (id: number) => {
		navigation.navigate('Song', { id })
	}

	useEffect(() => {
		setLoading(true);

		getSongList(selected)
			.then(res => {
				setSongs(res.data);
			})
			.finally(() => {
				setLoading(false);
			})
	}, [selected]);

	return (
		<>
			<View style={styles.container}>
				<Filters
					selected={selected}
					setSelected={setSelected}
				/>
				{loading ?
					<LoaderScreen />
					:
					(songs.length !== 0 ?
						<ScrollView>
							{songs.map(song => (
								<SongItem
									key={song.id}
									song={song}
									handlePress={handlePress}
								/>
							))
							}
						</ScrollView>
						:
						<NoItemsScreen />
					)}
			</View>

		</>
	)
}

export default SongListScreen


const styles = StyleSheet.create({
	container: {
		// padding: 8,
		flex: 1,
	},
})