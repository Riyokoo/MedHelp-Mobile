import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as firebase from 'firebase'
import { Alert } from 'react-native';
import {SimpleLineIcons} from "@expo/vector-icons"

export default class LogoutButton extends React.Component{



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

    alert_LogoOut = () => {
        
        Alert.alert(
            "Logout",
            "Esti sigur ca doresti sa te deconectezi ?",
            [
                {
                    text: "DA",
                    onPress: () => this.signOutUser(),
                    style:"",
                },
                {
                    text: "NU",
                    style:"",
                }
            ]
        )
    }

    render() {
        return (
            <View style={ styles.LogoutContainer}>
                
                     <SimpleLineIcons style = {styles.LogoutIcon} name="logout" size={24} color="black" onPress = {this.alert_LogoOut}></SimpleLineIcons>
                <Text style={styles.LogoutText} onPress = {this.alert_LogoOut}>Logout</Text>
            
            </View>
        )
    }
}

const styles = StyleSheet.create({

    LogoutContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:25,
    },

    LogoutIcon: {
        marginLeft:13,
    },
    LogoutText: {
        color: "#000000",
        marginLeft: 35,
        fontWeight:"bold",
    }
})