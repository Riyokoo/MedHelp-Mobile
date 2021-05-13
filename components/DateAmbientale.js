import React  from 'react';
import {View,Text,StyleSheet, TouchableWithoutFeedback ,Keyboard, Modal,TouchableOpacity, ImageBackground} from 'react-native';
import {FontAwesome} from "@expo/vector-icons";
import { ScrollView } from 'react-native-gesture-handler';

import HeaderData from '../shared/headerData';

export default class DateAmbientale extends React.Component{
    constructor(props){
        super(props);
    }
   
    render(){
        return(
            <TouchableWithoutFeedback onPress={()=>{
                Keyboard.dismiss();
                console.log("keyboard dismiss");
            }}>
            <Modal animationType="slide"  visible={this.props.visibleDateAmbientale}>                              
                <ImageBackground source={require("../assets/GREEN.png")} style={{flex:1}}>
                <HeaderData changeVisbility={this.props.changeVisbility} title="Date ambientale"/>
                
                <ScrollView style={sytles.container}>
                    <View style={sytles.header}>
                        <Text>Datele dumneavoastra ambientale</Text>
                    </View>
                </ScrollView>
               
                </ImageBackground>       
            </Modal>
            </TouchableWithoutFeedback>
        );
    };
}
const sytles = StyleSheet.create({
    container:{
        flex:1, 
                
    },
    header:{
        flex:0,       
    }

});