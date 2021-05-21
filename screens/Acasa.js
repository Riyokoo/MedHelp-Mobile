import React from 'react';
import {View, Text,StyleSheet,ImageBackground,TouchableOpacity,Image,ScrollView,} from 'react-native';
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
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Bine ati acasa</Text>
                    </View>
                    <ScrollView style={styles.container}>
                        <View style={styles.item}>
                            <Text style={styles.titleItem} >Despre Aplicatia MedHelp - APP</Text>
                            <Text style={styles.textItem}>
                                •	Utilizatorului i se oferă servicii medicale de înaltă calitate prin intermediul  tehnologiei avansate
                               
                            </Text>
                            <Text style={styles.textItem}>
                                •	Pacientul beneficiază de consultațiile oferite de cadre medicale specilizate.
                               
                            </Text>
                            <Text style={styles.textItem}>
                                •	Aplicația oferă posibilitatea de monitorizare a stării pacienților , cât și gestionarea mai rapidă a acestora  de către cadrele medicale.	                    
                                
                            </Text>
                            <Text style={styles.textItem}>
                                •	De asemenea aplicația mai poate să anunțe persoanele / serviciile avizate in cazul unei urgențe
                            </Text>
                            
                        </View>
                        <View style={styles.item}>
                                <Text style={styles.titleItem}>Beneficiul oferit de catre sistem</Text>   
                                <Text style={styles.textItem}> In continuare vom prezenta avantajul sistemului nostru</Text>  
                                 
                                <Image source={require("../assets/health-check.png")} style={{width:100,height:100}} />
                                <Text style={styles.textItem}>Sistemul nostru monitorizeaza tensiunea arteriala,puls</Text>

                                <Image source={require("../assets/thermometer.png")} style={{width:100,height:100}} />
                                <Text style={styles.textItem}>Monitorizam temperatura corporala dar si cea ambientala</Text>

                                <Image source={require("../assets/idea.png")} style={{width:100,height:100}} />
                                <Text style={styles.textItem}>Detectarea de lumina din locuinta dumneavoastra</Text>

                                <Image source={require("../assets/humidity.png")} style={{width:100,height:100}} />
                                <Text style={styles.textItem}>Aprecierea aparatului nostru de calcul a umiditatii</Text>                      

                                <Image source={require("../assets/scale.png")} style={{width:100,height:100}} />
                                <Text style={styles.textItem}>Monitorizarea greutatii corporale</Text>  

                                <Image source={require("../assets/fire.png")} style={{width:100,height:100}} />
                                <Text style={styles.textItem}>De asemenea dorim sa fiti in siguranta, sistemul este pregatit cu sensorul de detectare gaz</Text>                      
                        </View>
                                          
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
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color:'#333',
        letterSpacing:7,
        textAlign:'center',
    },
    item:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        marginRight:5,
        borderWidth:3,
        borderBottomLeftRadius:20,
        borderRadius:50,
        marginVertical:5,
        padding:20,
        borderColor:'#2ecc71',
        backgroundColor:'#27ae60',
    },
    titleItem:{
        fontSize:18,
        padding:10,
        color:'#333',
        letterSpacing:3,
        fontWeight:'bold',
        textAlign:'center',
    },
    textItem:{
        fontSize:16,
        padding:5,
        color:'#333',
        letterSpacing:1,
        fontWeight:'200',
        textAlign:'center',
       
    },
});


