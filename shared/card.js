import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card(props) {
    return(
        <View style={styles.card} >
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card:{
        borderRadius: 6,
        elevation:3,
        backgroundColor:'#4834d4',
        shadowOffset: { width:1, heigth:1},
        shadowColor:'#333',
        shadowOpacity:0.3,
        marginHorizontal:4,
        shadowRadius:4,
        marginVertical:10,
    },
    cardContent:{
        marginHorizontal:18,
        marginVertical:12,
       
    }
});