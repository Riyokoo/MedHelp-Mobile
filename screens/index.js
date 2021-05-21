import React from 'react';
import Screen from './Screen'
import Constants from 'expo-constants'

export const Profil = ({ navigation }) => <Screen  navigation={navigation} name="Profil"></Screen>;
export const DatePersonale = ({ navigation }) => <Screen navigation={navigation} name="Personal Data"></Screen>;
export const MedicalData = ({ navigation }) => <Screen navigation={navigation} name="Medical Data"></Screen>;
// export const HomeScreen = ({navigation}) => <Screen navigation={navigation} name="Home"></Screen>
export const Acasa = ({ navigation }) => <Screen navigation={navigation} name="Acasa"></Screen>;
export const AddData = ({navigation }) => <Screen navigation={navigation} name="Introdu date"></Screen>