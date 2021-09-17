import { Picker } from '@react-native-picker/picker'
import React, { FC } from 'react'
import { View, StyleSheet, } from 'react-native'

interface FiltersProps {
	selected: string
	setSelected: (value: string) => void
}

const colors = [
	{ value: '', label: 'All', id: 0 },
	{ value: '#8bc34a', label: 'Green', id: 1 },
	{ value: '#ffc107', label: 'Orange', id: 2 },
	{ value: '#03a9f4', label: 'Blue', id: 3 },
	{ value: 'empty', label: 'No items', id: 4 },
];

const Filters: FC<FiltersProps> = ({
	selected,
	setSelected,
}) => {

	return (
		<View style={styles.container}>
			<View style={styles.picker}>
				<Picker
					selectedValue={selected}
					onValueChange={(itemValue, itemIndex) =>
						setSelected(itemValue)
					}
					mode="dropdown"
				>
					{colors.map((item, index) => (
						<Picker.Item
							key={item.id}
							label={item.label}
							value={item.value}
						/>
					))}
				</Picker>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		padding: 4,
		shadowColor: "#000000",
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.68,
		shadowRadius: 16.00,
		elevation: 8,
	},
	picker: {
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: 'lightgray',
		borderRadius: 8,
	},
})

export default Filters