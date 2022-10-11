import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Feather from '@expo/vector-icons/Feather';

const AuthMenu = ({ authPage, setAuthPage, detailsPage, setDetailsPage } : any) => {
	return (
		<View style = { styles.container }>
			<View style = { styles.containerMain }>

				<Text style = { styles.heading } >{authPage ? "Sign In" : "Sign Up"}</Text>
				<TouchableOpacity 
					style = { styles.providerButton }
					onPress = { () => setDetailsPage(true) }
				>
					<Feather name = "user" size = { 24 } color = "black" />
					<Text style = { styles.providerButtonText }>Use Email</Text>
				</TouchableOpacity>
			</View>
			<TouchableOpacity 
				style = { styles.containerButtonBottom } 
				onPress = {() => {authPage === 0 ? setAuthPage(1): setAuthPage(0);}}
			>
				{authPage ?
					<Text >
						Don't have an account? 
						<Text style = { styles.containerButtonBottomText }> Sign Up</Text>
					</Text> :
					<Text >
						Already have an account? 
						<Text style = { styles.containerButtonBottomText }> Sign In</Text>
					</Text>
				}
			</TouchableOpacity>
		</View>
	);
}

export default AuthMenu;