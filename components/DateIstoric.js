import React  from 'react';
import {View,ScrollView,Text,StyleSheet, TouchableWithoutFeedback ,Keyboard, Modal,TouchableOpacity, ImageBackground} from 'react-native';
import {FontAwesome} from "@expo/vector-icons";
// import { ScrollView } from 'react-native-gesture-handler';
import { VictoryBar, VictoryChart, VictoryTooltip,VictoryTheme,VictoryArea,VictoryVoronoiContainer ,VictoryGroup,VictoryLine,  VictoryLegend,VictoryLabel} from "victory-native";


import HeaderData from '../shared/headerData';

export default class DateIstoric extends React.Component{
    constructor(props){
        super(props);
    }
    state={
        tensiuneMare:[
            { day:'1',value:100, },
            { day:'2',value:120, },
            { day:'3',value:130, },
            { day:'4',value:80, },
            { day:'5',value:130, },
            { day:'6',value:140, },
            { day:'7',value:190, },
        ],
        tensiuneMica:[
            { day:'1',value:70, },
            { day:'2',value:67, },
            { day:'3',value:100, },
            { day:'4',value:80, },
            { day:'5',value:91, },
            { day:'6',value:54, },
            { day:'7',value:100, },
        ],
        puls:[
            { day:'1',value:90, },
            { day:'2',value:70, },
            { day:'3',value:50, },
            { day:'4',value:60, },
            { day:'5',value:80, },
            { day:'6',value:72, },
            { day:'7',value:56, },
        ],
        temperaturaC:[
            { day:'1',value:37.1, },
            { day:'2',value:37.5, },
            { day:'3',value:36.2, },
            { day:'4',value:35.8, },
            { day:'5',value:37.6, },
            { day:'6',value:36.4, },
            { day:'7',value:37.1, },
        ],
        glicemie:[
            { day:'1',value:70, },
            { day:'2',value:107, },
            { day:'3',value:100, },
            { day:'4',value:98, },
            { day:'5',value:65, },
            { day:'6',value:120, },
            { day:'7',value:100, },
        ],
        greutate:[
            { day:'1',value:70.6, },
            { day:'2',value:68.2, },
            { day:'3',value:70.1, },
            { day:'4',value:71.2, },
            { day:'5',value:71, },
            { day:'6',value:70.1, },
            { day:'7',value:70.5, },
        ],

    }
    render(){
        return(
            <TouchableWithoutFeedback onPress={()=>{
                Keyboard.dismiss();
                console.log("keyboard dismiss");
            }}>

            <Modal animationType="slide"  visible={this.props.visibleDateIstoric}>                              
                <ImageBackground source={require("../assets/GREEN.png")} style={{flex:1}}>
                    <HeaderData changeVisbility={this.props.changeVisbility} title="Date istorice"/>
                
                    <ScrollView style={{flex:1}}>
                        {/* Tensiune */}
                        <View style={sytles.container}>
                            <Text style={{fontSize:24,fontWeight:'200',color:'#000',textAlign:'center'}}>Tensiunea pe ultimele 7 zile</Text>
                            <VictoryChart width={400}  height={400}  theme={VictoryTheme.material}  >
                                <VictoryLegend 	
                                    title="Legenda"
                                    x={50}
                                    y={10}                                  
                                    centerTitle                                 
                                    orientation="vertical"
                                    data={[{name:'Tensiunea mare',symbol:{fill:'tomato'}}, {name:'Tensiunea mica',symbol:{fill:'orange'}}]}
                                    style={{title: {fontSize: 20, }}}
                                />
                                <VictoryGroup domain={{x: ['1', '7'], y: [0, 200]}} offset={20} colorScale={"qualitative"} colorScale={["tomato", "orange"]}>
                                    <VictoryBar data={this.state.tensiuneMare} x="day" y="value" />
                                    <VictoryBar data={this.state.tensiuneMica} x="day" y="value" />
                                </VictoryGroup>  
                                
                            </VictoryChart>
                        </View>
                        {/* Pulsul */}
                        <View style={sytles.container}>
                            <Text style={{fontSize:24,fontWeight:'200',color:'#000',textAlign:'center'}}>Pulsul pe ultimele 7 zile</Text>
                            <VictoryChart width={400} height={400} theme={VictoryTheme.material}>
                                <VictoryLine data={this.state.puls} domain={{x: ['1', '7'], y: [0, 160]}} x="day" y="value" />
                            </VictoryChart>
                        </View>
                        {/* Temperatura */}
                        <View style={sytles.container}>
                            <Text style={{fontSize:24,fontWeight:'200',color:'#000',textAlign:'center'}}>Temperatura corporala pe ultimele 7 zile</Text>
                            <VictoryChart width={400} height={400} theme={VictoryTheme.material}>
                                <VictoryLine data={this.state.temperaturaC} x="day" y="value" />
                            </VictoryChart>
                        </View>
                        {/* Glicemie */}
                        <View style={sytles.container}>
                            <Text style={{fontSize:24,fontWeight:'200',color:'#000',textAlign:'center'}}>Glicemia pe ultimele 7 zile</Text>
                            <VictoryChart width={400} heigth={400} theme={VictoryTheme.material}>
                                <VictoryArea 
                                    data={this.state.glicemie} 
                                    x="day" 
                                    y="value"
                                   
                                    labelComponent={<VictoryLabel renderInPortal dy={-20}/>}
                                    style={{ data: { fill: "#c43a31" } }} />
                            </VictoryChart>
                        </View>
                        {/* Greutate */}
                        <View style={sytles.container}>
                            <Text style={{fontSize:24,fontWeight:'200',color:'#000',textAlign:'center'}}>Greutatea corporala pe ultimele 7 zile</Text>
                            <VictoryChart 
                                
                                width={400} 
                                heigth={400} 
                                containerComponent={
                                    <VictoryVoronoiContainer
                                    mouseFollowTooltips
                                    labels={({datum}) =>"y"+ datum.y}
                                    voronoiDimension="x"
                                    labelComponent={
                                        <VictoryTooltip  dy={-7} constrainToVisibleArea />
                                    }
                                />
                                }
                                theme={VictoryTheme.material}  >
                                
                                <VictoryLine data={this.state.greutate} x="day" y="value"   />
                            </VictoryChart>
                        </View>
              
                    </ScrollView>
               
                </ImageBackground>       
            </Modal>
            </TouchableWithoutFeedback>
        );
    };
}
const sytles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5fcff"
                
    },
    header:{
        flex:0,       
    }

});