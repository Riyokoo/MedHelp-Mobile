import React from 'react';
import {View,Text,Image,ImageBackground,StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { DrawerActions} from 'react-navigation-drawer';
import {FontAwesome} from "@expo/vector-icons";
export default class HeaderData extends React.Component{
    constructor(props){
        super(props);
    }

   
    render(){
        return(
            <ImageBackground source={require('../assets/GREEN.png')} style={styles.header}>                      
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',margin:10,alignItems:'center'}}>
                <Image source={require('../assets/MedLife.png')} style={{width:40,height:40, marginLeft:10, marginRight:20}} />
                <Text style={styles.headerText}>{this.props.title}</Text>
                <TouchableOpacity  onPress = {()=>this.props.changeVisbility() }>                   
                     <FontAwesome name="window-close" size={30} color="black"  />
                 </TouchableOpacity>
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
        letterSpacing:7,
        textAlign:'center',
    },
    icon:{
        position:'absolute',
        left:16,
    },
    menuButton:{

    }
});