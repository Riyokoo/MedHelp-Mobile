import React  from 'react';
import {View,Button,Alert,ScrollView,StyleSheet,Text,TouchableWithoutFeedback,ImageBackground,Modal,TextInput, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import HeaderData from '../shared/headerData';

export default class DateDiagnotisc extends React.Component {
        constructor(props){
            super(props);
        };
        state = {
            numeMedic:"Nicolae Ioan",
            diagnotisc:"Some text here from DATABASE",
            observatii:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget.",
            date:new Date(2020, 2, 28),
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
                  { text: "OK", onPress: () => 
                     
                      this.setState({
                      accept:true,
                      visible:false,
                    })}
                ]
              );     
              console.log("accept");
        }
        componentWillMount(){
            this.setState({
                visible:this.props.visibleDateDiagnostic
            })
            console.log("from will mount : " + this.state.visible);
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
                                <Text style={styles.textItem}>{this.state.date.getDay() + "/" + this.state.date.getMonth() + "/" + this.state.date.getFullYear()} </Text>
                                
                            </View>   
                            <View style={[styles.items,{flexDirection:'column'}]}>
                                <Text style={styles.textItem}> Diagnosticul prescris </Text>
                                <Text style={styles.textItem}>{this.state.diagnotisc}</Text>
                            </View>  
                            <View style={[styles.items,{flexDirection:'column'}]}>
                                <Text style={styles.textItem}> Observatii </Text>
                                <Text style={styles.textItem}>{this.state.observatii}</Text>
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