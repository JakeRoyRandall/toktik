import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import Feather from '@expo/vector-icons/Feather';
import { useDispatch } from "react-redux";
import { login } from "../../../redux/actions";

const AuthDetails= ({ authPage, setDetailsPage } : any) => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const dispatch = useDispatch()
	const handleLogin = () => {
		dispatch(login(email, password))
	}
	return (
		<View style = { styles.container }>
			<TouchableOpacity onPress = { () => setDetailsPage(false) }>
				<Feather name = "arrow-left" size = { 24 } color = "black" />
			</TouchableOpacity>
			<TextInput 
				onChangeText = { (input) => setEmail(input) }
				placeholder = "Email"
				style = { styles.input }
			/>
			<TextInput 
				onChangeText = { (input) => setPassword(input) }
				placeholder = "Password"
				style = { styles.input }
			/>
			<TouchableOpacity style = { styles.button }>
				<Text style = { styles.buttonText }>{authPage ? "Sign In" : "Sign Up"}</Text>
			</TouchableOpacity>
		</View>
	);
}

export default AuthDetails;