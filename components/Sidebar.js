import React from 'react'
import { View, Image, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import { Ionicons, AntDesign } from "@expo/vector-icons"
import * as firebase from 'firebase'
import LogoutButton from '../components/Logout_button'


const Sidebar = props => {

    const alert_LogoOut = () => {
        
        Alert.alert(
            "Logout",
            "Are you sure ?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("NU"),
                    style:""
                },
                {
                    text: "Yes",
                    onPress: () => console.log("DA"),
                    style:""
                }
            ]
        )
    }
  
    return (
        <ScrollView>
        <ImageBackground  source = {require("../assets/GREEN.png")} style={{ width: undefined, padding: 10, paddingTop: 10 }}>
            <Image source={require("../assets/profilePicture.jpg")} style={styles.profile} />
            <Text style = {styles.welcomeMessage}>Bine ai revenit, {props.screenProps.displayName}!</Text>
        </ImageBackground>               
        
        <View>
            <DrawerNavigatorItems {...props} ></DrawerNavigatorItems>
        </View>
            <LogoutButton></LogoutButton>
        </ScrollView>
    )
}

export default Sidebar




const styles = StyleSheet.create({
    container:{
        flex:1
    },
    welcomeMessage: {
        fontFamily:'bold',
        fontSize: 17,
        fontWeight:"800",
    },
    profile:{
        width:80,
        height:80,
        borderRadius:40,
        borderWidth:3,
        borderColor:"#FFF",
    }, 
    name:{
        color:"#FFF",
        fontSize:24,
        fontWeight:"800",
        marginVertical:8
    } 
});
