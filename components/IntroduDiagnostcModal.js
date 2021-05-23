import React from 'react';
import {ImageBackground,Modal,View,Text,Button,ScrollView, StyleSheet,TextInput } from 'react-native';
import HeaderData from '../shared/headerData';

export default class IntroduDiagnosticModal extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
        toggleIntroduDiagnostc:true,
    }
    }

    render() {
        return (
             <Modal animationType="slide" visible={this.props.showModal}  >                              
                    <ImageBackground source={require("../assets/GREEN.png")} style={{flex:1}}>
                   
                    <HeaderData changeVisbility={this.props.SchimbaVizibilitate} title="Introdu diagnostic"/>
                    <ScrollView style={styles.container}>                  
                            <Text style={[styles.item,{textAlign:'left',marginLeft:5,letterSpacing:1,fontSize:20,marginBottom:10,color:'#2c3e50'}]}>Puteti sa vizualizati diagnosticul prescris:</Text>
                            <View style={styles.items}  >
                                <TextInput placeholder = "Nume pacient" ></TextInput>
                                <Text style={styles.textItem}> </Text>
                                
                            </View> 
                            <View style={styles.items}  >
                                <Text style={styles.textItem}>Data diagnostic</Text>
                                <Text style={styles.textItem}> </Text>
                                
                            </View>   
                            <View style={[styles.items,{flexDirection:'column'}]}>
                                <Text style={styles.textItem}> Diagnosticul prescris </Text>
                                <Text style={styles.textItem}></Text>
                            </View>  
                            <View style={[styles.items,{flexDirection:'column'}]}>
                                <Text style={styles.textItem}> Observatii </Text>
                                <Text style={styles.textItem}></Text>
                            </View>  
                            <View  style={[styles.items,{flexDirection:'row',justifyContent:'space-around',marginRight:10}]}>
                                {/* <Button title="Refuz" color={"#c0392b"} onPress={()=>this.refuzDiagnostic()} /> */}
                                <Text style={styles.textItem}>Acceptare diagnostic</Text>
                                <Button title="Trimite diagnostic" color={"#16a085"} onPress = {() => this.props.SchimbaVizibilitate()} />
                            </View>  
                              
                    </ScrollView>              
                    </ImageBackground>       
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        marginTop:20,        
    },
    items:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginRight:5,
        borderWidth:3,
        borderRadius:50,
        marginVertical:5,
        padding:20,
        borderColor:'#2ecc71',
        backgroundColor:'#27ae60',
    },  
    listContainer:{
        flex:0,
        alignItems:'center',
        justifyContent:'center',
        
    },
    titleItem:{
        fontSize:20,
        color:'#2c3e50',
        letterSpacing:3,
        fontWeight:'300',
        textAlign:'center',
    },
    item:{
        fontSize:20,
        letterSpacing:2,
        textAlign:'center',
        color:'#2c3e50',
        
    },
    textItem:{
        fontSize:16,
        color:'#2c3e50',
        letterSpacing:2,
        fontWeight: '200',
        padding:0,
    },
});