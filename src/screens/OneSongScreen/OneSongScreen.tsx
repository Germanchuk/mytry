import { RouteProp } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { FC, useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { RouteParamList } from '../../RoutesParamList'
import { getSong } from '../../services/fakeApi'
import { songInterface } from '../../fakeData'
import Song from './Song/Song'
import ErrorScreen from '../ErrorScreen'
import LoaderScreen from '../LoaderScreen'

interface OneSongScreenProps {
	navigation: NativeStackNavigationProp<RouteParamList, 'Song'>
	route: RouteProp<RouteParamList, 'Song'>
}


const OneSongScreen: FC<OneSongScreenProps> = ({ navigation, route }) => {

	const [song, setSong] = useState<songInterface>();
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {

		setLoading(true);
		setError(false);

		getSong(route.params.id)
			.then(res => {
				setSong(res.data);
			})
			.catch(err => {
				setError(true);
			})
			.finally(() => {
				setLoading(false);
			})

	}, [getSong]);


	return (
		<View style={{ flex: 1 }}>
			{song && <Song song={song} />}
			{error && <ErrorScreen />}
			{loading && <LoaderScreen />}
		</View>
	)
}

const styles = StyleSheet.create({

})

export default OneSongScreen