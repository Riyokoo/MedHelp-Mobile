import React  from 'react';
import {View,Button,ScrollView,StyleSheet,Text,TouchableWithoutFeedback,ImageBackground,Modal,TextInput, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import HeaderData from '../shared/headerData';

export default class DateDiagnotisc extends React.Component {
        constructor(props){
            super(props);
        };
        state = {
            diagnotisc:"Some text here from DATABASE",
            date:new Date(2020, 2, 28),
            mode:'date',
            show:false,

        }
        onChange = (event,selectedDate) =>{
            const currentDate = selectedDate || date;
            console.log(selectedDate.toLocaleString());
            this.setState({
                mode:Platform.OS === 'android',
                date:currentDate,
            });
        }
        showMode = (currentMode) =>{
            this.setState({
                show:true,
                mode:currentMode,
            });
        };
        showDatepicker = () => {
            this.showMode('date');
        };

        showTimePicker = () =>{
            this.showMode('time');
        };

        render = () =>{
            return (
                <TouchableWithoutFeedback onPress={()=>{
                    Keyboard.dismiss();
                    console.log("keyboard dismiss");
                }}>
                <Modal animationType="slide"  visible={this.props.visibleDateDiagnostic}>                              
                    <ImageBackground source={require("../assets/GREEN.png")} style={{flex:1}}>
                   
                    <HeaderData changeVisbility={this.props.changeVisbility} title="Vezi diagnostic"/>
                    <ScrollView style={styles.container}>                  
                            <Text style={[styles.item,{textAlign:'left',marginLeft:5,letterSpacing:1,fontSize:20,marginBottom:10,color:'#2c3e50'}]}>Puteti sa vizualizati diagnosticul prescris:</Text>
                            <View style={styles.items}  >
                                <Text style={styles.textItem}>Data diagnostic</Text>
                                <Text style={styles.textItem}>{this.state.date.getDay() + "/" + this.state.date.getMonth() + "/" + this.state.date.getFullYear()} </Text>
                                
                            </View>   
                            <View style={[styles.items,{flexDirection:'column'}]}>
                                <Text style={styles.textItem}> Diagnosticul prescris </Text>
                                <Text style={styles.textItem}>{this.state.diagnotisc}</Text>
                            </View>       
                    </ScrollView>              
                    </ImageBackground>       
                </Modal>
                </TouchableWithoutFeedback>
            );
        }

};

const styles = StyleSheet.create({
    container:{
        flex:1, 
        marginTop:20,        
    },
    items:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginRight:5,
        borderWidth:3,
        borderRadius:100,
        marginVertical:10,
        padding:20,
        borderColor:'#2ecc71',
        backgroundColor:'#27ae60',
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