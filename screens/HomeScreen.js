import React from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import * as firebase from 'firebase'
import { State, TouchableOpacity } from 'react-native-gesture-handler';
import { createAppContainer,NavigationActions  } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import {Feather,SimpleLineIcons, FontAwesome5, Octicons ,AntDesign,MaterialIcons } from '@expo/vector-icons'

//Import screens
import PersonalData from './PersonalData';
import Profile from './Profile';
import Sidebar from '../components/Sidebar';
import AvetiVreoProblema from './AvetiVreoProblema';
import AddData from './addData';
import Acasa from './Acasa';
import IntroduDiagnostic from './IntroduDiagnostic';
import ProfileDoctor from './ProfileDoctor';
import ProfileCaregiver from './ProfileCaregiver';



/**
 *  Profile: {             
                screen: userRol === "pacient" ? Profile : userRol === "doctor" ? ProfileDoctor : userRol === "caregiver" ? ProfileCaregiver : <></>,
                navigationOptions: {          
                    title: "Profil",
                    drawerIcon: ({ tintColor }) => <Feather name="user" size={16} color={tintColor}></Feather>,
                
            
            }
        },
        PersonalData: {
            screen: userRol === "pacient" ? PersonalData : <> </>,
            navigationOptions:{        
                    title: "Date medicale",
                    drawerIcon: ({ tintColor }) => <FontAwesome5 name="book-medical" size={24} color="black" />,
                
            }
        },
        AddData:{
            screen:AddData,
            navigationOptions:{
                title:"Introdu date",
                drawerIcon:({ tintColor }) => <AntDesign name="addfile" size={24} color="black" />
            }
        },
        AvetiVreoProblema: {
                screen: AvetiVreoProblema,
                navigationOptions:{
                
                        title: "Aveti vreo problema ?",
                        drawerIcon:({tintColor}) => <Octicons style = {styles.ReportProbleIcon} name="report" size={24} color="black" onPress = {()=> alert("DA")} ></Octicons>,
                    
                },
        },
        IntroduDiagnostic: {
            screen: IntroduDiagnostic,
            navigationOptions: {
                title:"Introdu diagnostic",
                drawerIcon:({tintColor}) => <MaterialIcons style = {styles.ReportProbleIcon} name="add-chart" size={24} color="black" onPress = {()=> alert("DA")} ></MaterialIcons>,

            }
        }

        : userRol === "doctor" ? ProfileDoctor : userRol === "caregiver" ? ProfileCaregiver : <></>
         : userRol === "caregiver" ? ProfileCaregiver : <></>
 */

let screens = {}
const evaluateRole = (userRol) =>{
    switch(userRol){
        case "pacient":
            screens = {
                
            }
            break;
        case "doctor":
            screens = {
                Acasa: {
                    screen: Acasa,
                    navigationOptions:{
                        title:"Acasa",
                        drawerIcon:({ tintColor }) => <Feather name="home" size={24} color="black" />
                    }
                },
                Profile: {             
                    screen: ProfileDoctor,
                    navigationOptions: {          
                        title: "Profil",
                        drawerIcon: ({ tintColor }) => <Feather name="user" size={16} color={tintColor}></Feather>,
                    
                
                 }
                },
                IntroduDiagnostic: {
                    screen: IntroduDiagnostic,
                    navigationOptions: {
                        title:"Introdu diagnostic",
                        drawerIcon:({tintColor}) => <MaterialIcons style = {styles.ReportProbleIcon} name="add-chart" size={24} color="black" onPress = {()=> alert("DA")} ></MaterialIcons>,
        
                    }
                }
            }
            break;
        case "caregiver":
                screens = {
                    Acasa: {
                        screen: Acasa,
                        navigationOptions:{
                            title:"Acasa",
                            drawerIcon:({ tintColor }) => <Feather name="home" size={24} color="black" />
                        }
                    },
                    Profile: {             
                        screen: ProfileCaregiver,
                        navigationOptions: {          
                            title: "Profil",
                            drawerIcon: ({ tintColor }) => <Feather name="user" size={16} color={tintColor}></Feather>,
                        
                    
                        }
                    },   
                }
                break;
        default:
            screens = {
                Acasa: {
                    screen: Acasa,
                    navigationOptions:{
                        title:"Acasa",
                        drawerIcon:({ tintColor }) => <Feather name="home" size={24} color="black" />
                    }
                },
                Profile: {             
                    screen: Profile,
                    navigationOptions: {          
                        title: "Profil",
                        drawerIcon: ({ tintColor }) => <Feather name="user" size={16} color={tintColor}></Feather>,
                    
                
                    }
                },
            }
            break;
    }
}

