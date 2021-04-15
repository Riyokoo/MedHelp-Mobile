import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {Header, Left, Right, Icon} from 'native-base'


export default class Profile extends React.Component{
    
    state = {
        name : this.props.screenProps.displayName,
    }
    
    render() {
        return (
           
                <View style={styles.container}>
                
                        <Icon style = {styles.menuButton} name = "menu" onPress = {() => this.props.navigation.openDrawer()}></Icon>

                
                <View style = {styles.textMessage}>
                    <Text>Nume: {this.state.name}</Text>
                </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
    textMessage: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
    }
})