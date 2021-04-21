import React from 'react';
import { View,Text,StyleSheet ,ScrollView ,TouchableOpacity, ImageBackground,Image,Button} from 'react-native';
import {MaterialIcons ,AntDesign ,FontAwesome ,MaterialCommunityIcons ,Ionicons} from '@expo/vector-icons';
import NumericInput from 'react-native-numeric-input'
import { globallyStyles } from '../global/styles';
import { Avatar } from 'react-native-paper';

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
        lumina:false,
        temp:0,
        gaz:false,
        umiditate:false,
        proximitate:false,

    }
    incarcaDate = () =>{
        console.log("data");
        console.log(this.state.tensArt + " \n" + this.state.umiditate)
    }
    render(){
        return (
            <ImageBackground source={require("../assets/GREEN.png")} style={{flex:1}}>
                <ScrollView style={styles.container}>
                    <TouchableOpacity onPress = {() => this.props.navigation.openDrawer()} style={globallyStyles.menu} >
                        <MaterialIcons size={30} name = "menu"  />
                    </TouchableOpacity> 

                    <View style={styles.header}>
                        <Image source={require("../assets/MedLife.png")} style={{flex:1,width:100,height:100,resizeMode:'contain'}}  />
                        <Text style={{fontSize:20,textAlign:'left',color:'#333',letterSpacing:2}}>Introduceti date medicale </Text>
                    </View>
                    <View style={styles.content}>
                        <MaterialCommunityIcons name="temperature-celsius" size={24} color="black" style={{padding:5}} />
                        <Text style={{fontSize:20,marginRight:15,color:'#333'}}>Temperatura corporala : </Text>
                        <NumericInput 
                            type='up-down' 
                            onChange={value => this.setState({tempCorp:value})} 
                            minValue={0}
                            maxValue={45}
                            editable={false}
                            value={this.state.tempCorp}
                            valueType='real'
                            step={0.1}
                            iconSize={21}
                            textColor='#333' 
                            iconStyle={{ color: '#333' }}                     
                            totalWidth={90} 
                            totalHeight={50} 
                            upDownButtonsBackgroundColor={'#00b894'}
                            borderColor={'#00b894'}
                            />
                            <Text style={{fontSize:20,marginLeft:15,color:'#333'}} >°C</Text>
                    </View>
                    <View style={styles.content}>
                        <AntDesign name="hearto" size={24} color="black" style={{padding:5}} />
                        <Text style={{fontSize:20,marginRight:2,color:'#333'}}>Tensiunea arteriala :</Text>
                        <NumericInput 
                            type='up-down' 
                            onChange={value => this.setState({tensArt:value})} 
                            minValue={20}
                            maxValue={300}
                            editable={false}
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
                            <Text style={{fontSize:20,marginLeft:15,color:'#333'}} >mm Hg</Text>
                    </View>
                   
                    <View style={styles.content}>
                        <FontAwesome name="heartbeat" size={24} color="black" style={{padding:5}} />
                        <Text style={{fontSize:20,marginRight:15,color:'#333',textAlign:'right'}}>Puls : </Text>
                        <NumericInput 
                            type='up-down' 
                            onChange={value => this.setState({puls:value})} 
                            minValue={40}
                            maxValue={200}
                            editable={false}
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
                        <Text style={{fontSize:20,marginRight:2,color:'#333'}}>Greutatea :</Text>
                        <NumericInput 
                            type='up-down' 
                            onChange={value => this.setState({greutate:value})} 
                            minValue={30}
                            maxValue={200}
                            editable={true}
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
                            <Text style={{fontSize:20,marginLeft:15,color:'#333'}} >KG</Text>
                    </View>
                    <View style={styles.content}>
                        <Ionicons name="water" size={24} color="black" style={{padding:5}} />
                        <Text style={{fontSize:20,marginRight:2,color:'#333'}}>Glicemie :</Text>
                        <NumericInput 
                            type='up-down' 
                            onChange={value => this.setState({glicemie:value})} 
                            minValue={10}
                            maxValue={400}
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
                        <Text style={{fontSize:20,marginRight:15,color:'#333'}}>Temperatura ambientala : </Text>
                        <NumericInput 
                            type='up-down' 
                            onChange={value => this.setState({temp:value})} 
                            minValue={5}
                            maxValue={90}
                            editable={true}
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
                            <Text style={{fontSize:20,marginLeft:15,color:'#333'}} >°C</Text>
                    </View>
                    
                </ScrollView>
                <Button title="Incarca datele" color={'#00b894'} onPress={this.incarcaDate} />
            </ImageBackground>
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
        padding:6,
        marginLeft:0,
    }
});