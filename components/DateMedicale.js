import React  from 'react';
import {View,Text,StyleSheet, TouchableWithoutFeedback ,Keyboard, Modal,TouchableOpacity, ImageBackground , FlatList} from 'react-native';
import {FontAwesome} from "@expo/vector-icons";
import { ScrollView } from 'react-native-gesture-handler';
import {ListItem , Icon} from 'react-native-elements'; 

import HeaderData from '../shared/headerData';
import { List } from 'native-base';

export default class DateMedicale extends React.Component{
    constructor(props){
        super(props);
    }
    state = {
        medicalData:[
            {title:"Tensiune arteriala",text:"Tensiunea arteriala inregistrata",value1:120,value2:80,text1:'SYS',text2:'DIA', function:(index)=>this.tensiuneArterialaPress(index),extended:false, index:0,nameIcon:'heartbeat',type:'font-awesome',color:'#c0392b', id:"bd7acbea-c1b1-46c2-aed5"},
            {title:"Puls",text:"Pulsul inregistrat",value1:97,value2:null,text1:'PUL/Min',text2:null ,function:(index) => this.pulsPress(index),extended:false,index:1,nameIcon:'md-heart-outline',type:'ionicon',color:'#c0392b',id:"3ac68afc-c605-48d3-a4f8"},
            {title:"Temperatură",text:"Temperatura corporala inregistrata",value1:36.6,value2:null,text1:'°C',text2:null,function:(index) => this.tempPress(index),extended:false,index:2,nameIcon:'thermometer-0',type:'font-awesome',color:'#f50',id:"58694a0f-3da1-471f-bd96"},
            {title:"Glicemie",text:"Glicemia inregistrata",value1:80,value2:null,text1:'mg/DL',text2:null,function:(index) => this.glicemiePress(index),extended:false,index:3,nameIcon:'water',type:'ionicon',color:'#2980b9',id:"qbaig872-0h35-rxc1-8sio"},
            {title:"Greutate",text:"Greutatea corporala  inregistrata",value1:80.8,value2:null,text1:'KG',text2:null,function:(index) => this.greutatePress(index),extended:false,index:4,nameIcon:'weight',type:'font-awesome-5',color:'#2c3e50',id:"eslrpmzv-d66c-eqqo-onkc"},
            {title:"Consultatii",text:"Data ultimei consultatii",value1:new Date().toLocaleDateString(),value2:null,text1:null,text2:null,function:(index) => this.consPress(index),extended:false,index:5,nameIcon:'clipboard',type:'ionicon',color:'#7f8c8d',id:"haq150ay-hi12-jh9j-k8ry"},          
        ],
        currentIndex:null,
        tempCorp:0,
        tensMare:0,
        tensMica:0,
        puls:0,
        greutate:0.0,
        glicemie:0,       
        temp:0, 
        umiditate:0,     
        date:new Date(),

       
    }

    tensiuneArterialaPress = (index) => {
       
        this.setState((prevState) =>({
            currentIndex:index,
            medicalData:prevState.medicalData.map(
                obj => (obj.index === index ? Object.assign(obj,{ extended:!this.state.medicalData[index].extended }) : obj)
            )
        })); 
      
    }
    pulsPress = (index) =>{
       
        this.setState((prevState) =>({
            currentIndex:index,
            medicalData:prevState.medicalData.map(
                obj => (obj.index === index ? Object.assign(obj,{ extended:!this.state.medicalData[index].extended }) : obj)
            )
        })); 
        
    }
    tempPress = (index) =>{
       
        this.setState((prevState) =>({
            currentIndex:index,
            medicalData:prevState.medicalData.map(
                obj => (obj.index === index ? Object.assign(obj,{ extended:!this.state.medicalData[index].extended }) : obj)
            )
        })); 
       
    }
    glicemiePress = (index) =>{
     
        this.setState((prevState) =>({
            currentIndex:index,
            medicalData:prevState.medicalData.map(
                obj => (obj.index === index ? Object.assign(obj,{ extended:!this.state.medicalData[index].extended }) : obj)
            )
        })); 
        
    }
    greutatePress = (index) =>{
        console.log("current index:  " + index);
        this.setState((prevState) =>({
            currentIndex:index,
            medicalData:prevState.medicalData.map(
                obj => (obj.index === index ? Object.assign(obj,{ extended:!this.state.medicalData[index].extended }) : obj)
            )
        })); 
        
    }
    consPress = (index) =>{
       
        this.setState((prevState) =>({
            currentIndex:index,
            medicalData:prevState.medicalData.map(
                obj => (obj.index === index ? Object.assign(obj,{ extended:!this.state.medicalData[index].extended }) : obj)
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
                    <Text style={styles.item}>{item.text }</Text>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <Text style={styles.textItem} >{item.value1 }</Text>
                        <Text style={[styles.textItem,{marginLeft:10}]}>{item.text1 }</Text>
                    </View>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <Text style={styles.textItem}>{item.value2 }</Text>                   
                        <Text style={[styles.textItem,{marginLeft:10}]}>{item.text2 }</Text>
                    </View>
                    
                </View>          
             ) : null }
            
        </ListItem.Accordion>          
    );
    componentDidMount(){
    
        // fetch(`http://192.168.0.183:8080/sensors/1`, {
        //     method: 'GET',
        //     headers: {
        //          Accept: 'application/json',
        //         'Content-Type': 'application/json'
        //     },
            
        //     }).then(response => response.json() )
        //     .then(response=> {
        //         let newArray = [...this.state.medicalData];
        //         newArray[0] = {...newArray[0],value1:response.bloodPressureSystolic,value2:response.bloodPressureDiastolic};
        //         newArray[1] = {...newArray[1],value1:response.pulse};
        //         newArray[2] = {...newArray[2],value1:response.bodyTemperature};
        //         newArray[3] = {...newArray[3],value1:response.glycemia};
        //         newArray[4] = {...newArray[4],value1: response.bodyWeight};
        //         newArray[5] = {...newArray[5],value1:response.date.toLocaleDateString()};
         
        //         this.setState({
        //             medicalData:newArray,
        //         })    
        //     //    this.setState({
        //     //       tensMare: ,
        //     //       tensMica: ,
        //     //       puls:,
        //     //       tempCorp: ,
        //     //       greutate:,
        //     //       glicemie: ,               
        //     //       temp:response.ambientTemperature,              
        //     //       umiditate:response.humidity,
                 
        //     //    })
        // }).catch((error) => { console.log(error)}); 
         
     
    }
    componentDidUpdate(){}
    render(){
        return(
            <TouchableWithoutFeedback onPress={()=>{
                Keyboard.dismiss();
                console.log("keyboard dismiss");
            }}>
            <Modal animationType="slide"  visible={this.props.visibleDateMedicale}>                              
                <ImageBackground source={require("../assets/GREEN.png")} style={{flex:1}}>
               
                <HeaderData changeVisbility={this.props.changeVisbility} title="Date medicale"/>
                <ScrollView style={styles.container}>                  
                        <Text style={[styles.item,{textAlign:'left',marginLeft:5,letterSpacing:1,fontSize:20,marginBottom:10,color:'#2c3e50'}]}>Puteti sa vizualizati ultimele date inregistrate:</Text>
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