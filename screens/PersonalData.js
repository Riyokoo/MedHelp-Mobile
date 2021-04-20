import React from 'react'
import { Text, View, StyleSheet ,TouchableOpacity} from 'react-native'
import {Header, Left, Right, Icon} from 'native-base'
import { MaterialIcons} from '@expo/vector-icons';
import {globallyStyles} from '../global/styles';


export default class PersonalData extends React.Component{
    render() {
        return (           
                <View style={styles.container}>

                 <TouchableOpacity onPress = {() => this.props.navigation.openDrawer()} style={globallyStyles.menu} >
                    <MaterialIcons size={30} name = "menu"  />
                 </TouchableOpacity>                
                <View style = {styles.textMessage}>
                    <Text>Date personale</Text>
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