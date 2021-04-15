import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Image } from 'react-native';

import * as firebase from "firebase";




export default class RegisterScreen extends React.Component{

    state = {
        name:"",
        email: "",
        password: "",
        errorMessage: "",
    };
    

    handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(userCredentials => {
                return userCredentials.user.updateProfile({
                    displayName: this.state.name
                });
            })
            .catch(error => {

                if (this.state.name === "") {
                    this.setState({errorMessage:"Numele trebuie completat"})
                }

                else if (this.state.email === "") {
                    this.setState({errorMessage:"Adresa de mail trebuie completata"})
                }

                else if (error.code === 'auth/invalid-email') {
                    this.setState({ errorMessage: "Adresa de email nu e valida" })
                }

                else if (this.state.password === "") {
                    this.setState({errorMessage:"Parola trebuie completata"})
                }

                

                else if (error.code === "auth/weak-password") {
                    this.setState({errorMessage: "Parola trebuie sa contina 6 caractere"})
                }

                else if (error.code === "auth/email-already-in-use") {
                    this.setState({errorMessage:"Acest email este deja folosit"})
                }
                
            } );
    };

    //this.setState({ errorMessage: error.message })

    render() {
        return (
            <View style={styles.container}>
                
                <View style = {styles.center_things}>
                    <Image style ={styles.Logo}  source = {require("../MedLife.png")}></Image>
                </View>

                <Text style={styles.greeting}>{`Bine ai venit la MedHelp! `}</Text>
                
                <View style = {styles.errorMessage}>
                   <Text style = {styles.error}>{this.state.errorMessage}</Text>
                </View>

               
                    <View style={styles.form}>
                
                        <View>
                            <Text style={styles.inputTitle}>Full Name</Text>
                            <TextInput
                                style={styles.input}
                                autoCapitalize="none"
                                onChangeText={name => this.setState({ name })}
                                value = {this.state.name}
                            ></TextInput>
                        </View>
                    </View>

                    <View style={styles.form}>
                        <View>
                            <Text style={styles.inputTitle}>Email Address</Text>
                            <TextInput
                                style={styles.input}
                                autoCapitalize="none"
                                onChangeText={email => this.setState({ email })}
                                value = {this.state.email}
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
                                onChangeText={password => this.setState({ password })}
                                value = {this.state.password}
                            ></TextInput>
                        </View>
                    </View>
                

                <TouchableOpacity style = {styles.button} onPress = {this.handleSignUp}>
                    <Text style = {{color:"#FFF", fontWeight:"500"}} >Sign up</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {{alignSelf:'center', marginTop:32}} onPress = {() => this.props.navigation.navigate("Login")}>
                    <Text style = {{color: "#414959", fontSize:13}}>
                         Ai deja un cont ? <Text style = {{fontWeight:"500", color:"#12B0C4" }}>Intra aici !</Text>
                    </Text>
                </TouchableOpacity>

            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    center_things: {
        alignItems: "center",
        justifyContent:"center",
    },
    greeting: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center",
        marginBottom:10,
    },
    errorMessage: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom:10,
        
    
        
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
    inputTitle: {
        color: "grey",
        fontSize: 12,
        textTransform:"uppercase"
    },
    Logo: {
        width: 70,
        height: 70,
        borderRadius: 10,
        marginTop:20,
        
    },
    input: {
        borderBottomColor: "grey",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "black",
        
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