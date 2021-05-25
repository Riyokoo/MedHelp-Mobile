import React from 'react'
import {Text,View, StyleSheet,TouchableOpacity,TouchableNativeFeedback,ImageBackground ,ScrollView,Image,} from 'react-native'
import { MaterialIcons ,Ionicons ,AntDesign ,FontAwesome,Fontisto,MaterialCommunityIcons } from '@expo/vector-icons';
import { globallyStyles } from '../global/styles';
import axios from 'axios';
import { Picker, Subtitle } from 'native-base';
// import {Picker} from '@react-native-community/picker';
import {Avatar,Title} from 'react-native-paper';


export default class ProfileDoctor extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : this.props.screenProps.displayName +" "+this.props.screenProps.displayPrenume,
            location:'Str. Lalelelor Nr12',
            phone:'0256123123',
            email: this.props.screenProps.email,
            varsta:'',
            data_nasterii:'',
            specializare:'plamani',
            experienta:'',
            nrparafa:'232323',
            pacienti:[
                {label:'Emanuel Caprariu',value:'Emanuel Caprariu'},
                {label:'Me gusta bueno',value:'Me gusta bueno'},
                {label:'George Washington',value:'George Washington'},
                {label:'Vasi Ovidiu',value:'Vasi Ovidiu'},
                {label:'Pablo Escobar',value:'Pablo Escobar'},
            ],
            numePacient:null,
           
            
        };

       
    }
   
   
    //in functie de mailul de la login
    // in functie de numele de la login
    componentDidMount(){
        fetch(`http://192.168.0.183:8080/doctors/${this.state.email}`, {
            method: 'GET',
            headers: {
                 Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            
        }).then(response => response.json() )
            .then(response=> {
               this.setState({
                  nrparafa:response.sealNumber, 
                  data_nasterii:response.birthDate,
                  location:response.officeAddress,
                  phone:response.phone,
                  specializare:response.specialization,
                  varsta:response.age,
                  experienta:response.experience
                  
               })
        }).catch((error) => { console.log(error)});      
        /**
         *  "sealNumber":"2412XXXX",
            "officeAddress":"Strada George Enescu",
            "experience":"5",
            "specialization":"Pediatrie",
            "age":"44",
            "birthDate":"1977-03-03",
            "phone":"0723723132"
         */
    }
    addPhoto = () =>{

    }
   
    render() {
        
        return (  
            <ImageBackground source={require('../assets/GREEN.png')} style={{flex:1}}>
              <ScrollView style={styles.container}> 
                              
                    <TouchableOpacity onPress = {() => this.props.navigation.openDrawer()} style={globallyStyles.menu} >
                        <MaterialIcons size={30} name = "menu"  />
                    </TouchableOpacity> 
                <View style={styles.userInfoSection}>
                  <View style={{flexDirection: 'row', marginTop: 15,marginLeft:-20}}>
                        <Avatar.Image 
                            source={require("../assets/profilePicture.jpg")}                       
                            size={100}
                        />
                                     
                        <View style={{marginLeft: 20}}>
                            <Title style={[styles.title, {marginTop:15,marginBottom: 5,}]}>
                                Dr. {this.state.name}
                            </Title>
                            <Subtitle style={{color:"#2c3e50",fontSize:16, color:'#333',}} >Specializare: { this.state.specializare}</Subtitle>
                        </View>
                    </View>
                </View>            
                    <View style={styles.userInfoSection}>
                        <View style={styles.row}>
                            <Ionicons name="location-outline" size={24} color="black" />
                            <Text style={{fontSize:16,marginLeft:0,color:'#333',fontWeight:'300'}} >Adresa cabinet</Text>
                            <Text style={{color:"#2c3e50", marginLeft: 3,fontSize:16}}>{this.state.location}</Text>
                        </View>
                        <View style={styles.row}>
                            <AntDesign name="phone" size={24} color="black" />
                            <Text style={{fontSize:20,marginLeft:10,color:'#333',fontWeight:'300'}} >Telefon</Text>
                            <Text style={{color:"#2c3e50", marginLeft: 20,fontSize:20}}>{this.state.phone}</Text>
                        </View>
                        <View style={styles.row}>
                            <MaterialIcons name="alternate-email" size={24} color="black" />
                            <Text style={{fontSize:20,marginLeft:10,color:'#333',fontWeight:'300'}} >Email</Text>
                            <Text style={{color:"#2c3e50", marginLeft: 20,fontSize:20}}>{this.state.email}</Text>
                        </View>
                        <View style={styles.row}>
                            <FontAwesome name="birthday-cake" size={24} color="#9b59b6" />
                            <Text style={{fontSize:20,marginLeft:10,color:'#333',fontWeight:'300'}} >Data nasterii</Text>
                            <Text style={{color:"#2c3e50", marginLeft: 20,fontSize:20}}>{this.state.data_nasterii}</Text>
                        </View>
                        <View style={styles.row}>
                            <MaterialCommunityIcons name="calendar-today" size={24} color="black" />
                            <Text style={{fontSize:20,marginLeft:10,color:'#333',fontWeight:'300'}} >Varsta</Text>
                            <Text style={{color:"#2c3e50", marginLeft: 20,fontSize:20}}>{this.state.varsta}</Text>
                        </View>
                        <View style={styles.row}>
                            <AntDesign name="idcard" size={24} color="black" />
                            <Text style={{fontSize:20,marginLeft:10,color:'#333',fontWeight:'300'}} >NR PARAFA</Text>
                            <Text style={{color:"#2c3e50", marginLeft: 20,fontSize:20}}>{this.state.nrparafa}</Text>
                        </View>
                        <View style={styles.row}>
                            <FontAwesome name="intersex" size={24} color="black" />
                            <Text style={{fontSize:20,marginLeft:10,color:'#333',fontWeight:'300'}} >Experienta</Text>
                            <Text style={{color:"#2c3e50", marginLeft: 20,fontSize:20}}>{this.state.experienta}</Text>
                        </View>
                        {/* <View style={styles.row}>
                            
                                <Fontisto name="doctor" size={24} color="black" />
                                <Text style={{fontSize:20,marginLeft:10,color:'#333',fontWeight:'300'}} >Lista cu pacienti</Text>                         
                                <Picker                              
                                    selectedValue={this.state.numePacient}
                                    onValueChange={(itemValue, itemIndex) =>
                                            this.setState({
                                                numePacient:itemValue
                                            })
                                    }                                  
                                    mode={"dropdown"}                                  
                                    style={{height: 60, width: 200,color:'#21311F', backgroundColor:'#27ae60',borderColor:'red',borderWidth:1}}
                                    >
                                        
                                    {this.state.pacienti.map((item,index)=>(
                                        <Picker.Item label={item.label} value={item.value} />
                                    ))}
                                </Picker>
                        </View> */}
                       
                    </View>
        
                <View style={styles.menuWrapper}>
              
                </View>
                </ScrollView>
            </ImageBackground>                             
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    container2:{
        flex:1,
        padding:20,
    },
    userInfoSection: {
      paddingHorizontal: 30,
      marginBottom: 25,
    },
    title: {
      color:'#333',
      fontSize: 20,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: '500',
    },
    row: {
      flex:1,
      flexDirection: 'row',
      marginBottom: 10,
      // justifyContent:'space-between',
      alignItems:'center',
    },
    infoBoxWrapper: {
      borderBottomColor: '#dddddd',
      borderBottomWidth: 1,
      borderTopColor: '#dddddd',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 100,
    },
    infoBox: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuWrapper: {
      marginTop: 10,
    },
    menuItem: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    menuItemText: {
      color: '#000',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26,
    },
  });