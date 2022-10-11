import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
		flex: 1,
		paddingHorizontal: 20,
		paddingVertical: 30
  },
	input: {
		borderColor: 'lightgray',
		borderBottomWidth: 1,
		borderStyle: 'solid',
		paddingVertical: 10,
		paddingHorizontal: 20,
		marginTop: 20,
	},
	button: {
		marginTop: 80,
		borderColor: 'lightgray',
		borderBottomWidth: 1,
		borderStyle: 'solid',
		paddingVertical: 10,
		paddingHorizontal: 20,
		alignItems: 'center',
		backgroundColor: 'red'
	},
	buttonText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20,
	}
});

export default styles;