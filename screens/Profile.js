import React from 'react'
import {Text,View, StyleSheet,TouchableOpacity,ImageBackground ,ScrollView } from 'react-native'
import {Header, Left, Right, Icon} from 'native-base'
import { MaterialIcons ,Ionicons ,AntDesign ,FontAwesome} from '@expo/vector-icons';
import { globallyStyles } from '../global/styles';
import DropDownPicker from 'react-native-dropdown-picker';
import {
    Avatar,
    Title,
    Caption, 
    TouchableRipple,
  } from 'react-native-paper';

export default class Profile extends React.Component{
    state = {
        name : this.props.screenProps.displayName,
        location:'Romania',
        phone:'+40 072111314141',
        email: this.props.screenProps.email,
        sex:'M',
        cnp:'2311122222223'
    }
    
    render() {
        return (  
            <ImageBackground source={require('../assets/GREEN.png')} style={{flex:1}}>
              <ScrollView style={styles.container}> 
                              
                    <TouchableOpacity onPress = {() => this.props.navigation.openDrawer()} style={globallyStyles.menu} >
                        <MaterialIcons size={30} name = "menu"  />
                    </TouchableOpacity> 
                <View style={styles.userInfoSection}>
                  <View style={{flexDirection: 'row', marginTop: 15}}>
                        <Avatar.Image 
                            source={require("../assets/profilePicture.jpg")}
                            size={100}
                        />
                        <View style={{marginLeft: 20}}>
                            <Title style={[styles.title, {
                            marginTop:15,
                            marginBottom: 5,
                            }]}>{this.state.name}</Title>
                            
                        </View>
                    </View>
                </View>            
                <View style={styles.userInfoSection}>
                    <View style={styles.row}>
                        <Ionicons name="location-outline" size={24} color="black" />
                        <Text style={{color:"#2c3e50", marginLeft: 20,fontSize:24}}>{this.state.location}</Text>
                    </View>
                    <View style={styles.row}>
                        <AntDesign name="phone" size={24} color="black" />
                        <Text style={{color:"#2c3e50", marginLeft: 20,fontSize:24}}>{this.state.phone}</Text>
                    </View>
                    <View style={styles.row}>
                        <MaterialIcons name="alternate-email" size={24} color="black" />
                        <Text style={{color:"#2c3e50", marginLeft: 20,fontSize:24}}>{this.state.email}</Text>
                    </View>
                    <View style={styles.row}>
                        <AntDesign name="idcard" size={24} color="black" />
                        <Text style={{color:"#2c3e50", marginLeft: 20,fontSize:24}}>{this.state.cnp}</Text>
                    </View>
                    <View style={styles.row}>
                        <FontAwesome name="intersex" size={24} color="black" />
                        <Text style={{color:"#2c3e50", marginLeft: 20,fontSize:24}}>{this.state.sex}</Text>
                    </View>
                </View>
       
            <View style={styles.menuWrapper}>
                <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                    <Icon name="heart-outline" color="#FF6347" size={25}/>
                    <Text style={styles.menuItemText}>Your Favorites</Text>
                </View>
                </TouchableRipple>
               
                <TouchableRipple onPress={() => console.log("text")}>
                <View style={styles.menuItem}>
                    <Icon name="share-outline" color="#FF6347" size={25}/>
                    <Text style={styles.menuItemText}>Tell Your Friends</Text>
                </View>
                </TouchableRipple>
                  <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <Icon name="account-check-outline" color="#FF6347" size={25}/>
                        <Text style={styles.menuItemText}>Support</Text>
                    </View>
                  </TouchableRipple>
                  <TouchableRipple onPress={() => {}}>
                      <View style={styles.menuItem}>
                          <Icon name="settings-outline" color="#FF6347" size={25}/>
                          <Text style={styles.menuItemText}>Settings</Text>
                      </View>
                  </TouchableRipple>
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
      fontSize: 24,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: '500',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 10,
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