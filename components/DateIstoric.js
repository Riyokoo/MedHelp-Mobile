import React  from 'react';
import {View,ScrollView,Text,StyleSheet, TouchableWithoutFeedback ,Keyboard, Modal,TouchableOpacity, ImageBackground,FlatList} from 'react-native';
import {FontAwesome} from "@expo/vector-icons";
import {ListItem , Icon} from 'react-native-elements'; 
// import { ScrollView } from 'react-native-gesture-handler';
import { VictoryBar, VictoryChart, VictoryTooltip,VictoryTheme,VictoryArea,VictoryVoronoiContainer ,VictoryGroup,VictoryLine,  VictoryLegend,VictoryLabel} from "victory-native";


import HeaderData from '../shared/headerData';

export default class DateIstoric extends React.Component{
    constructor(props){
        super(props);
    }

    // x = day 
    // y = value 
    state={

        tensiuneMare:[
            { x:'1',y:100 },
            { x:'2',y:120 },
            { x:'3',y:130 },
            { x:'4',y:80 },
            { x:'5',y:130 },
            { x:'6',y:140 },
            { x:'7',y:190 },
        ],
        tensiuneMica:[
            { x:'1',y:70 },
            { x:'2',y:67 },
            { x:'3',y:100 },
            { x:'4',y:80 },
            { x:'5',y:91 },
            { x:'6',y:54 },
            { x:'7',y:100 },
        ],
        puls:[
            { x:'1',y:90 },
            { x:'2',y:70 },
            { x:'3',y:50 },
            { x:'4',y:60 },
            { x:'5',y:80 },
            { x:'6',y:72 },
            { x:'7',y:56 },
        ],
        temperaturaC:[
            { x:'1',y:37.1, },
            { x:'2',y:37.5, },
            { x:'3',y:36.2, },
            { x:'4',y:35.8, },
            { x:'5',y:37.6, },
            { x:'6',y:36.4, },
            { x:'7',y:37.1, },
        ],
        glicemie:[
            { x:'1',y:70, },
            { x:'2',y:107, },
            { x:'3',y:100, },
            { x:'4',y:98, },
            { x:'5',y:65, },
            { x:'6',y:120, },
            { x:'7',y:100, },
        ],
        greutate:[
            { x:'1',y:70.6, },
            { x:'2',y:68.2, },
            { x:'3',y:70.1, },
            { x:'4',y:71.2, },
            { x:'5',y:71, },
            { x:'6',y:70.1, },
            { x:'7',y:70.5, },
        ],

    }
      
    componentDidUpdate(){}
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
                        <View style={styles.container}>
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
                                    <VictoryBar data={this.state.tensiuneMare}  labels={({datum}) => datum.y} />
                                    <VictoryBar data={this.state.tensiuneMica}  labels={({datum}) => datum.y} />
                                </VictoryGroup>  
                                
                            </VictoryChart>
                        </View>
                        {/* Pulsul */}
                        <View style={styles.container}>
                            <Text style={{fontSize:24,fontWeight:'200',color:'#000',textAlign:'center'}}>Pulsul pe ultimele 7 zile</Text>
                            <VictoryChart width={400} height={400} theme={VictoryTheme.material}
                                domainPadding={{ y: 10 }}
                                containerComponent={
                                    <VictoryVoronoiContainer
                                    mouseFollowTooltips
                                   
                                    labels={({ datum }) => `${datum.y}`}
                                    />
                                }
                                >                             
                                <VictoryLine 
                                    data={this.state.puls} 
                                  
                                    
                                />
                            </VictoryChart>
                        </View>
                        {/* Temperatura */}
                        <View style={styles.container}>
                            <Text style={{fontSize:24,fontWeight:'200',color:'#000',textAlign:'center'}}>Temperatura corporala pe ultimele 7 zile</Text>
                            <VictoryChart 
                                width={400} 
                                height={400} 
                                theme={VictoryTheme.material}
                                containerComponent={
                                    <VictoryVoronoiContainer
                                    mouseFollowTooltips
                                    constrainToVisibleArea
                                    labels={({ datum }) => `${datum.y}`}
                                    />
                                }>
                                <VictoryLine data={this.state.temperaturaC}/>
                            </VictoryChart>
                        </View>

                        {/* Glicemie */}
                        <View style={styles.container}>
                            <Text style={{fontSize:24,fontWeight:'200',color:'#000',textAlign:'center'}}>Glicemia pe ultimele 7 zile</Text>
                            <VictoryChart 
                                width={400} 
                                height={400} 
                                theme={VictoryTheme.material}
                                containerComponent={
                                    <VictoryVoronoiContainer
                                    mouseFollowTooltips
                                    constrainToVisibleArea
                                    labels={({ datum }) => `${datum.y}`}
                                    />
                                }>
                                <VictoryArea 
                                    data={this.state.glicemie}   
                                                 
                                    // labelComponent={<VictoryLabel renderInPortal dy={-10}/>}
                                    style={{ data: { fill: "#c43a31" ,fillOpacity: 0.7, stroke: "#c43a31", strokeWidth: 3} ,
                                            labels :{fontSize: 15},
                                            
                                    }} 
                                    
                                    labels={({ datum }) => ` ${datum.y}`}
                                   />
                            </VictoryChart>
                        </View>
                        {/* Greutate */}
                        <View style={styles.container}>
                            <Text style={{fontSize:24,fontWeight:'200',color:'#000',textAlign:'center'}}>Greutatea corporala pe ultimele 7 zile</Text>
                            <VictoryChart                                   
                                    width={400} 
                                    height={400} 
                                    containerComponent={
                                        <VictoryVoronoiContainer
                                        mouseFollowTooltips
                                        labels={({datum}) => datum.y}
                                        voronoiDimension="x"
                                        labelComponent={
                                            <VictoryTooltip  dy={-7} constrainToVisibleArea />
                                        }
                                        />
                                    }
                                    theme={VictoryTheme.material}  >
                                <VictoryLine data={this.state.greutate} />
                            </VictoryChart>
                         </View>
                    </ScrollView>
                    
                </ImageBackground>       
            </Modal>
            </TouchableWithoutFeedback>
        );
    };
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5fcff"
                
    },
    header:{
        flex:0,       
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

   