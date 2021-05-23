import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Linking , TouchableWithoutFeedback, Keyboard } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import firebase from "firebase";
import firestore from '@react-native-firebase/firestore';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import axios from 'axios';
import HomeScreen from './HomeScreen';

export default class LoginScreen extends React.Component{
    constructor(props){
        super(props);

        
    }
    state = {
        verify_email:"",
        verify_password:"",
        email: "",
        password: "",
        userRole:"",
        firstName:"",
        lastName:"",
        errorMessage: null
    };
    

    handleLogin = () => {
        const { email, password } = this.state;

        let options = {   headers: {'Accept':'application/json','Content-Type':'application/json'} }; 

        fetch(`http://192.168.0.183:8080/users/${this.state.verify_email}`, {
            method: 'GET',
            headers: {
                 Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            
        }).then(response => response.json() )
            .then(response=> {
               this.setState({
                  email:response.email, 
                  firstName:response.firstName,
                  lastName:response.lastName,
                  userRole:response.userRole,
                  password:response.password,
               },()=>{
                   console.log(this.state.userRole + "password : " + this.state.password);
            })
        }).catch((error) => { console.log(error)}); 
        
        if(this.state.verify_password === this.state.password){
            
             
            return (<HomeScreen  />);
        }
        //   axios('http://192.168.0.183:8080/users/emanuel.caprariu@test.com', {
        //     method: 'GET',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type':'application/json'
        //     }
           
                      
        // })
        // .then((response)=>console.log(response.data)
        // .catch((error) => { console.log(error)}));

        // firebase
        //     .auth()
        //     .signInWithEmailAndPassword(email , password)
        //     .catch(error => {

        //         if (this.state.email === "") {
        //             this.setState({errorMessage:"Adresa de mail trebuie completata !"})
        //         }

        //         else if (error.code === 'auth/invalid-email') {
        //             this.setState({errorMessage:"Adresa de email nu este valida !"})
        //         }

        //         else if (this.state.password === "") {
        //             this.setState({errorMessage:"Parola trebuie completata !"})
        //         }
                    
        //         else if (error.code === "auth/user-not-found") {
        //             this.setState({errorMessage:"Acest cont nu exista !"})
        //         }

                
        //  })
    };
    componentDidUpdate(){}
    render() {

       
        return (
            <TouchableWithoutFeedback onPress={()=>{
                Keyboard.dismiss();
                console.log("keyboard dismiss");
            }}>
            <View style = {styles.container}>
                <Text style={styles.greeting}>{this.state.userRole}</Text>
                
                <View style = {styles.errorMessage}>
                    {this.state.errorMessage && <Text style = {styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style = {styles.center_things}>
                    <Image style ={styles.Logo}  source = {require("../assets/MedLife.png")}></Image>
                </View>

                <View style = {styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Email Address</Text>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            onChangeText={email => this.setState({ verify_email:email })}
                            value = {this.state.verify_email}
                        ></TextInput>
                    </View>
                </View>

                 <View style = {styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            autoCapitalize="none"
                            onChangeText={password => this.setState({ verify_password:password })}
                            value = {this.state.verify_password}
                        ></TextInput>
                    </View>
                </View>

                <TouchableOpacity style = {styles.button} onPress = {this.handleLogin}>
                    <Text style = {{ fontWeight:"500"}} >Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {{alignSelf:'center', marginTop:32}} onPress = {() => this.props.navigation.navigate("Register")}>
                    <Text style = {{color: "#414959", fontSize:13}}>
                         Nu ai cont ? <Text style = {{fontWeight:"500", color:"#12B0C4" }}>Fa-ti unul aici! </Text>
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.phoneCall}>
                    <Text>
                        {`Ai nevoie de ajutor ?\n`}<FontAwesome name="phone" size={24} color="black" /><Text style = {styles.phoneText} onPress={() => { Linking.openURL('tel:0754364913'); }}>: 0754364913</Text>
                    </Text>             
                </TouchableOpacity>
                
                

            </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign:"center"
    },
    center_things: {
        alignItems: "center",
        justifyContent:"center",
    },
    errorMessage: {
        marginTop:30,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 25,
        marginRight:25,
        
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign:'center',
    },

    form: {
        marginBottom: 48,
        marginHorizontal: 30,
    },
    Logo: {
        width: 70,
        height: 70,
        borderRadius: 10,
        marginTop:1,
        
    },
    inputTitle: {
        color: "grey",
        fontSize: 12,
        textTransform:"uppercase"
    },
    phoneCall: {
        justifyContent: "center",
        alignItems: "center",
        marginTop:40,
    },

    input: {
        borderBottomColor: "grey",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "black",
        
    },
    phoneText: {
        color:"#0000FF",
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#12B0C4",
        borderRadius: 4,
        height: 52,
        justifyContent: 'center',
        alignItems:'center',
    }

})