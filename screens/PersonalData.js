import React from 'react'
import { Text, View, StyleSheet ,TouchableOpacity , ImageBackground, Keyboard, TouchableWithoutFeedback , ScrollView,  Image} from 'react-native'
import {Header, Left, Right, Icon} from 'native-base'
import {globallyStyles} from '../global/styles';
import { FontAwesome5 } from '@expo/vector-icons';
import {MaterialIcons ,AntDesign ,FontAwesome ,MaterialCommunityIcons ,Ionicons} from '@expo/vector-icons';
import Card from '../shared/card';

import DateMedicale from '../components/DateMedicale';
import DateAmbientale from '../components/DateAmbientale';
import DateIstoric from '../components/DateIstoric';
import DateDiagnotisc from '../components/DateDiagnostic';

export default class PersonalData extends React.Component{
    state = {
        visibleDateMedicale:false,
        visibleDateAmbientale:false,
        visibleDateIstoric:false,
        visibleDateDiagnostic:false,
        
    }
    date_medicalePress= () =>{
        console.log("Merg datele medicale");
        this.setState({
            visibleDateMedicale:!this.state.visibleDateMedicale,
        });
        console.log("visible : "+this.state.visibleDateMedicale);  
    
    }
    date_ambientalePress= () =>{
        console.log("Merg datele ambientale");
        this.setState({
            visibleDateAmbientale:!this.state.visibleDateAmbientale,
        });

    }
    diagnosticPress= () =>{
        console.log("Merge diagnosticul");
        this.setState({
            visibleDateDiagnostic:!this.state.visibleDateDiagnostic,
        });

    }
    date_istoricePress= () =>{
        console.log("Merg datele istorice");
        this.setState({
            visibleDateIstoric:!this.state.visibleDateIstoric,
        });
    }
    render() {
        return (                   
          <TouchableWithoutFeedback onPress={()=>{
              Keyboard.dismiss();
          }}>
            <ImageBackground source={require("../assets/GREEN.png")} style={{flex:1}}>
                <View style={styles.container}>
                  
                    {/* aici vom salva datele introduse de catre pacient */}
                    <TouchableOpacity onPress = {() => this.props.navigation.openDrawer()} style={globallyStyles.menu} >
                        <MaterialIcons size={30} name = "menu"  />
                    </TouchableOpacity>                
                    <View style = {styles.textMessage}>
                        <Text style={{fontSize:18,textAlign:'left',color:'#333',letterSpacing:2}}>Rezultate medicale</Text>
                    </View> 
                    <ScrollView style={styles.card}>                       
                            <Card>
                                <DateMedicale visibleDateMedicale={this.state.visibleDateMedicale} changeVisbility={()=> this.date_medicalePress() } />       
                                <Text style={styles.text}>Date medicale</Text>
                                <TouchableOpacity onPress={() =>this.date_medicalePress()}>                                   
                                    <Image source={require("../assets/medical_dates.png")}  style={{ width: 120,height:120,marginLeft:20}} />
                                </TouchableOpacity>                        
                                <View style={{flex:0,flexDirection:'row',marginLeft:-40, justifyContent:'space-between'}}>
                                    <MaterialCommunityIcons name="temperature-celsius" size={24} color="black"  />
                                    <FontAwesome name="heartbeat" size={24} color="#d63031" />
                                    <MaterialCommunityIcons name="weight-kilogram" size={24} color="black" />
                                    <Ionicons name="water" size={24} color="#2980b9"/>
                                    
                                </View>                             
                            </Card>                                                               
                            <Card>
                                <DateAmbientale visibleDateAmbientale={this.state.visibleDateAmbientale} changeVisbility={()=> this.date_ambientalePress()} />
                                <Text style={styles.text}>Date ambientale</Text>
                                <TouchableOpacity onPress={() =>this.date_ambientalePress()}>
                                    <Image source={require("../assets/growth.png")}  style={{ width: 120,height:120,marginLeft:20}} />
                                </TouchableOpacity>                        
                                <View style={{flex:0,flexDirection:'row',marginLeft:-40, justifyContent:'space-between'}}>
                                    <MaterialCommunityIcons name="temperature-celsius" size={24} color="black"  />
                                    <Ionicons name="water" size={24} color="#2980b9"/>
                                    <FontAwesome name="fire" size={24} color="#d35400" />
                                    <MaterialIcons name="house" size={24} color="#c0392b" />   
                                    
                                </View> 
                            </Card>                                                  
                            <Card>  
                                <DateDiagnotisc visibleDateDiagnostic={this.state.visibleDateDiagnostic} changeVisbility={() => this.diagnosticPress()} />
                                <Text style={styles.text}>Vezi diagnostic</Text>
                                <TouchableOpacity  onPress={() =>this.diagnosticPress()}>
                                    <Image source={require("../assets/medical_.png")}  style={{ width: 130,height:120,marginLeft:20}} />
                                </TouchableOpacity>                        
                               
                            </Card>                                                 
                            <Card>
                                <DateIstoric visibleDateIstoric={this.state.visibleDateIstoric} changeVisbility={() =>this.date_istoricePress() }/>
                                <Text style={styles.text}>Vezi istoric date</Text>
                                <TouchableOpacity  onPress={() =>this.date_istoricePress()}>
                                    <Image source={require("../assets/clock.png")}  style={{ width: 120,height:120,marginLeft:20}} />
                                </TouchableOpacity> 
                            </Card>                                                             
                    </ScrollView>
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
    card:{
        flex:0,  
        padding:10,
        marginVertical:10,
    },  
    textMessage: {
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
       
    },
    text:{
        fontSize:20,
        marginBottom:10,
        color:'#333',
        letterSpacing:3,
    }

})