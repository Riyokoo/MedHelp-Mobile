import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Button } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { DrawerNavigator,} from 'react-navigation'
import { DrawerActions } from 'react-navigation-drawer'
import {Icon,Left,Right,} from 'native-base'


export default class Screen extends React.Component{
    
    render() {
        return (
            <View styles = {styles.container}>
                <SafeAreaView style = {{flex:1}}>
                    <TouchableOpacity style = {{alignItems:"flex-end", margin:16}} onPress = {this.props.navigation.openDrawer()} >
                     <Feather name="menu" size={24} color="black" />
                    <Left>
                        <Icon name = "menu" onPress = {() => this.props.navigation.openDrawer()}></Icon>
                    </Left>
                    
                    </TouchableOpacity>

                    <View style = {{flex:1, alignItems:'center', justifyContent:"center"}}>
                        <Text style={styles.text}>{this.props.name}</Text>
                    </View>

                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#FFF"
    },
    text: {
        color: "#161924",
        fontSize: 20,
      fontWeight:"500",
    },
})