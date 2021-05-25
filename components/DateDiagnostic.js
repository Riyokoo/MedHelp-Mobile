import React  from 'react';
import {View,Button,Alert,ScrollView,StyleSheet,Text,TouchableWithoutFeedback,ImageBackground,Modal,TextInput, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import HeaderData from '../shared/headerData';

export default class DateDiagnotisc extends React.Component {
    constructor(props){
        super(props);
    };
    state = {
            
            numeMedic:"Valentin Branc",
            diagnostic:"Febra Serioasa",
            medicament:"Paracetamol ",
            dozaj:"3x pe zi ",
            recomandari:"Ceaiuri fructe si multa odihna",
            date:new Date(),
            mode:'date',
            show:false,
            accept:false,
            visible:this.props.visibleDateDiagnostic,        

        }
        onChange = (event,selectedDate) =>{
            const currentDate = selectedDate || date;
            console.log(selectedDate.toLocaleString());
            this.setState({
                mode:Platform.OS === 'android',
                date:currentDate,
            });
        }
        showMode = (currentMode) =>{
            this.setState({
                show:true,
                mode:currentMode,
            });
        };
        showDatepicker = () => {
            this.showMode('date');
        };

        showTimePicker = () =>{
            this.showMode('time');
        };
        acceptDiagnostic =() =>{
            //aici vom trimite in baza de date acceptul pacientului / luat la cunostiinta           
            console.log("accept");
            Alert.alert(
                "Diagnostic acceptat",
                "Multumim pentru feedback!",
                [
                  {
                    text: "OK", 
                    onPress: () => {
                        this.props.changeVisbility();
                        this.setState({
                            accept:true,
                        })
                    }
                  }
                ]
              );     
            
        }
        //${this.state.email}
        componentDidMount(){
            //aici vom selecta din DB
            fetch(`http://192.168.0.183:8080/records/${this.state.email}`, {
            method: 'GET',
            headers: {
                 Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            
            }).then(response => response.json() )
            .then(response=> {
                this.setState({
                    diagnostic:response.diseaseName,
                    medicament:response.medicines,
                    dozaj:response.dosage,
                    recomandari:response.recommendations
                    
                })
            }).catch((error) => { console.log(error)}); 
        }
        componentDidUpdate(){
            
            console.log("visible from modal :"+ this.state.visible);
           
  
        }
      
        render = () =>{
            return (
                <TouchableWithoutFeedback onPress={()=>{
                    Keyboard.dismiss();
                    console.log("keyboard dismiss");
                }}>
                <Modal animationType="slide"  visible={this.props.visibleDateDiagnostic }  >                              
                    <ImageBackground source={require("../assets/GREEN.png")} style={{flex:1}}>
                   
                    <HeaderData changeVisbility={this.props.changeVisbility} title="Vezi diagnostic"/>
                    <ScrollView style={styles.container}>                  
                            <Text style={[styles.item,{textAlign:'left',marginLeft:5,letterSpacing:1,fontSize:20,marginBottom:10,color:'#2c3e50'}]}>Puteti sa vizualizati diagnosticul prescris:</Text>
                            <View style={styles.items}  >
                                <Text style={styles.textItem}>Nume medic</Text>
                                <Text style={styles.textItem}>{this.state.numeMedic} </Text>
                                
                            </View> 
                            <View style={styles.items}  >
                                <Text style={styles.textItem}>Data diagnostic</Text>
                                <Text style={styles.textItem}>{this.state.date.toLocaleDateString()} </Text>
                                
                            </View>   
                            <View style={[styles.items,{flexDirection:'column'}]}>
                                <Text style={styles.textItem}> Diagnosticul prescris </Text>
                                <Text style={styles.textItem}>{this.state.diagnostic}</Text>
                            </View>  
                            <View style={[styles.items,{flexDirection:'column'}]}>
                                <Text style={styles.textItem}> Medicament </Text>
                                <Text style={styles.textItem}>{this.state.medicament}</Text>
                            </View>  
                            <View style={[styles.items,{flexDirection:'column'}]}>
                                <Text style={styles.textItem}> Dozaj </Text>
                                <Text style={styles.textItem}>{this.state.dozaj}</Text>
                            </View>  
                            <View style={[styles.items,{flexDirection:'column'}]}>
                                <Text style={styles.textItem}> Recomandari </Text>
                                <Text style={styles.textItem}>{this.state.recomandari}</Text>
                            </View>  
                            <View  style={[styles.items,{flexDirection:'row',justifyContent:'space-around',marginRight:10}]}>
                                {/* <Button title="Refuz" color={"#c0392b"} onPress={()=>this.refuzDiagnostic()} /> */}
                                <Text style={styles.textItem}>Acceptare diagnostic</Text>
                                <Button title="Sunt de acord" color={"#16a085"} onPress={()=>this.acceptDiagnostic()} />
                            </View>  
                              
                    </ScrollView>              
                    </ImageBackground>       
                </Modal>
                </TouchableWithoutFeedback>
            );
        }

};

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
        padding:20,
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
        fontWeight:'200',
    },
});