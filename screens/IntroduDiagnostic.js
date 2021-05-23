import React from 'react';
import {View,Button,Alert,ScrollView,StyleSheet,Text,TouchableWithoutFeedback,ImageBackground,Modal,TextInput, Platform,TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import HeaderData from '../shared/headerData';
import { MaterialIcons, } from '@expo/vector-icons';
import { globallyStyles } from '../global/styles';
import IntroduDiagnosticModal from '../components/IntroduDiagnostcModal'
export default class IntroduDiagnostic extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            toggleModal:false,
        }
    };

    SchimbaVizibilitate() {
        this.setState({toggleModal:!this.state.toggleModal})
    }

    render() {
        return(

            <ImageBackground source = {require("../assets/GREEN.png")} style={{flex:1}}>
                 <TouchableOpacity onPress = {() => this.props.navigation.openDrawer()} style={globallyStyles.menu} >
                            <MaterialIcons size={30} name = "menu"  />
                </TouchableOpacity>

                <IntroduDiagnosticModal showModal = {this.state.toggleModal} SchimbaVizibilitate={() => { this.SchimbaVizibilitate() }}></IntroduDiagnosticModal>
                
                <View style = {{flex:1}}>
                    <Text style={styles.sentence}>Aici puteti introduce un nou diagnostic pentru unul din pacientii dumneavoastra</Text>
                    
                     <TouchableOpacity style = {styles.buttonContainer} onPress = {() => this.SchimbaVizibilitate()}>
                         <Text style = {{alignSelf:'center', color:'#FFFFFF', paddingTop:10,}}>Creeaza nou diagnostic</Text>
                    </TouchableOpacity>    

                </View>

            </ImageBackground>
          
            
        )
    }
}

const styles = StyleSheet.create({
    sentence: {
        alignSelf: 'center',
        fontWeight: "800",
        marginTop: 50,
        textAlign: 'left',
        marginLeft:30,
        
        
    },
     buttonContainer: {
        alignSelf: 'center',
        marginTop: 100,
        backgroundColor: "#12B0C4",
        borderRadius: 6,
        width: 170,
        height:40,
    },
})

