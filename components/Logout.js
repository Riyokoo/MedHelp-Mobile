import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as firebase from 'firebase'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Icon} from 'native-base'



export default class Logout extends React.Component{


    

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
            
            <View style = {styles.container}>
                
                                    <Icon style = {styles.menuButton} name = "menu" onPress = {() => this.props.navigation.openDrawer()}></Icon>

                <View>
                    
                <Text>Esti sigur ca vrei sa iesi ?</Text>

                <TouchableOpacity style={styles.LogOutButton} onPress = {this.signOutUser}>
                    <Text style = {{color:"#414959"}}>Logout</Text>
                </TouchableOpacity>
               </View>

               
            </View>
            

             

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    LogOutButton: {
        marginTop:350,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 60,
        backgroundColor: "#12B0C4",
        borderRadius: 4,
        height: 52,
        justifyContent: 'center',
        alignItems:'center',
    }
    
})
