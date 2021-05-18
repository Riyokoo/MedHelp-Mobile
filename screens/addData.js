import React from 'react';
import { View,Text,StyleSheet,ScrollView ,TouchableOpacity, ImageBackground,Image,Button,Keyboard , TouchableWithoutFeedback,Platform} from 'react-native';
import {MaterialIcons ,AntDesign ,FontAwesome ,MaterialCommunityIcons ,Ionicons} from '@expo/vector-icons';
import NumericInput from 'react-native-numeric-input'
import { globallyStyles } from '../global/styles';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class AddData extends React.Component{
    constructor(props){
        super(props);
    }
    state = {
        tempCorp:35,
        tensArt:80,
        puls:40,
        greutate:30.0,
        glicemie:10,       
        temp:0,      
        error:false,
        date:new Date(1598051730000),
        mode:'date',
        show:false,

    }
    incarcaDate = () =>{
        console.log("data");
       
    }
    onChangeDate = (event,selectedDate) =>{
        const currentDate = selectedDate || date;
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
    render(){
        return (
            <TouchableWithoutFeedback onPress={()=>{
                Keyboard.dismiss();
            }}>
            <ImageBackground source={require("../assets/GREEN.png")} style={{flex:1}}>
                <ScrollView style={styles.container}>
                    <TouchableOpacity onPress = {() => this.props.navigation.openDrawer()} style={globallyStyles.menu} >
                        <MaterialIcons size={30} name = "menu"  />
                    </TouchableOpacity> 

                    <View style={styles.header}>
                        <Image source={require("../assets/MedLife.png")} style={{flex:1,width:100,height:100,resizeMode:'contain'}}  />
                        <Text style={{fontSize:18,textAlign:'left',color:'#333',letterSpacing:2}}>Introduceti date medicale </Text>
                    </View>
                    <View style={styles.content}>
                        <MaterialCommunityIcons name="temperature-celsius" size={24} color="black" style={{padding:5}} />
                        <Text style={{fontSize:16,marginRight:12,color:'#333'}}>Temperatura corporala: </Text>
                        <NumericInput 
                            type='up-down' 
                            onChange={value => this.setState({tempCorp:value,error:false})} 
                            containerStyle={{marginLeft:10}}
                            minValue={0}
                            maxValue={45}
                            editable={true}
                            onLimitReached={()=> {this.setState({error:true})}} 
                            value={this.state.tempCorp}
                            valueType='real'
                            step={0.1}
                            iconSize={10}
                            textColor='#333' 
                            iconStyle={{ color: '#333' }}                     
                            totalWidth={90} 
                            totalHeight={50} 
                            upDownButtonsBackgroundColor={'#00b894'}
                            borderColor={'#00b894'}
                            />
                            <Text style={{fontSize:16,marginLeft:12,color:'#333'}} >°C</Text>
                    </View>
                    <View style={styles.content}>
                        <AntDesign name="hearto" size={24} color="black" style={{padding:5}} />
                        <Text style={{fontSize:16,marginRight:2,color:'#333'}}>Tensiunea arteriala:</Text>
                        <NumericInput 
                            type='up-down' 
                            onChange={value => this.setState({tensArt:value,error:false})} 
                            minValue={20}
                            maxValue={300}
                            containerStyle={{marginLeft:50}}
                            onLimitReached={()=> {this.setState({error:true})}}                         
                            editable={true}
                            value={this.state.tensArt}
                            valueType='real'
                            step={1}
                            iconSize={21}
                            textColor='#333' 
                            iconStyle={{ color: '#333' }}                     
                            totalWidth={90} 
                            totalHeight={50} 
                            upDownButtonsBackgroundColor={'#00b894'}
                            borderColor={'#00b894'}
                            />
                            <Text style={{fontSize:16,marginLeft:12,color:'#333'}} >mm Hg</Text>
                    </View>
                   
                    <View style={styles.content}>
                        <FontAwesome name="heartbeat" size={24} color="black" style={{padding:5}} />
                        <Text style={{fontSize:16,marginRight:15,color:'#333',textAlign:'right'}}>Puls : </Text>
                        <NumericInput 
                            type='up-down' 
                            onChange={value => this.setState({puls:value,error:false})} 
                            containerStyle={{marginLeft:135}}
                            minValue={40}
                            maxValue={200}
                            onLimitReached={()=> {this.setState({error:true})}} 
                            editable={true}
                            value={this.state.puls}
                            valueType='integer'
                            step={1}
                            iconSize={21}
                            textColor='#333' 
                            iconStyle={{ color: '#333' }}                     
                            totalWidth={90} 
                            totalHeight={50} 
                            upDownButtonsBackgroundColor={'#00b894'}
                            borderColor={'#00b894'}
                            />                          
                    </View>
                    <View style={styles.content}>
                        <MaterialCommunityIcons name="weight-kilogram" size={24} color="black"  style={{padding:5}}/>
                        <Text style={{fontSize:16,marginRight:2,color:'#333'}}>Greutatea :</Text>
                        <NumericInput 
                            type='up-down' 
                            onChange={value => this.setState({greutate:value,error:false})} 
                            minValue={30}
                            maxValue={200}
                            containerStyle={{marginLeft:110}}
                            editable={true}
                            onLimitReached={()=> {this.setState({error:true})}} 
                            value={this.state.greutate}
                            valueType='real'
                            step={1}
                            iconSize={21}
                            textColor='#333' 
                            iconStyle={{ color: '#333' }}                     
                            totalWidth={90} 
                            totalHeight={50} 
                            upDownButtonsBackgroundColor={'#00b894'}
                            borderColor={'#00b894'}
                            />
                            <Text style={{fontSize:16,marginLeft:15,color:'#333'}} >KG</Text>
                    </View>
                    <View style={styles.content}>
                        <Ionicons name="water" size={24} color="black" style={{padding:5}} />
                        <Text style={{fontSize:16,marginRight:2,color:'#333'}}>Glicemie :</Text>
                        <NumericInput 
                            type='up-down' 
                            onChange={value => this.setState({glicemie:value,error:false})} 
                            minValue={10}
                            containerStyle={{marginLeft:120}}
                            maxValue={400}
                            onLimitReached={()=> {this.setState({error:true})}} 
                            editable={true}
                            value={this.state.glicemie}
                            valueType='integer'
                            step={1}
                            iconSize={21}
                            textColor='#333' 
                            iconStyle={{ color: '#333' }}                     
                            totalWidth={90} 
                            totalHeight={50} 
                            upDownButtonsBackgroundColor={'#00b894'}
                            borderColor={'#00b894'}
                            />
                            
                    </View>
                    <View style={styles.content}>
                        <MaterialCommunityIcons name="temperature-celsius" size={24} color="black" style={{padding:5}} />
                        <Text style={{fontSize:16,marginRight:15,color:'#333'}}>Temperatura ambientala:</Text>
                        <NumericInput 
                            type='up-down' 
                            onChange={value => this.setState({temp:value,error:false})} 
                            minValue={5}
                            maxValue={90}
                            editable={true}
                            onLimitReached={()=> {this.setState({error:true})}} 
                            value={this.state.temp}
                            valueType='integer'
                            step={1}
                            iconSize={21}
                            textColor='#333' 
                            iconStyle={{ color: '#333' }}                     
                            totalWidth={90} 
                            totalHeight={50} 
                            upDownButtonsBackgroundColor={'#00b894'}
                            borderColor={'#00b894'}
                            />
                            <Text style={{fontSize:16,marginLeft:15,color:'#333'}} >°C</Text>
                    </View>  
                    <View style={styles.content}>
                     <Text style={{fontSize:16,marginLeft:15,color:'#333'}}>{this.state.date}</Text>
                        {this.state.show && (
                                    <DateTimePicker
                                        testID="dateTimePicker"
                                        value={this.state.date}
                                        mode={this.state.mode}
                                        is24Hour={true}
                                        display="default"
                                        onChange={()=>this.onChangeDate()}
                                    />
                        )}
                         <Button  onPress={this.showDatepicker} title="Data" />
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
        flex:1,
        padding:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    content:{
        flex:1,
        flexDirection:'row',
        alignItems:'flex-end',      
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