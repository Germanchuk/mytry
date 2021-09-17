import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import SongListScreen from './screens/SongListScreen/SongListScreen';
import { RouteParamList } from './RoutesParamList';
import { Button, withTheme } from 'react-native-paper';
import OneSongScreen from './screens/OneSongScreen/OneSongScreen';

interface RoutesProps {
	theme: any
}

const Stack = createNativeStackNavigator<RouteParamList>();

const Routes: FC<RoutesProps> = ({ theme }) => {


	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerStyle: {
						backgroundColor: theme.colors.primary,
					},
					headerTintColor: '#fff',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
				}}
			>
				<Stack.Screen name="Home" component={SongListScreen} />
				<Stack.Screen name="Song" component={OneSongScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({

})

export default withTheme(Routes)