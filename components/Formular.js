import React, { Children } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Modal, Keyboard, ScrollView, Touchable,Alert } from 'react-native';
import { Icon, Left } from 'native-base'
import {FontAwesome} from "@expo/vector-icons"
import { TextInput } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import firestore from '@react-native-firebase/firestore';
import { cos } from 'react-native-reanimated';

import HeaderData from '../shared/headerData';

export default class Formular extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            accept: false,
        }
    }
    trimiteFormular = () =>{

        //aici vom face si post in tabele
        Alert.alert(
            "Trimitere formular",
            "Formularul dvs a fost trimis cu succes!",
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
    }

render(){
    return(
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
            console.log("keyboard dismiss");
        }}>
        <Modal animationType="slide"  visible={this.props.visible}>

            <HeaderData  changeVisbility ={this.props.SchimbaVizibilitate} title="Formular nou"/>        
           
            <View style = {styles.formular}>
                
                <TextInput style = {styles.numeInput} placeholder = "Nume"></TextInput>               
                <TextInput style = {styles.prenumeInput} placeholder = "Prenume"></TextInput>
    
                <TextInput
                    multiline={true}
                    numberOfLines={10}
                    style={styles.problemaInput}
                    placeholder="Ce problema aveti ?">

                 </TextInput>
                
                
            </View> 
    
            <TouchableOpacity style = {styles.TrimiteFormular} onPress = {()=>this.trimiteFormular()}>
                <Text style = {{alignSelf:'center', color:"#FFFFFF", padding:10}}>Trimitere formular</Text>
            </TouchableOpacity>
            
        </Modal>
        </TouchableWithoutFeedback>
    );
}   
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
    },
    sentence: {
        alignSelf: 'center',
        fontWeight:"800",
        
    },
    header: {
        marginTop:200,
    },
    titlu: {
        textAlign: 'center',
        marginTop:50,
        fontSize:30,
    },
    buttonContainer: {
        alignSelf: 'center',
        marginTop: 100,
        backgroundColor: "#12B0C4",
        borderRadius: 6,
        width: 170,
        height:40,
    },
    formular: {
        alignItems: 'center',
        marginTop:100,
    },
    numeInput: {
        borderWidth: 0,
        height: 40,
        width: 250,
        paddingHorizontal: 10,
        marginBottom:20,
        borderBottomWidth: 2,
        borderBottomColor:"#A9A9A9",
    },
    prenumeInput: {
        borderWidth: 0,
        height: 40,
        width: 250,
        paddingHorizontal: 10,
        marginBottom:20,
        borderBottomWidth: 2,
        borderBottomColor:"#A9A9A9",
    },
    problemaInput: {
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#A9A9A9',
        marginTop: 50,
        textAlignVertical: 'top',
        width: 300,
        paddingTop: 10,
        paddingHorizontal:10,
    },
    TrimiteFormular: {
         alignSelf: 'center',
        marginTop: 100,
        backgroundColor: "#12B0C4",
        borderRadius: 6,
        width: 170,
        height:40,
    }
})