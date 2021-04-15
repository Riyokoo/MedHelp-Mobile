import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import * as firebase from "firebase";




export default class LoginScreen extends React.Component{

    state = {
        email: "",
        password: "",
        errorMessage: null
    };
    

    handleLogin = () => {
        const { email, password } = this.state;

        firebase
            .auth()
            .signInWithEmailAndPassword(email , password)
            .catch(error => {

                if (this.state.email === "") {
                    this.setState({errorMessage:"Adresa de mail trebuie completata !"})
                }

                else if (error.code === 'auth/invalid-email') {
                    this.setState({errorMessage:"Adresa de email nu este valida !"})
                }

                else if (this.state.password === "") {
                    this.setState({errorMessage:"Parola trebuie completata !"})
                }
                    
                else if (error.code === "auth/user-not-found") {
                    this.setState({errorMessage:"Acest cont nu exista !"})
                }

                
            })
    };

    render() {
        return (
            <View style = {styles.container}>
                <Text style={styles.greeting}>{`Bine ai venit ! \n MedHelp `}</Text>
                
                <View style = {styles.errorMessage}>
                    {this.state.errorMessage && <Text style = {styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style = {styles.center_things}>
                    <Image style ={styles.Logo}  source = {require("../MedLife.png")}></Image>
                </View>

                <View style = {styles.form}>
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