const AppDrawerNavigatorForPatient = createDrawerNavigator({
    Acasa: {
        screen: Acasa,
        navigationOptions:{
            title:"Acasa",
            drawerIcon:({ tintColor }) => <Feather name="home" size={24} color="black" />
        }
    },
    Profile: {             
        screen: Profile,
        navigationOptions: {          
            title: "Profil",
            drawerIcon: ({ tintColor }) => <Feather name="user" size={16} color={tintColor}></Feather>,
        
    
        }
    },
    PersonalData: {
        screen:PersonalData,
        navigationOptions:{        
                title: "Date medicale",
                drawerIcon: ({ tintColor }) => <FontAwesome5 name="book-medical" size={24} color="black" />,
            
        }
    },
    AddData:{
        screen:AddData,
        navigationOptions:{
            title:"Introdu date",
            drawerIcon:({ tintColor }) => <AntDesign name="addfile" size={24} color="black" />
        }
    },
    AvetiVreoProblema: {
            screen: AvetiVreoProblema,
            navigationOptions:{
            
                    title: "Aveti vreo problema ?",
                    drawerIcon:({tintColor}) => <Octicons style = {styles.ReportProbleIcon} name="report" size={24} color="black" onPress = {()=> alert("DA")} ></Octicons>,
            }   
    },
    }, 
    {
        contentComponent: props => <Sidebar {...props} displayName = {props.displayName} email={props.email} />,
    }
        
);

const AppDrawerNavigatorForDoctor = createDrawerNavigator({
    Acasa: {
        screen: Acasa,
        navigationOptions:{
            title:"Acasa",
            drawerIcon:({ tintColor }) => <Feather name="home" size={24} color="black" />
        }
    },
    Profile: {             
        screen: ProfileDoctor,
        navigationOptions: {          
            title: "Profil",
            drawerIcon: ({ tintColor }) => <Feather name="user" size={16} color={tintColor}></Feather>,
        
    
     }
    },
    IntroduDiagnostic: {
        screen: IntroduDiagnostic,
        navigationOptions: {
            title:"Introdu diagnostic",
            drawerIcon:({tintColor}) => <MaterialIcons style = {styles.ReportProbleIcon} name="add-chart" size={24} color="black" onPress = {()=> alert("DA")} ></MaterialIcons>,

        }
    }
    },
    {
        contentComponent: props => <Sidebar {...props} displayName = {props.displayName} email={props.email} />,
    }
);

const AppDrawerNavigatorForCaregiver = createDrawerNavigator({
    Acasa: {
        screen: Acasa,
        navigationOptions:{
            title:"Acasa",
            drawerIcon:({ tintColor }) => <Feather name="home" size={24} color="black" />
        }
    },
    Profile: {             
        screen: ProfileCaregiver,
        navigationOptions: {          
            title: "Profil",
            drawerIcon: ({ tintColor }) => <Feather name="user" size={16} color={tintColor}></Feather>,
        
    
        }
    },   
    },
    {
        contentComponent: props => <Sidebar {...props} displayName = {props.displayName} email={props.email} />,
    }
);

const AppDrawerNavigatorFordefault = createDrawerNavigator({
    Acasa: {
        screen: Acasa,
        navigationOptions:{
            title:"Acasa",
            drawerIcon:({ tintColor }) => <Feather name="home" size={24} color="black" />
        }
    },  
    },
    {
        contentComponent: props => <Sidebar {...props} displayName = {props.displayName} email={props.email} />,
    }
);

const HomePatient = createAppContainer(AppDrawerNavigatorForPatient);
const HomeDoctor= createAppContainer(AppDrawerNavigatorForDoctor);
const HomeCaregiver= createAppContainer(AppDrawerNavigatorForCaregiver);
const HomeDefault = createAppContainer(AppDrawerNavigatorFordefault);

export default class HomeScreen extends React.Component{
    constructor(props){
        super(props);
    }
    state = {
        email: "",
        displayName:"",
        userRol:"pacient"

    }

    componentDidMount() {
       
        const { email, displayName } = firebase.auth().currentUser;

        this.setState({ email, displayName });
    }

    signOutUser = () => {
        firebase.auth().signOut();
    }

    render() {
        return (
                    
            <>
                {this.state.userRol === "pacient"
                ? (<HomePatient screenProps = {{displayName:this.state.displayName,email:this.state.email}}></HomePatient> )
                : this.state.userRol === "doctor"
                ? (<HomeDoctor screenProps = {{displayName:this.state.displayName,email:this.state.email}}></HomeDoctor>)
                : this.state.userRol ==="caregiver" 
                ?(<HomeCaregiver screenProps = {{displayName:this.state.displayName,email:this.state.email}}></HomeCaregiver>)
                :(<HomeDefault screenProps = {{displayName:this.state.displayName,email:this.state.email}}></HomeDefault>)
                }
            </>      
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
    },
    LogOut: {
        marginTop: 32,
    }
})
