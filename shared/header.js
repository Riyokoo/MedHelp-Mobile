import React from 'react';
import {View,Text,Image,ImageBackground,StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { DrawerActions} from 'react-navigation-drawer';

export default class Header extends React.Component{
    constructor(props){
        super(props);
    }

   
    render(){
        return(
            <ImageBackground source={require('../assets/GREEN.png')} style={styles.header}>  
            {/* <TouchableOpacity onPress = {() => this.props.navigation.openDrawer()}>
                 <MaterialIcons size={30} name = "menu"  />
            </TouchableOpacity> */}
           
            <View style={{flex:1,flexDirection:'row',justifyContent:'center',margin:10}}>
                <Image source={require('../assets/MedLife.png')} style={{width:30,height:30,marginRight:10}} />
                <Text style={styles.headerText}>{this.props.title}</Text>
            </View>
        </ImageBackground >
        );
    }  
};

const styles = StyleSheet.create({
    header:{
        margin:0,
        left:-20,
        width:450,
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#718093',
    },
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color:'#FFF',
        letterSpacing:5,
        textAlign:'center',
    },
    icon:{
        position:'absolute',
        left:16,
    },
    menuButton:{

    }
});