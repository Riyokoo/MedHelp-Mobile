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
        cnp:"",
        data_nasterii:"",
        adresa:"",
        telefon:"",
        sex:" ",
        varsta:"",
        grupa_sange:" ",

        //doctor
        //fara anumite componente
        seal_number:"",
        specializare:"",
        experienta:"",

        //ingrijitor
        //fara anumite componente
        nume_eroare: "",
        prenume_eroare: "",
        email_eroare: "",
        password_eroare: "",
        re_password_eroare: "",
        role_eroare:"",
        cnp_eroare:"",   
        adresa_eroare:"",
        telefon_eroare:"",
        sex_eroare:"",   
        grupa_sange_eroare:"",

        seal_number_error:"",
        specializare_error:"",
        experienta_error:"",

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
        //VERIFICA DACA CNP ESTE VALID
        console.log(this.state.cnp.toString().charAt(0));
        if (this.state.cnp === "")
        {
            this.setState({ cnp_eroare: "* Acest camp este obligatoriu" });
        }else if (this.state.cnp !== "") {
            if(this.state.cnp.toString().length <= 12){
                if (parseInt(this.state.cnp.toString().charAt(0)) !== 1 || parseInt(this.state.cnp.toString().charAt(0)) !== 2 || parseInt(this.state.cnp.toString().charAt(0)) !== 5|| parseInt(this.state.cnp.toString().charAt(0)) !== 6) {
                     if(parseInt(this.state.cnp.toString().substring(3,5) ) > 12)
                         if(parseInt(this.state.cnp.toString().substring(5,7))  >31)
                            this.setState({cnp_eroare:"* CNP invalid"}); 
              
                
                     
                }   
                
            }
            this.setState({ cnp_eroare: "" });
        }
        if(this.state.cnp !== ""){
           
            var anul_actual = parseInt(new Date().getFullYear().toString().substring(2,4));
            var anul = 0;
       
             //data nasterii
             if (parseInt(this.state.cnp.toString().charAt(0)) === 1 || parseInt(this.state.cnp.toString().charAt(0)) === 2 || parseInt(this.state.cnp.toString().charAt(0)) === 5|| parseInt(this.state.cnp.toString().charAt(0)) === 6){
                if(parseInt(this.state.cnp.toString().substring(3,5) ) <= 12){
                    if(parseInt(this.state.cnp.toString().substring(5,7))  <= 31)
                        console.log(this.state.cnp.substring(5,7)+"/" +this.state.cnp.substring(3,5));
                    }
                }       
                    if(parseInt(this.state.cnp.toString().charAt(0)) === 1 || parseInt(this.state.cnp.toString().charAt(0)) === 2){
                        anul = 1900 + parseInt(this.state.cnp.toString().substring(1,3).toString());
                    }else if((parseInt(this.state.cnp.toString().charAt(0)) === 5 || parseInt(this.state.cnp.toString().charAt(0)) === 6) && parseInt(this.state.cnp.toString().charAt(0)) < anul_actual  ){
                        anul = 2000 + parseInt(this.state.cnp.toString().substring(1,3).toString());
                    }
                   
                   
        }

        //VERIFICA DACA ADRESA ESTE VALIDA
        if (this.state.adresa === "")
        {
            this.setState({ adresa_eroare: "* Acest camp este obligatoriu " });
        }else 
             this.setState({ adresa_eroare: "" });
            
        

        //VERIFICA DACA TELEFONUL ESTE VALID
        if (this.state.telefon === "")
        {
            this.setState({ telefon_eroare: "* Acest camp este obligatoriu " });
        }else if (this.state.telefon !== "") {
             if (this.state.telefon.length < 0 ) {
                this.setState({ telefon_eroare: "* Telefon invalid " });
        
            }
             else {
                 this.setState({ telefon_eroare: "" });
            }
        }

        //VERIFICA EXPERIENTA MEDIC 
        if (this.state.experienta === "")
        {
            this.setState({ experienta_error: "* Acest camp este obligatoriu " });
        }else if (this.state.experienta !== "") {
             if (this.state.experienta.length < 0 ) {
                this.setState({ experienta_error: "* Telefon invalid " });
        
            }
             else {
                 this.setState({ experienta_error: "" });
            }
        }

        //VERIFICA NUMARUL de sigiliu medic

        if (this.state.seal_number === "")
        {
            this.setState({ seal_number_error: "* Acest camp este obligatoriu " });
        }else if (this.state.seal_number !== "") {
             if (this.state.seal_number.length < 0 ) {
                this.setState({ seal_number_error: "* Telefon invalid " });
        
            }
             else {
                 this.setState({ seal_number_error: "" });
            }
        }

        //verifica daca specializarea este valida
        if (this.state.specializare === "")
        {
            this.setState({ specializare_error: "* Acest camp este obligatoriu " });
        }else if (this.state.specializare !== "") {
             if ((/^([a-zA-Z]{3,})$/).test(this.state.specializare) === false) {
                this.setState({ specializare_error: "* Nume invaliad " });
        
            }
             else {
                 this.setState({ specializare_error: "" });
            }
        }

        //VERIFICA DACA SEXUL ESTE VALID
        if (this.state.sex === "")
        {
            this.setState({ sex_eroare: "* Va rugam selectati categoria de sex !" });
        }
        else {
            this.setState({ sex_eroare: "" });
        }


        //VERIFICA DACA GRUPA DE SANGE ESTE VALIDA
        if (this.state.grupa_sange === "")
        {
            this.setState({ grupa_sange_eroare: "* Va rugam selectati categoria de sex !" });
        }
        else {
            this.setState({ grupa_sange_eroare: "" });
        }
        
    fetch('http://192.168.0.183:8080/users/', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: this.state.email,
            firstName: this.state.nume,
            lastName: this.state.prenume,
            password: this.state.password,                
            userRole: this.state.role        
        })
    }).catch((error) => { console.log(error)}); 
    
    var ziua = parseInt(this.state.cnp.substring(5,7));
    var luna = parseInt(this.state.cnp.substring(3,5));
    let age = (new Date().getFullYear() - anul);
      console.log("varsta in pana mea : " + age);
      let data_nasterii = new Date(anul,luna + 1,ziua,0,0,0,0);
      console.log("data nasteiri " + data_nasterii.toLocaleDateString());          
    this.setState({
        varsta: age,
        data_nasterii: (data_nasterii.getFullYear()+"-"+data_nasterii.getMonth+"-"+data_nasterii.getDate()),
    });
    console.log("cnp :" + this.state.cnp); 
    console.log("data nasterii :" + this.state.data_nasterii); 
    console.log("varsta :" + this.state.varsta); 
    console.log("adresa :" + this.state.adresa); 
    console.log("user role  :" + this.state.role); 

    switch(this.state.role){
        case "PACIENT":
            fetch(`http://192.168.0.183:8080/patients/${this.state.email}`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                     CNP:this.state.cnp,
                     birthDate:data_nasterii,
                     address:this.state.adresa,
                     phone:this.state.telefon,
                     sex:this.state.sex,
                     age:age,                   
                     bloodGroup:this.state.grupa_sange              
                })
            }).catch((error) => { console.log(error)}); 
            break;
        case "DOCTOR":
            fetch(`http://192.168.0.183:8080/doctors/${this.state.email}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sealNumber:this.state.seal_number,
                officeAddress:this.state.adresa,
                experience:this.state.experienta,
                specialization:this.state.specializare,
                age:age,
                birthDate:data_nasterii,
                phone:this.state.telefon             
            })
            }).catch((error) => { console.log(error)}); 
            break;
        case "CAREGIVER":
            fetch(`http://192.168.0.183:8080/caregivers/${this.state.email}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phone:this.state.telefon,
                birthDate:data_nasterii,
                age:age,
                address:this.state.adresa,
                available:1             
            })
            }).catch((error) => { console.log(error)}); 
            break;
        }    

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
    
    componentDidUpdate(){}

    //this.setState({ errorMessage: error.message })
    renderSwitch(role){
        switch(role){
            case "PACIENT":

                return (
                    <View style={{flex:1}}>
                       
                    <View style = {styles.form}>
                        <View>
                                <View >
                                    <Text style={styles.inputTitle}>Adresa</Text>
                                    <Text style={{ fontSize: 12, color:'red' }}>{this.state.adresa_eroare}</Text>
                                </View>
                            <TextInput
                                style={styles.input}                             
                                onChangeText={adresa => this.setState({ adresa })}
                                value = {this.state.adresa}
                            ></TextInput>
                        </View>
                    </View>
               
                    <View style={styles.role}>
                        <View>
                            <Text style={styles.inputTitle}>Sex</Text>
                            <Text style={{ fontSize: 12, color:'red' }}>{this.state.sex_eroare}</Text>
                        </View>
                        <RadioButton.Group onValueChange = {sex => this.setState({sex:sex})}  value={this.state.sex}>
                                <View style={[{display:"flex"},{flexDirection:'row'}]}>
                                    <RadioButton  value="M" />
                                    <Text style = {{alignSelf:"center"}}>Masculin</Text>
                                </View>
                                <View style={[{display:"flex"},{flexDirection:'row'}]}>
                                    <RadioButton value="F" />
                                    <Text style = {{alignSelf:"center"}}>Feminin</Text>
                                </View>             
                        </RadioButton.Group>
                    </View>
                    <View style={styles.role}>
                        <View>
                            <Text style={styles.inputTitle}>Grupa sanguina</Text>
                            <Text style={{ fontSize: 12, color:'red' }}>{this.state.grupa_sange_eroare}</Text>
                        </View>
                        <RadioButton.Group onValueChange = {grupa_sange => this.setState({grupa_sange:grupa_sange})}  value={this.state.grupa_sange}>
                                <View style={[{display:"flex"},{flexDirection:'row'}]}>
                                    <RadioButton  value="A" />
                                    <Text style = {{alignSelf:"center"}}>A</Text>
                                </View>
                                <View style={[{display:"flex"},{flexDirection:'row'}]}>
                                    <RadioButton value="B" />
                                    <Text style = {{alignSelf:"center"}}>B</Text>
                                </View>   
                                <View style={[{display:"flex"},{flexDirection:'row'}]}>
                                    <RadioButton value="AB" />
                                    <Text style = {{alignSelf:"center"}}>AB</Text>
                                </View>   
                                <View style={[{display:"flex"},{flexDirection:'row'}]}>
                                    <RadioButton value="0" />
                                    <Text style = {{alignSelf:"center"}}>0</Text>
                                </View>             
                        </RadioButton.Group>
                    </View> 
                </View>
                )
            case "DOCTOR":
                return (
                    <View style={{flex:1}}>
                        <View style = {styles.form}>
                            <View>
                                    <View >
                                        <Text style={styles.inputTitle}>Adresa CABINET</Text>
                                        <Text style={{ fontSize: 12, color:'red' }}>{this.state.adresa_eroare}</Text>
                                    </View>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={adresa => this.setState({ adresa })}
                                    value = {this.state.adresa}
                                ></TextInput>
                            </View>
                        </View>

                        <View style = {styles.form}>
                            <View>
                                    <View >
                                        <Text style={styles.inputTitle}>Specializare</Text>
                                        <Text style={{ fontSize: 12, color:'red' }}>{this.state.specializare_error}</Text>
                                    </View>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={specializare => this.setState({ specializare })}
                                        value = {this.state.specializare}
                                    ></TextInput>
                            </View>
                        </View>

                        <View style = {styles.form}>
                            <View>
                                <View >
                                    <Text style={styles.inputTitle}>Experienta</Text>
                                    <Text style={{ fontSize: 12, color:'red' }}>{this.state.experienta_error}</Text>
                                </View>
                                <TextInput
                                    style={styles.input}                                   
                                    keyboardType='numeric'
                                    onChangeText={experienta => this.setState({ experienta })}
                                    value = {this.state.experienta}
                                ></TextInput>
                            </View>
                        </View>

                        <View style = {styles.form}>
                            <View>
                                <View >
                                    <Text style={styles.inputTitle}>Cod parafa</Text>
                                    <Text style={{ fontSize: 12, color:'red' }}>{this.state.seal_number_error}</Text>
                                </View>
                                <TextInput
                                    style={styles.input}
                                    maxLength={8}
                                    keyboardType='numeric'
                                    onChangeText={seal_number => this.setState({ seal_number })}
                                    value = {this.state.seal_number}
                                ></TextInput>
                            </View>
                        </View>
                        
                    </View>
                )
            case "CAREGIVER":
                return(
                    <View style={{flex:1}}>
                        <View style = {styles.form}>
                            <View>
                                    <View >
                                        <Text style={styles.inputTitle}>Adresa</Text>
                                        <Text style={{ fontSize: 12, color:'red' }}>{this.state.adresa_eroare}</Text>
                                    </View>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={adresa => this.setState({ adresa })}
                                    value = {this.state.adresa}
                                ></TextInput>
                            </View>
                        </View>
                    </View>
                )
            case "":
                return (<> 
                        <Text style={styles.inputTitle} >Alegeti una din categorii</Text>
                    </>
                    )
            default :
                return (<> 
                    <Text style={styles.inputTitle} >Alegeti una din categorii</Text>
                </>
                )
        }
    }
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
                                    <Text style={styles.inputTitle}>Telefon</Text>
                                    <Text style={{ fontSize: 12, color:'red' }}>{this.state.telefon_eroare}</Text>
                                </View>
                            <TextInput
                                style={styles.input}
                                maxLength={10}
                                keyboardType='numeric'
                               
                                onChangeText={telefon => this.setState({ telefon })}
                                value = {this.state.telefon}
                            ></TextInput>
                        </View>
                    </View>
                    <View style = {styles.form}>
                            <View>
                                    <View >
                                        <Text style={styles.inputTitle}>CNP</Text>
                                        <Text style={{ fontSize: 12, color:'red' }}>{this.state.cnp_eroare}</Text>
                                    </View>
                                <TextInput
                                    style={styles.input}
                                
                                    maxLength={13}
                                    keyboardType='numeric'
                                   
                                    onChangeText={cnp => this.setState({ cnp })}
                                    value = {this.state.cnp}
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
                                secureTextEntry={true}
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
                                secureTextEntry={true}
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
                   {this.renderSwitch(this.state.role)}
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