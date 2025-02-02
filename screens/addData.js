import React from 'react';
import { View,Text,StyleSheet,ScrollView ,TouchableOpacity, ImageBackground,Image,Button,Keyboard , TouchableWithoutFeedback,Platform, Alert} from 'react-native';
import {MaterialIcons ,AntDesign ,FontAwesome ,MaterialCommunityIcons ,Ionicons,Entypo} from '@expo/vector-icons';
import NumericInput from 'react-native-numeric-input'
import { globallyStyles } from '../global/styles';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import axios from 'axios';
import { ThemeConsumer } from 'react-native-elements';

export default class AddData extends React.Component{
    constructor(props){
        super(props);
    }
    state = {
        tempCorp:0,
        tensMare:0,
        tensMica:0,
        puls:0,
        greutate:0.0,
        glicemie:0,       
        temp:0, 
        umiditate:0,     
        error:false,
        date:new Date(),
        mode:'date',
        show:false,
        accept:false,

    }
    incarcaDate = () =>{

        
        //incarcare in functie de emailul pacientului 
        const options = {   headers: {'Accept':'application/json','Content-Type':'application/json'} }; 
       
        if(this.state.tensMare !== 0 && this.state.tensMica !== 0 && this.state.puls !== 0 && this.state.glicemie !== 0 && this.state.greutate !== 0 && this.state.glicemie !== 0 && this.state.tempCorp !== 0 && this.state.umiditate !== 0  ){ 
            fetch('http://192.168.0.183:8080/sensors/1', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    bloodPressureDiastolic:this.state.tensMica,
                    bloodPressureSystolic:this.state.tensMare,
                    pulse:this.state.puls,
                    bodyTemperature:this.state.tempCorp,
                    bodyWeight:this.state.greutate,
                    glycemia:this.state.glicemie,               
                    ambientTemperature:this.state.temp,              
                    humidity:this.state.umiditate,
                    date:this.state.date                  
                })

            }).then(response=>{
                Alert.alert(
                    "Date inregistrate",
                    "Multumim pentru incarcarea datelor!",
                    [
                    {
                        text: "OK", 
                        onPress: () => {
                            
                            this.setState({
                                accept:true,
                            })
                        }
                    }
                    ]
                );   
            }).catch((error) => { console.log(error)}); 
        }
        //merge pana aici
    }
    onChangeDate = (date) =>{
        const currentDate = date;
        this.setState({
            mode:Platform.OS === 'android',
            date:currentDate,
        });
        this.hideDatePicker();
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
    hideDatePicker = () =>{
        this.setState({
            show:false,
        })
    }
    showTimePicker = () =>{
        this.showMode('time');
    };
    
   
    render(){
        return (
            <TouchableWithoutFeedback onPress={()=>{
                Keyboard.dismiss();
            }}>
            <ImageBackground source={require("../assets/GREEN.png")} style={{flex:1}}>
                        <TouchableOpacity onPress = {() => this.props.navigation.openDrawer()} style={globallyStyles.menu} >
                            <MaterialIcons size={30} name = "menu"  />
                        </TouchableOpacity> 
                    <View style={styles.header}>
                       
                        <Image source={require("../assets/MedLife.png")} style={{flex:1,width:100,height:100,resizeMode:'contain'}}  />
                        <View style={{flex:1,flexDirection:'column'}}>
                            <Text style={{fontSize:18,textAlign:'left',color:'#333',letterSpacing:2}}>Introduceti date medicale </Text>
                            <Text style={{fontSize:10,textAlign:'left',color:'#333',letterSpacing:0}}>(datele sa nu fie 0)</Text>
                        </View>
                        
                    </View>
                    
                <ScrollView style={styles.container}>
                   
                    <View style={styles.content}>
                        <MaterialCommunityIcons name="temperature-celsius" size={24} color="#2c3e50" style={{padding:5}} />
                        <Text style={{fontSize:14,marginRight:12,color:'#333'}}>Temperatura corporala: </Text>
                        <Text style={{fontSize:16,marginLeft:12,color:'#333'}} >°C</Text>
                        <Text style={{fontSize:16,marginLeft:12,color:'#333'}} > </Text>
                        <NumericInput 
                            type='up-down' 
                            onChange={value => this.setState({tempCorp:value,error:false})} 
                            containerStyle={{marginLeft:12}}
                            minValue={0}
                            maxValue={45}
                            editable={true}
                            // onLimitReached={()=> {this.setState({error:true})}} 
                            value={this.state.tempCorp}
                            valueType='real'
                            step={0.1}
                            iconSize={10}
                            textColor='#333' 
                            iconStyle={{ color: '#333' }}                     
                            totalWidth={70} 
                            totalHeight={50} 
                            upDownButtonsBackgroundColor={'#00b894'}
                            borderColor={'#00b894'}
                            />
                            
                    </View>
                    <View style={styles.content}>
                        <AntDesign name="hearto" size={24} color="#e74c3c" style={{padding:5}} />
                        <Text style={{fontSize:14,marginRight:2,color:'#333'}}>Tensiunea arteriala:</Text>
                        <Text style={{fontSize:12,color:'#333',fontWeight:'bold'}}>(Sis/Dia)</Text>
                        <NumericInput 
                            type='up-down' 
                            onChange={value => this.setState({tensMare:value,error:false})} 
                            minValue={0}
                            maxValue={300}
                            containerStyle={{marginLeft:5}}
                            // onLimitReached={()=> {this.setState({error:true})}}                         
                            editable={true}
                            value={this.state.tensMare}
                            valueType='real'
                            step={1}
                            iconSize={21}
                            textColor='#333' 
                            iconStyle={{ color: '#333' }}                     
                            totalWidth={70} 
                            totalHeight={50} 
                            upDownButtonsBackgroundColor={'#00b894'}
                            borderColor={'#00b894'}
                            />
                           
                            <NumericInput 
                            type='up-down' 
                            onChange={value => this.setState({tensMica:value,error:false})} 
                            minValue={0}
                            maxValue={300}
                            containerStyle={{marginLeft:1}}
                            // onLimitReached={()=> {this.setState({error:true})}}                         
                            editable={true}
                            value={this.state.tensMica}
                            valueType='real'
                            step={1}
                            iconSize={21}
                            textColor='#333' 
                            iconStyle={{ color: '#333' }}                     
                            totalWidth={70} 
                            totalHeight={50} 
                            upDownButtonsBackgroundColor={'#00b894'}
                            borderColor={'#00b894'}
                            />
                           
                    </View>
                   
                    <View style={styles.content}>
                        <FontAwesome name="heartbeat" size={24} color="#c0392b" style={{padding:5}} />
                        <Text style={{fontSize:14,marginRight:15,color:'#333',textAlign:'right'}}>Puls :  </Text>
                        <Text style={{fontSize:14,color:'#333',fontWeight:'bold'}}>BPM </Text>
                        <Text style={{fontSize:14,color:'#333',fontWeight:'bold'}}> </Text>
                        <NumericInput 
                            type='up-down' 
                            onChange={value => this.setState({puls:value,error:false})} 
                            containerStyle={{marginLeft:125}}
                            minValue={0}
                            maxValue={200}
                            // onLimitReached={()=> {this.setState({error:true})}} 
                            editable={true}
                            value={this.state.puls}
                            valueType='integer'
                            step={1}
                            iconSize={21}
                            textColor='#333' 
                            iconStyle={{ color: '#333' }}                     
                            totalWidth={70} 
                            totalHeight={50} 
                            upDownButtonsBackgroundColor={'#00b894'}
                            borderColor={'#00b894'}
                            />                          
                    </View>
                    <View style={styles.content}>
                        <MaterialCommunityIcons name="weight-kilogram" size={24} color="#2c3e50"  style={{padding:5}}/>
                        <Text style={{fontSize:14,marginRight:2,color:'#333'}}>Greutatea :</Text>
                        <Text style={{fontSize:14,marginLeft:15,color:'#333'}} ></Text>
                        <Text style={{fontSize:14,marginLeft:15,color:'#333',fontWeight:'bold'}} >KG</Text>
                        <NumericInput 
                            type='up-down' 
                            onChange={value => this.setState({greutate:value,error:false})} 
                            minValue={0}
                            maxValue={200}
                            containerStyle={{marginLeft:110}}
                            editable={true}
                            // onLimitReached={()=> {this.setState({error:true})}} 
                            value={this.state.greutate}
                            valueType='real'
                            step={1}
                            iconSize={21}
                            textColor='#333' 
                            iconStyle={{ color: '#333' }}                     
                            totalWidth={70} 
                            totalHeight={50} 
                            upDownButtonsBackgroundColor={'#00b894'}
                            borderColor={'#00b894'}
                            />
                            
                    </View>
                    <View style={styles.content}>
                        <Ionicons name="water" size={24} color="#d35400" style={{padding:5}} />
                        <Text style={{fontSize:14,marginRight:2,color:'#333'}}>Glicemie :</Text>
                        <Text style={{fontSize:14,marginRight:2,color:'#333',fontWeight:'bold'}}>mg/DL</Text>
                        <NumericInput 
                            type='up-down' 
                            onChange={value => this.setState({glicemie:value,error:false})} 
                            minValue={0}
                            containerStyle={{marginLeft:120}}
                            maxValue={400}
                            // onLimitReached={()=> {this.setState({error:true})}} 
                            editable={true}
                            value={this.state.glicemie}
                            valueType='integer'
                            step={1}
                            iconSize={21}
                            textColor='#333' 
                            iconStyle={{ color: '#333' }}                     
                            totalWidth={70} 
                            totalHeight={50} 
                            upDownButtonsBackgroundColor={'#00b894'}
                            borderColor={'#00b894'}
                            />
                            
                    </View>
                    <View style={styles.content}>
                        <MaterialCommunityIcons name="temperature-celsius" size={24} color="#f1c40f" style={{padding:5}} />
                        <Text style={{fontSize:14,marginRight:15,color:'#333'}}>Temperatura ambientala:</Text>
                        <Text style={{fontSize:14,marginLeft:15,color:'#333',fontWeight:'bold'}} >°C</Text>
                        <NumericInput 
                            type='up-down' 
                            onChange={value => this.setState({temp:value,error:false})} 
                            minValue={0}
                            maxValue={90}
                            editable={true}
                            // onLimitReached={()=> {this.setState({error:true})}} 
                            value={this.state.temp}
                            valueType='integer'
                            step={1}
                            iconSize={21}
                            textColor='#333' 
                            iconStyle={{ color: '#333' }}                     
                            totalWidth={70} 
                            totalHeight={50} 
                            containerStyle={{marginLeft:12}}
                            upDownButtonsBackgroundColor={'#00b894'}
                            borderColor={'#00b894'}
                            />
                            
                    </View>  
                    <View style={styles.content}>
                        <Entypo name="water" size={24} color="blue" style={{padding:5}} />
                        <Text style={{fontSize:14,marginRight:2,color:'#333'}}>Umiditatea :</Text>
                        <Text style={{fontSize:14,marginLeft:15,color:'#333'}} ></Text>
                        <Text style={{fontSize:14,marginLeft:15,color:'#333',fontWeight:'bold'}} >%</Text>
                        <NumericInput 
                            type='up-down' 
                            onChange={value => this.setState({umiditate:value,error:false})} 
                            minValue={0}
                            maxValue={100}
                            containerStyle={{marginLeft:110}}
                            editable={true}
                            // onLimitReached={()=> {this.setState({error:true})}} 
                            value={this.state.greutate}
                            valueType='real'
                            step={1}
                            iconSize={21}
                            textColor='#333' 
                            iconStyle={{ color: '#333' }}                     
                            totalWidth={70} 
                            totalHeight={50} 
                            upDownButtonsBackgroundColor={'#00b894'}
                            borderColor={'#00b894'}
                            />
                            
                    </View>
                    <View style={[styles.content],{flex:1,flexDirection:'row',justifyContent:'space-around'}}>
                     <MaterialIcons name="date-range" size={24} color="#2c3e50" style={{marginLeft:-7}} />   
                     <Text style={{fontSize:14,marginLeft:10,color:'#333'}}>Data</Text>   
                     <Text style={{fontSize:14,marginLeft:40,color:'#333',fontWeight:'bold'}}>{this.state.date.toLocaleDateString()}</Text>                      
                        <DateTimePickerModal
                            isVisible={this.state.show}
                            mode="date"
                            onConfirm={this.onChangeDate}
                            onCancel={this.hideDatePicker}   
                                
                        />
                        <Text style={{fontSize:14,marginLeft:15,color:'#333',fontWeight:'bold'}} ></Text>
                        <Button color={'#00b894'} onPress={this.showDatepicker} title="Data" />
                    </View>
                </ScrollView>
                <Text style={{fontSize:16,marginLeft:15,color:'red'}}> {this.state.error ? "Ati depasit valoarea maxima" : ""} </Text>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => this.incarcaDate()}>
                    <Text style = {{alignSelf:'center', color:'#FFFFFF', paddingTop:10,}}>Incarca datele</Text>
                </TouchableOpacity>
            </ImageBackground>
            </TouchableWithoutFeedback>
        )
    }
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    header:{
        flex:0,
        padding:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    content:{
        flex:1,
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'space-between',      
        padding:6,
        marginLeft:0,
    },
    buttonStyle:{
        alignSelf: 'center',
        backgroundColor: "#00b894",
        borderRadius: 6,
        width: 170,
        height:40,
        marginBottom:60,
    }
});