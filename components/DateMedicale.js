import React  from 'react';
import {View,Text,StyleSheet, TouchableWithoutFeedback ,Keyboard, Modal,TouchableOpacity, ImageBackground , FlatList} from 'react-native';
import {FontAwesome} from "@expo/vector-icons";
import { ScrollView } from 'react-native-gesture-handler';
import {ListItem , Icon} from 'react-native-elements'; 

import HeaderData from '../shared/headerData';

export default class DateMedicale extends React.Component{
    constructor(props){
        super(props);
    }
    state = {
        medicalData:[
            {title:"Tensiune arteriala",nameIcon:'heartbeat',type:'font-awesome',color:'#f50', id:"bd7acbea-c1b1-46c2-aed5"},
            {title:"Puls",nameIcon:'heartbeat',type:'font-awesome',color:'#f50',id:"3ac68afc-c605-48d3-a4f8"},
            {title:"Temperatură",nameIcon:'heartbeat',type:'font-awesome',color:'#f50',id:"58694a0f-3da1-471f-bd96"},
            {title:"Glicemie",nameIcon:'heartbeat',type:'font-awesome',color:'#f50',id:"qbaig872-0h35-rxc1-8sio"},
            {title:"Greutate",nameIcon:'heartbeat',type:'font-awesome',color:'#f50',id:"eslrpmzv-d66c-eqqo-onkc"},
            {title:"Consultatii",nameIcon:'heartbeat',type:'font-awesome',color:'#f50',id:"haq150ay-hi12-jh9j-k8ry"},
           
        ],
    }
    renderItem = ({item}) =>(
        <ListItem bottomDivider style={{marginTop:10,padding:10,backgroundColor:'green'}}>
            <Icon 
                name={item.nameIcon}
                type={item.type}
                color={item.color}
            />
            <ListItem.Content >
                <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron onPress={()=>console.log("merge")} />
        </ListItem>
    );
    render(){
        return(
            <TouchableWithoutFeedback onPress={()=>{
                Keyboard.dismiss();
                console.log("keyboard dismiss");
            }}>
            <Modal animationType="slide"  visible={this.props.visibleDateMedicale}>                              
                <ImageBackground source={require("../assets/GREEN.png")} style={{flex:1}}>
               
                <HeaderData changeVisbility={this.props.changeVisbility} title="Date medicale"/>
                <ScrollView style={sytles.container}>
                    <FlatList 
                        
                        keyExtractor={(item) =>item.id}
                        data = {this.state.medicalData} 
                        renderItem={this.renderItem}
                    />
                </ScrollView>
               
                </ImageBackground>       
            </Modal>
            </TouchableWithoutFeedback>
        );
    };
}
const sytles =StyleSheet.create({
    container:{
        flex:1, 
                
    },
   

});