import React from 'react';
import {View, Text,StyleSheet,ImageBackground,TouchableOpacity,Image,ScrollView} from 'react-native';
import {MaterialIcons, } from '@expo/vector-icons';
import { globallyStyles } from '../global/styles';

export default class Acasa extends React.Component{
    constructor(props){
        super(props);
    }
    state ={
        
    }
    render(){
        return(
            <ImageBackground source={require('../assets/GREEN.png')} style={{flex:1}}>
                    <TouchableOpacity onPress = {() => this.props.navigation.openDrawer()} style={globallyStyles.menu} >
                        <MaterialIcons size={30} name = "menu"  />
                    </TouchableOpacity> 
                    
                    <ScrollView style={styles.container}>

                    </ScrollView>
            </ImageBackground>       
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
});


