import React, { Children } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Modal, Keyboard, ScrollView, Touchable ,ImageBackground } from 'react-native';
import { Icon, Left } from 'native-base'
import {FontAwesome} from "@expo/vector-icons"
import { TextInput } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import firestore from '@react-native-firebase/firestore';
import {MaterialIcons} from '@expo/vector-icons';
import Formular from '../components/Formular';

import { globallyStyles } from '../global/styles';

/*
const DismissKeyboard = ({ children }) => (
 
    <TouchableWithoutFeedback onPress = {Keyboard.dismiss} accessible={false}>
        {children}
    </TouchableWithoutFeedback>
)
*/

export default class AvetiVreoProblema extends React.Component {


    state = {

        visible: false,
        nume: "",
        prenume: "",
        problema:"",
    }

    //usersCollection = firestore().collection('Users');

    SchimbaVizibilitate = () => {
        this.setState({ visible: !this.state.visible });
    };

    
    TrimiteFormular = () => {
        
        // firestore()
        //     .collection('users')
        //     .add({
        //         name: "Andrei",
        //         age:30,
        //     })

    }
    

    render() {           

        return (    
            <TouchableWithoutFeedback onPress={()=>{
                Keyboard.dismiss();
                console.log("keyboard dismiss");
            }}>  
            <ImageBackground source={require("../assets/GREEN.png")} style={{flex:1}}>
                <View style = {styles.container}> 
                    <Formular visible ={this.state.visible}  SchimbaVizibilitate={() => this.SchimbaVizibilitate() } TrimiteFormular={this.TrimiteFormular}/>                                                             
                    <TouchableOpacity onPress = {() => this.props.navigation.openDrawer()} style={globallyStyles.menu} >
                        <MaterialIcons size={30} name = "menu"  />
                    </TouchableOpacity>                
                    <View style = {styles.header}>
                        <Text style ={styles.sentence}>Aveti vreo problema legata de sanatate ?</Text>
                        <Text style ={styles.sentence} >Va rugam sa completati formularul de mai jos</Text>
                    </View>
                
                    <TouchableOpacity style = {styles.buttonContainer} onPress = {() => this.SchimbaVizibilitate()}>
                         <Text style = {{alignSelf:'center', color:'#FFFFFF', paddingTop:10,}}>Solicita formular</Text>
                    </TouchableOpacity>                                     
                </View>
            </ImageBackground>
            </TouchableWithoutFeedback>              
        )

    }
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
    },
    sentence: {
        textAlign: 'center',
        fontWeight:"800",
        color:'#333',
        fontSize:16,
        letterSpacing:2,
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