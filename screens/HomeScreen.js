import React from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import * as firebase from 'firebase'
import { State, TouchableOpacity } from 'react-native-gesture-handler';
import { createAppContainer,NavigationActions  } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import {Feather,SimpleLineIcons, FontAwesome5, Octicons} from '@expo/vector-icons'


import PersonalData from './PersonalData';
import Profile from './Profile';
import Sidebar from '../components/Sidebar'
import AvetiVreoProblema from './AvetiVreoProblema'


const AppDrawerNavigator = createDrawerNavigator(
    {


    Profile: {
            screen: Profile,
            navigationOptions: {
            title: "Profil",
                drawerIcon: ({ tintColor }) => <Feather name="user" size={16} color={tintColor}></Feather>
        }
    },
    PersonalData: {
        screen: PersonalData,
        navigationOptions: {
            title: "Date medicale",
            drawerIcon: ({ tintColor }) => <FontAwesome5 name="book-medical" size={24} color="black" />
        }
        },
        AvetiVreoProblema: {
            screen: AvetiVreoProblema,
            navigationOptions: {
                title: "Aveti vreo problema ?",
                drawerIcon:({tintColor}) => <Octicons style = {styles.ReportProbleIcon} name="report" size={24} color="black" onPress = {()=> alert("DA")} ></Octicons>

            },
    }
        
    
},
    {
        contentComponent: props => <Sidebar {...props} displayName = {props.displayName} />,
    }
    
   
);



const Home = createAppContainer(AppDrawerNavigator);



export default class HomeScreen extends React.Component{

    state = {
        email: "",
        displayName:""
    }

    componentDidMount() {
        
        const { email, displayName } = firebase.auth().currentUser;

        this.setState({ email, displayName });
    }

    signOutUser = () => {
        firebase.auth().signOut();
    }

    render() {
        return (
            
           
            <Home screenProps = {{displayName:this.state.displayName}}></Home>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
    },
    LogOut: {
        marginTop: 32,
    }
})
