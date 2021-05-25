import React from 'react';
import {ImageBackground,Modal,View,Text,Button,ScrollView, StyleSheet,TextInput ,Alert} from 'react-native';
import HeaderData from '../shared/headerData';
import { Picker } from "native-base";

export default class IntroduDiagnosticModal extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            toggleIntroduDiagnostc: true,
            pacient:"",
            diagnostic:"",
            recomandari:"",
            dozaj:"",
            medicament:"",
            email:this.props.email,
            nume:this.props.nume,
            prenume:this.props.prenume,
            diagnostic_error:'',
            recomandari_error:'',
            dozaj_error:'',
            medicament_error:'',

        }
    }

    componentDidMount(){
        // "diseaseName":"Diabet",
        // "recommendations":"consumul de fructe, legume, cereale integrale si proteine slabe",
        // "medicines":"Insuveg Fortee",
        // "dosage":"3 x zi a cate o pastila"     

    }
    thimiteDiagnostic = () =>{
        // DIAGNOSTIC
        if (this.state.diagnostic === "")
        {
            this.setState({ diagnostic_error: "* Acest camp este obligatoriu " });
        }else 
             this.setState({ diagnostic_error: "" });
        
        //MEDICAMENT
        if (this.state.recomandari === "")
        {
            this.setState({ recomandari_error: "* Acest camp este obligatoriu " });
        }else 
             this.setState({ recomandari_error: "" });

        //DOZAJ
        if (this.state.dozaj === "")
        {
            this.setState({ dozaj_error: "* Acest camp este obligatoriu " });
        }else 
             this.setState({ dozaj_error: "" });

        //RECOMANDARI
        if (this.state.medicament === "")
        {
            this.setState({ medicament_error: "* Acest camp este obligatoriu " });
        }else 
             this.setState({ medicament_error: "" });


        if(this.state.dozaj !== "" && this.state.recomandari !=="" && this.state.diagnostic !=="" && this.state.medicament !=="" ){
            fetch(`http://192.168.0.183:8080/records/${this.state.email}`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    diseaseName:this.state.diagnostic,
                    recommendations:this.state.recomandari,
                    medicines:this.state.medicament,
                    dosage:this.state.dozaj
                })

            }).then(response=>{
                Alert.alert(
                    "Diagnostic trimis",
                    "Multumim pentru feedback " + this.state.nume +"!",
                    [
                    {
                        text: "OK", 
                        onPress: () => {
                            this.props.SchimbaVizibilitate();
                            this.setState({
                                accept:true,
                            })
                        }
                    }
                    ]
                );    
            }).catch((error) => { console.log(error)});    
        }
    }
    
    render() {
        return (
             <Modal animationType="slide" visible={this.props.showModal}  >                              
                    <ImageBackground source={require("../assets/GREEN.png")} style={{flex:1}}>
                   
                    <HeaderData changeVisbility={this.props.SchimbaVizibilitate} title="Introdu diagnostic"/>
                    <ScrollView style={styles.container}>                  
                        <Text style={[styles.item, { textAlign: 'left', marginLeft: 5, letterSpacing: 1, fontSize: 20, marginBottom: 10, color: '#2c3e50' }]}>Puteti sa vizualizati diagnosticul prescris:</Text>
                        
                            <View style={styles.items}  >
                                                                         
                                <Picker
                                    style={{height: 50, width: 100}}
                                    onValueChange={(e) => { this.setState({pacient:e}) }}
                                 >
                                <Picker.Item label = "Selectati pacientul" value = {"awd"} />
                                <Picker.Item label="Vladi" value="Vladi" />
                                <Picker.Item label="Manu" value="Manu" />
                                </Picker>
                                
                                
                            </View> 
                             
                            <View style={[styles.items,{flexDirection:'column'}]}>
                                <View >
                                    <Text style={styles.inputTitle}>Diagnostic</Text>
                                    <Text style={{ fontSize: 12, color:'red' }}>{this.state.diagnostic_error}</Text>
                                </View>
                                <TextInput
                                    placeholder = "Introduceti diagnosticul"
                                    multiline={true}
                                    numberOfLines={2}
                                    style={styles.problemaInput}
                                    onChangeText={diagnostic => this.setState({ diagnostic })}
                                    value = {this.state.diagnostic}
                                ></TextInput>
                            
                            </View>
                            <View style={[styles.items,{flexDirection:'column'}]}>
                                 <View >
                                    <Text style={styles.inputTitle}>Medicament</Text>
                                    <Text style={{ fontSize: 12, color:'red' }}>{this.state.medicament_error}</Text>
                                 </View>
                                 <TextInput
                                    placeholder = "Medicament"
                                    multiline={true}
                                    numberOfLines={1}
                                    style={styles.problemaInput}
                                    onChangeText={medicament => this.setState({ medicament })}
                                    value = {this.state.medicament}
                                ></TextInput>
                            </View>
                            <View style={[styles.items,{flexDirection:'column'}]}>
                                <View >
                                    <Text style={styles.inputTitle}>Dozaj</Text>
                                    <Text style={{ fontSize: 12, color:'red' }}>{this.state.dozaj_error}</Text>
                                </View>
                                 <TextInput
                                    placeholder = "Dozaj"
                                    multiline={true}
                                    numberOfLines={1}
                                    style={styles.problemaInput}
                                    onChangeText={dozaj => this.setState({ dozaj })}
                                    value = {this.state.dozaj}
                                ></TextInput>
                            </View>  
                            <View style={[styles.items,{flexDirection:'column'}]}>
                                <View >
                                    <Text style={styles.inputTitle}>Recomandari</Text>
                                    <Text style={{ fontSize: 12, color:'red' }}>{this.state.recomandari_error}</Text>
                                </View>
                                 <TextInput
                                    placeholder = "Recomandari"
                                    multiline={true}
                                    numberOfLines={4}
                                    style={styles.problemaInput}
                                    onChangeText={recomandari => this.setState({ recomandari })}
                                    value = {this.state.recomandari}
                                ></TextInput>
                            </View>  
                            
                        <View style = {styles.send}>
                            <Button title="Trimite diagnostic" color={"#16a085"} onPress = {this.thimiteDiagnostic} />
                        </View>
                        
                        
                              
                    </ScrollView>              
                    </ImageBackground>       
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        marginTop:20,        
    },
    items:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginRight:5,
        borderWidth:3,
        borderRadius:50,
        marginVertical:5,
        padding:10,
        borderColor:'#2ecc71',
        backgroundColor:'#27ae60',
    },  
    listContainer:{
        flex:0,
        alignItems:'center',
        justifyContent:'center',
        
    },
    titleItem:{
        fontSize:20,
        color:'#2c3e50',
        letterSpacing:3,
        fontWeight:'300',
        textAlign:'center',
    },
    item:{
        fontSize:20,
        letterSpacing:2,
        textAlign:'center',
        color:'#2c3e50',
        
    },
    textItem:{
        fontSize:16,
        color:'#2c3e50',
        letterSpacing:2,
        fontWeight: '200',
        padding: 0,
        width: 290,        
        
    },
    problemaInput: {
        borderRadius: 4,
        borderWidth: 2,
        borderColor: 'transparent',
        textAlignVertical: 'top',
        width: 400,
        paddingTop: 10,
        paddingHorizontal: 10,
        textDecorationLine:'none',
    },
    send: {
        width: 140,
        height: 60,
        alignSelf: 'center',
        
        
    },
    inputTitle: {
        color: "#333",
        fontSize: 12,
        textAlign:'left',
        textTransform:"uppercase"
    },

});