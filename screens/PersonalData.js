import React from 'react'
import { Text, View, StyleSheet ,TouchableOpacity , ImageBackground, Keyboard, TouchableWithoutFeedback , ScrollView} from 'react-native'
import {Header, Left, Right, Icon} from 'native-base'
import { MaterialIcons} from '@expo/vector-icons';
import {globallyStyles} from '../global/styles';

import Card from '../shared/card';

export default class PersonalData extends React.Component{
    render() {
        return (                   
          <TouchableWithoutFeedback onPress={()=>{
              Keyboard.dismiss();
          }}>
            <ImageBackground source={require("../assets/GREEN.png")} style={{flex:1}}>
                <ScrollView style={styles.container}>
                  
                    {/* aici vom salva datele introduse de catre pacient */}
                    <TouchableOpacity onPress = {() => this.props.navigation.openDrawer()} style={globallyStyles.menu} >
                        <MaterialIcons size={30} name = "menu"  />
                    </TouchableOpacity>                
                    <View style = {styles.textMessage}>
                        <Text style={{fontSize:18,textAlign:'left',color:'#333',letterSpacing:2}}>Rezultate medicale</Text>
                    </View> 
                    <View style={styles.card}>
                        <TouchableOpacity>
                            <Card>
                                <Text>text</Text>
                            </Card>                          
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card>
                                <Text>text</Text>
                            </Card>   
                        </TouchableOpacity>  
                        <TouchableOpacity>
                            <Card>
                                <Text>text</Text>
                            </Card>   
                        </TouchableOpacity> 
                        <TouchableOpacity>
                            <Card>
                                <Text>text</Text>
                            </Card>   
                        </TouchableOpacity>                                    
                    </View>
                </ScrollView>
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
        flex:1,
        flexDirection:'row',
    },  
    textMessage: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
    }

})