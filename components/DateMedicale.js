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
            {title:"Tensiune arteriala", function:(index)=>this.tensiuneArterialaPress(index),extended:false, index:0,nameIcon:'heartbeat',type:'font-awesome',color:'#c0392b', id:"bd7acbea-c1b1-46c2-aed5"},
            {title:"Puls",function:(index) => this.pulsPress(index),extended:false,index:1,nameIcon:'md-heart-outline',type:'ionicon',color:'#c0392b',id:"3ac68afc-c605-48d3-a4f8"},
            {title:"Temperatură",function:(index) => this.tempPress(index),extended:false,index:2,nameIcon:'thermometer-0',type:'font-awesome',color:'#f50',id:"58694a0f-3da1-471f-bd96"},
            {title:"Glicemie",function:(index) => this.glicemiePress(index),extended:false,index:3,nameIcon:'water',type:'ionicon',color:'#2980b9',id:"qbaig872-0h35-rxc1-8sio"},
            {title:"Greutate",function:(index) => this.greutatePress(index),extended:false,index:4,nameIcon:'weight',type:'font-awesome-5',color:'#2c3e50',id:"eslrpmzv-d66c-eqqo-onkc"},
            {title:"Consultatii",function:(index) => this.consPress(index),extended:false,index:5,nameIcon:'clipboard',type:'ionicon',color:'#7f8c8d',id:"haq150ay-hi12-jh9j-k8ry"},          
        ],
        currentIndex:null,
        extended:false,
    }

    tensiuneArterialaPress = (index) => {
        console.log("current index:  " + index);
        this.setState((prevState) =>{
            return{
                currentIndex:index,
                extended:!this.state.extended,
            }
   
        });       
       
    }
    pulsPress = (index) =>{
        console.log("current index:  " + index);
        this.setState({
            currentIndex:index,
            extended:!this.state.extended,
        });
        
    }
    tempPress = (index) =>{
        console.log("current index:  " + index);
        this.setState({
            currentIndex:index,
            extended:!this.state.extended,
        });
       
    }
    glicemiePress = (index) =>{
        console.log("current index:  " + index);
        this.setState({
            currentIndex:index,
            extended:!this.state.extended,
        });
        
    }
    greutatePress = (index) =>{
        console.log("current index:  " + index);
        this.setState({
            currentIndex:index,
            extended:!this.state.extended,
        });
        
    }
    consPress = (index) =>{
        console.log("current index:  " + index);
        this.setState({
            currentIndex:index,
            extended:!this.state.extended,
        });
        
    }
    
    renderItem = (item,index) =>(
        <ListItem.Accordion
            containerStyle={{backgroundColor:'#27ae60'}}  
            bottomDivider 
            content={
                <>
                    <Icon
                    name={item.nameIcon}
                    type={item.type}
                    color={item.color}
                    style={{marginRight:12}}
                    />
                    <ListItem.Content >
                        <ListItem.Title>{item.title}</ListItem.Title>     
                    </ListItem.Content>
                </>
            }
            onPress = {() => item.function(index) }
            isExpanded={index === this.state.currentIndex ? this.state.extended : false}
            style={{marginTop:5,padding:5,flex:1}} >
             {index === this.state.currentIndex ? (
                <ListItem style={{marginTop:0,padding:0,flex:1}}>
                    <ListItem.Content>

                    </ListItem.Content>
                </ListItem>
            ) : null }
            
        </ListItem.Accordion>
    );

    /**
     *  <Icon
                name={item.nameIcon}
                type={item.type}
                color={item.color}
            />
            <ListItem.Content >
                <ListItem.Title>{item.title}</ListItem.Title>
                <ListItem.Subtitle>
                {index === this.state.currentIndex ? (
                <View style={{flex:1,flexDirection:'row'}}>
                    <Text>ceva</Text>
                    <Text>ceva</Text>
                    <Text>ceva</Text>
                    <Text>ceva</Text>
                </View>
            ) : null }
                </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron    />
     */
    onViewableItemsChanged = ({ viewableItems, changed }) => {
        console.log("Visible items are", viewableItems[0].index);
        console.log("Changed in this iteration", changed);
    }
   
    componentDidUpdate(){

        console.log("update");      
        console.log("current :"+ this.state.currentIndex); 
    }
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
                        renderItem={( {item , index} ) => this.renderItem(item,index)}
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