import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import {createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './screens/HomeScreen'
import RegisterScreen from './screens/RegisterScreen'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import * as firebase from 'firebase'

import { createDrawerNavigator} from 'react-navigation-drawer'
import { Dimensions } from 'react-native'
import { Feather } from '@expo/vector-icons';
import Header from './shared/header';
import React from 'react';

///mine
// apiKey:AIzaSyAhTCS1HQ4DWhocumyVqGnWUd78Z-hihSQ,
// authDomain:
// projectId:medhelp-app
// appId:1:890007642440:android:a21d431663ca905ae3137d,
var firebaseConfig = {
    apiKey: "AIzaSyBEeiYQmTTWeC1uZSncYnK2cDYWXn4ii50",
    authDomain: "login-system-1a548.firebaseapp.com",
    projectId: "login-system-1a548",
    storageBucket: "login-system-1a548.appspot.com",
    messagingSenderId: "1039360087466",
    appId: "1:1039360087466:web:4fb28e9d7bcd95e1b647d3",
    measurementId: "G-XJ5V9NCK3Z"
};
  
// Initialize Firebase



if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
}else {
   firebase.app(); // if already initialized, use that one
}

const AppStack = createStackNavigator({
  Home:{
    screen:()=>(<HomeScreen role="PACIENT" />),
    navigationOptions: ( { navigation }) => {
      return {
         headerTitle: () => (<Header navigation={navigation} title='Home' />),
      }
    },
    },
  
})
handleRole = (role) =>{
    console.log(role);
} 
const AuthStack = createStackNavigator({
  Login: ()=> (<LoginScreen  sendRole={()=>this.handleRole()} />),
  Register:RegisterScreen,
})

const MainApp = createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack,
      
    },
    {
      initialRouteName:"Loading"
    }
  )
)

export default class App extends React.Component{
  
    render(){
      return(
          <MainApp />
      )
    }
}