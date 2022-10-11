import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from "expo-constants"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig"
import { getAnalytics } from "firebase/analytics";

import  { Provider } from "react-redux"
import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware } from 'redux'
import rootReducer from './src/redux/reducers'
import AuthScreen from './src/screens/auth';

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: {extraArgument: {}}})
})

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const App = () => {
  return (
		<Provider store={store}>
			<View style={styles.container}>
				{/* <StatusBar style="auto" /> */}
				<AuthScreen />
			</View>
		</Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;