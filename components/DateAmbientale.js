import React  from 'react';
import {View,Text,StyleSheet, TouchableWithoutFeedback ,Keyboard, Modal,TouchableOpacity, ImageBackground , FlatList} from 'react-native';
import {FontAwesome} from "@expo/vector-icons";
import { ScrollView } from 'react-native-gesture-handler';
import {ListItem , Icon} from 'react-native-elements'; 

import HeaderData from '../shared/headerData';
import { List } from 'native-base';

export default class DateAmbientale extends React.Component{
    constructor(props){
        super(props);
    }
    state = {
        ambientalData:[
            {title:"Umiditate",values:{text:"Umiditatea inregistrata",value1:76,value2:null,text1:'%',text2:null}, function:(index)=>this.umiditatePress(index),extended:false, index:0,nameIcon:'cloud-rain',type:'font-awesome-5',color:'#2980b9', id:"bd7acbea-c1b1-46c2-2222"},
            {title:"Temperatura",values:{text:"Temperatura ambientala inregistrata",value1:20.2,value2:null,text1:'°C',text2:null} ,function:(index) => this.tempPress(index),extended:false,index:1,nameIcon:'temperature-high',type:'font-awesome-5',color:'#ecf0f1',id:"3ac68afc-c605-48d3-2223"},
            {title:"Detectare gaz",values: {text:"Detectare gaz",value1:"NU",value2:null,text1:'-nu a fost detectat gaz!!!',text2:null},function:(index) => this.gazPress(index),extended:false,index:2,nameIcon:'fire',type:'font-awesome',color:'#e74c3c',id:"58694a0f-3da1-471f-2224"},
            {title:"Detectare prezenta",values: {text:"Detectare prezenta",value1:"DA",value2:null,text1:'-suneti in siguranta acasa!',text2:null,},function:(index) => this.prezentaPress(index),extended:false,index:3,nameIcon:'house-user',type:'font-awesome-5',color:'#9b59b6',id:"qbaig872-0h35-rxc1-2225"},
           
        ],
        currentIndex:null,
       
    }

    umiditatePress = (index) => {
        console.log("current index:  " + index);     
        this.setState((prevState) =>({
            currentIndex:index,
            ambientalData:prevState.ambientalData.map(
                obj => (obj.index === index ? Object.assign(obj,{ extended:!this.state.ambientalData[index].extended }) : obj)
            )
        })); 
       console.log(this.state.ambientalData[index].extended)
    }
    tempPress = (index) =>{
        console.log("current index:  " + index);
        this.setState((prevState) =>({
            currentIndex:index,
            ambientalData:prevState.ambientalData.map(
                obj => (obj.index === index ? Object.assign(obj,{ extended:!this.state.ambientalData[index].extended }) : obj)
            )
        })); 
        
    }
    gazPress = (index) =>{
        console.log("current index:  " + index);
        this.setState((prevState) =>({
            currentIndex:index,
            ambientalData:prevState.ambientalData.map(
                obj => (obj.index === index ? Object.assign(obj,{ extended:!this.state.ambientalData[index].extended }) : obj)
            )
        })); 
       
    }
    prezentaPress = (index) =>{
        console.log("current index:  " + index);
        this.setState((prevState) =>({
            currentIndex:index,
            ambientalData:prevState.ambientalData.map(
                obj => (obj.index === index ? Object.assign(obj,{ extended:!this.state.ambientalData[index].extended }) : obj)
            )
        })); 
        
    }
  
    renderItem = (item,index) =>(  
        <ListItem.Accordion          
            containerStyle={{backgroundColor:'#27ae60',borderColor:'#22e60'}}  
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
                        <ListItem.Title style={styles.titleItem}>{item.title}</ListItem.Title>     
                    </ListItem.Content>
                </>
            }
            onPress = {() => item.function(index) }
            isExpanded={index === this.state.currentIndex ? item.extended : false}
            style={{marginTop:5,padding:5,flex:1}} >
             {index === this.state.currentIndex ? (                            
                <View style={{flexGrow:1,flexDirection:'column',height:100,backgroundColor:'#27ae60',marginLeft:5,marginRight:5}}>
                    <Text style={styles.item}>{item.values.text }</Text>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <Text style={styles.textItem} >{item.values.value1 }</Text>
                        <Text style={[styles.textItem,{marginLeft:10}]}>{item.values.text1 }</Text>
                    </View>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <Text style={styles.textItem}>{item.values.value2 }</Text>                   
                        <Text style={[styles.textItem,{marginLeft:10}]}>{item.values.text2 }</Text>
                    </View>
                    
                </View>          
             ) : null }
            
        </ListItem.Accordion>          
    );

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
            <Modal animationType="slide"  visible={this.props.visibleDateAmbientale}>                              
                <ImageBackground source={require("../assets/GREEN.png")} style={{flex:1}}>
               
                <HeaderData changeVisbility={this.props.changeVisbility} title="Date ambientale"/>
                <ScrollView style={styles.container}>                  
                        <Text style={[styles.item,{textAlign:'left',marginLeft:5,letterSpacing:1,fontSize:20,marginBottom:10,color:'#2c3e50'}]}>Puteti sa vizualizati ultimele date inregistrate:</Text>
                        <FlatList                      
                            keyExtractor={(item) =>item.id}
                            data = {this.state.ambientalData} 
                            renderItem={( {item , index} ) => this.renderItem(item,index)}
                        />            
                </ScrollView>              
                </ImageBackground>       
            </Modal>
            </TouchableWithoutFeedback>
        );
    };
}
const styles =StyleSheet.create({
    container:{
        flex:1, 
        marginTop:20,        
    },
    listContainer:{
        flex:0,
        alignItems:'center',
        justifyContent:'center',
        
    },
    titleItem:{
        fontSize:20,
        color:'#2c3e50',
        letterSpacing:3,
        fontWeight:'300',
        textAlign:'center',
    },
    item:{
        fontSize:20,
        letterSpacing:2,
        textAlign:'center',
        color:'#2c3e50',
        
    },
    textItem:{
        fontSize:16,
        color:'#2c3e50',
        letterSpacing:2,
        fontWeight:'200',
    },

});