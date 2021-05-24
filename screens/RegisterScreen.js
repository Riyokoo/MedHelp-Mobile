import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Image , TouchableWithoutFeedback , Keyboard, ScrollView, Alert } from 'react-native';
import * as firebase from "firebase";
import { RadioButton } from 'react-native-paper';
import axios from 'axios';


export default class RegisterScreen extends React.Component{
    
    state = {
        nume: "",
        prenume:"",
        email: "",
        password: "",
        re_password: "",
        role: "",
        nume_eroare: "",
        prenume_eroare: "",
        email_eroare: "",
        password_eroare: "",
        re_password_eroare: "",
        role_eroare:"",
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

               
                
            } );
            
        //Verificare NUME VALID
        if (this.state.nume === "")
        {
            this.setState({ nume_eroare: "* Acest camp este obligatoriu " });
        }else if (this.state.nume !== "") {
             if ((/^([a-zA-Z]{3,})$/).test(this.state.nume) === false) {
                this.setState({ nume_eroare: "* Nume invaliad " });
        
            }
             else {
                 this.setState({ nume_eroare: "" });
            }
        }
        

        //VERIFICARE PRENUME VALID

         if (this.state.prenume === "")
        {
            this.setState({prenume_eroare:"* Acest camp este obligatoriu "})
        }else if (this.state.prenume !== "") {
             if ((/^([a-zA-Z]{3,})$/).test(this.state.prenume) === false) {
            this.setState({ prenume_eroare: "* Prenume invalid " });
        }
             else {
                 this.setState({ prenume_eroare: "" });
        }
        }

        //VERIFICARE ADRESA EMAIL VALIDA

        var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

         if (this.state.email === "")
        {
            this.setState({email_eroare:"* Acest camp este obligatoriu "})
        }else if (this.state.email !== "") {
            if (emailRegex.test(this.state.email) === false) {
                this.setState({ email_eroare: "* Adresa invalida" });
             }
            else {
                this.setState({ email_eroare: "" });
             }
        }

        //VERIFICARE PAROLA VALIDA

         if (this.state.password === "")
        {
            this.setState({password_eroare:"* Acest camp este obligatoriu "})
        }else if (this.state.password !== "") {
            
            if ((/^([a-zA-Z0-9]{6,})$/).test(this.state.password) === false) {
                this.setState({password_eroare:"* Parola trebuie sa aiba cel putin 6 caractere"})
            }
            else {
                this.setState({ password_eroare: "" });
            }
        }

        //VERIFICARE CONFIRMARE PAROLA VALIDA
        if (this.state.re_password === "")
        {
            this.setState({re_password_eroare:"* Acest camp este obligatoriu "})
        } else if (this.state.re_password !== "") {

            if ((/^([a-zA-Z0-9]{6,})$/).test(this.state.re_password) === false) {
                this.setState({re_password_eroare:"* Parola trebuie sa aiba cel putin 6 caractere"})
            }
            else {
                this.setState({ re_password_eroare: "" });
            }

        }

        //VERIFICARE SELECTARE CATEGORIE 
        
        if (this.state.role === "")
        {
            this.setState({ role_eroare: "* Va rugam selectati categoria !" });
        }
        else {
            this.setState({ role_eroare: "" });
        }
        

        //VERIFICA DACA CELE 2 PAROLE COINCID

        if (this.state.password != "" && this.state.re_password != "") {
             if (this.state.password !== this.state.re_password) {
            this.setState({ password_eroare: "Cele 2 parole nu coincid !" });
        }
        }
    

    //   axios({
    //     method: 'POST',
    //       url: 'http://192.168.0.131:8080/users',
    //       headers: {
    //           'Accept': 'application/json',
    //           'Content-Type':'application/json'
    //       },
    //       data: JSON.stringify({
    //          username: this.state.nume,
    //             firstName: this.state.nume,
    //             lastName: this.state.prenume,
    //             password: this.state.password,
    //             email: this.state.email,
    //             userRole: 'ADMIN'
    //     })
    //     }).then((response)=>console.log(response)).catch((error)=>console.log(error))
        
    // fetch('http://192.168.0.183:8080/users/', {
    //     method: 'POST',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         email: this.state.email,
    //         firstName: this.state.nume,
    //         lastName: this.state.prenume,
    //         password: this.state.password,                
    //         userRole: this.state.role
           
    //     })
    // }).catch((error) => { console.log(error)}); 
     if ((/^([a-zA-Z]{3,})$/).test(this.state.nume) &&
           (/^([a-zA-Z]{3,})$/).test(this.state.prenume) &&
           emailRegex.test(this.state.email) &&
            (/^([a-zA-Z0-9]{6,})$/).test(this.state.password) &&
            (/^([a-zA-Z0-9]{6,})$/).test(this.state.re_password)) {
             Alert.alert(
           "Inregistrare cu success !",
           "Contul dumneavoastra a fost creat.",
           [
               {
                   text: "OK",
                   style: "",
                   onPress :() => this.props.navigation.navigate("Login"),
               }

           ]
        )
        }
       
    }
    
     

    //this.setState({ errorMessage: error.message })

    render() {

       
        
        return (
            
            <ScrollView>
                <TouchableWithoutFeedback onPress={()=>{
                Keyboard.dismiss();
                console.log("keyboard dismiss");
            }}>
            <View style={styles.container}>
                
                <View style = {styles.center_things}>
                    <Image style ={styles.Logo}  source = {require("../assets/MedLife.png")}></Image>
                </View>

                <Text style={styles.greeting}>{`Bine ai venit la MedHelp! `}</Text>
                
                <View style = {styles.errorMessage}>
                   <Text style = {styles.error}>{this.state.errorMessage}</Text>
                </View>

               
                    <View style={styles.form}>
                
                        <View>
                                <View >
                                    <Text style={styles.inputTitle}>Nume</Text>
                                    <Text style={{ fontSize: 12, color:'red' }}>{this.state.nume_eroare}</Text>
                                </View>
                            <TextInput
                                style={styles.input}
                                autoCapitalize="none"
                                onChangeText={nume => this.setState({ nume })}
                                value = {this.state.name}
                            ></TextInput>
                        </View>

                        

                       
                        
                    </View>

                    <View style = {styles.form}>
                         <View>
                                <View >
                                   <Text style={styles.inputTitle}>Prenume</Text>
                                    <Text style={{ fontSize: 12, color:'red' }}>{this.state.prenume_eroare}</Text> 
                                </View>
                            <TextInput
                                style={styles.input}
                                autoCapitalize="none"
                                onChangeText={prenume => this.setState({ prenume })}
                                value = {this.state.name}
                            ></TextInput>
                        </View>
                    </View>


                    <View style={styles.form}>
                        <View>
                                <View >
                                    <Text style={styles.inputTitle}>Adresa email</Text>
                                    <Text style={{ fontSize: 12, color: 'red' }}>{this.state.email_eroare}</Text>
                                </View>
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
                                <View >
                                    <Text style={styles.inputTitle}>Parola</Text>
                                    <Text style={{ fontSize: 12, color:'red' }}>{this.state.password_eroare}</Text>
                                </View>
                            <TextInput
                                style={styles.input}
                                secureTextEntry
                                autoCapitalize="none"
                                onChangeText={password => this.setState({ password })}
                                value = {this.state.password}
                            ></TextInput>
                        </View>
                    </View>

                     <View style = {styles.form}>
                        <View>
                                <View >
                                    <Text style={styles.inputTitle}>Confirmare parola</Text>
                                    <Text style={{ fontSize: 12, color:'red' }}>{this.state.re_password_eroare}</Text>
                                </View>
                            <TextInput
                                style={styles.input}
                                secureTextEntry
                                autoCapitalize="none"
                                onChangeText={re_password => this.setState({ re_password })}
                                value = {this.state.re_password}
                            ></TextInput>
                        </View>
                    </View>

                    
                        <View style={styles.role}>
                             <View>
                            <Text style={styles.inputTitle}>Categorie</Text>
                                <Text style={{ fontSize: 12, color:'red' }}>{this.state.role_eroare}</Text>
                        </View>

                     <RadioButton.Group onValueChange = {Role => this.setState({role:Role})}  value={this.state.role}>
                        <View style={[{display:"flex"},{flexDirection:'row'}]}>
                            <RadioButton  value="DOCTOR" />
                            <Text style = {{alignSelf:"center"}}>Medic</Text>
                        </View>
                        <View style={[{display:"flex"},{flexDirection:'row'}]}>
                            <RadioButton value="CAREGIVER" />
                             <Text style = {{alignSelf:"center"}}>Ingrijitor</Text>
                        </View>
                        <View style={[{display:"flex"},{flexDirection:'row'}]}>
                            <RadioButton value="PACIENT" />
                            <Text style = {{alignSelf:"center"}}>Pacient</Text>
                            </View>
                            
                    </RadioButton.Group>
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
            </TouchableWithoutFeedback>
            </ScrollView>
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
        marginBottom: 30,
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
    },
    role: {
        flex:1,        
        marginHorizontal: 30,
        marginBottom:10,

       
    }

})