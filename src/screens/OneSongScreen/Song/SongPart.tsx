import React, { FC, useEffect, useRef } from 'react'
import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import { RenderItemParams } from 'react-native-draggable-flatlist'
import { Paragraph, Title } from 'react-native-paper'
import DragIcon from '../../../assets/icons/DragIcon'
import { Part } from '../../../fakeData'

const SongPart: FC<RenderItemParams<Part>> = ({ item, drag, isActive }) => {

	const elevation = useRef(new Animated.Value(3)).current;

	useEffect(() => {

		Animated.timing(elevation, {
			toValue: isActive ? 12 : 3,
			useNativeDriver: true,
		}).start();

	}, [isActive]);

	return (
		<Animated.View style={[styles.card, { elevation: elevation }]}>
			<View style={styles.header}>
				<Title>{item.title}</Title>
				<TouchableOpacity onPressIn={drag}>
					<DragIcon fill="gray" />
				</TouchableOpacity>
			</View>
			<Paragraph>
				{item.text}
			</Paragraph>
		</Animated.View>
	)
}

const styles = StyleSheet.create({
	card: {
		marginHorizontal: 8,
		marginVertical: 4,
		backgroundColor: 'white',
		borderRadius: 8,
		paddingHorizontal: 8,
		paddingVertical: 8,
		shadowColor: "#000000",
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.68,
		shadowRadius: 16.00,
	},
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
	}
})

export default SongPart