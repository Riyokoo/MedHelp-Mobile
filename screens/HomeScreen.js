import React from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import * as firebase from 'firebase'
import { State, TouchableOpacity } from 'react-native-gesture-handler';
import { createAppContainer,NavigationActions  } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import {Feather,SimpleLineIcons, FontAwesome5, Octicons ,AntDesign } from '@expo/vector-icons'


import PersonalData from './PersonalData';
import Profile from './Profile';
import Sidebar from '../components/Sidebar';
import AvetiVreoProblema from './AvetiVreoProblema';
import AddData from './addData';
import Acasa from './Acasa';

const AppDrawerNavigator = createDrawerNavigator({
        Profile: {
                screen: Profile,
                navigationOptions: {          
                    title: "Profil",
                    drawerIcon: ({ tintColor }) => <Feather name="user" size={16} color={tintColor}></Feather>,
                
            
            }
        },
        PersonalData: {
            screen: PersonalData,
            navigationOptions:{        
                    title: "Date medicale",
                    drawerIcon: ({ tintColor }) => <FontAwesome5 name="book-medical" size={24} color="black" />,
                
            }
        },
        AddData:{
            screen:AddData,
            navigationOptions:{
                title:"Introdu date",
                drawerIcon:({ tintColor }) => <AntDesign name="addfile" size={24} color="black" />
            }
        },
        AvetiVreoProblema: {
                screen: AvetiVreoProblema,
                navigationOptions:{
                
                        title: "Aveti vreo problema ?",
                        drawerIcon:({tintColor}) => <Octicons style = {styles.ReportProbleIcon} name="report" size={24} color="black" onPress = {()=> alert("DA")} ></Octicons>,
                    
                },
        },
        Acasa: {
            screen: Acasa,
            navigationOptions:{
                title:"Acasa",
                drawerIcon:({ tintColor }) => <Feather name="home" size={24} color="black" />
            }
        },           
    },
    {
        contentComponent: props => <Sidebar {...props} displayName = {props.displayName} email={props.email} />,
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
                    
            <Home screenProps = {{displayName:this.state.displayName,email:this.state.email}}></Home>       
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
