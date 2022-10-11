import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
	},
	containerButtonBottom: {
		backgroundColor: 'ghostwhite',
		padding: 20,
		alignItems: 'center',
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: 'lightgray',
	},
	containerButtonBottomText: {
		fontWeight: 'bold',
	},
  containerMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 16,
		color: 'darkslategray',
		textAlign: 'center'
  },
	providerButton: {
		fontSize: 20,
		borderColor: 'lightgray',
		borderWidth: 1,
		borderStyle: 'solid',
		padding: 10,
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	providerButtonText: {
		marginLeft: 10,
	}
});

export default styles;