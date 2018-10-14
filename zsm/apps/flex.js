import React,{Component} from "react";
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class flex extends Component{
    render(){
        return(

        <View style={{flex:1}}>
            <View style={{flex: 1, backgroundColor: 'powderblue'}} />
            <View style={{flex: 1, backgroundColor: 'skyblue'}} />
            <View style={{flex: 3, backgroundColor: 'steelblue'}} />
        </View>
        )
    }
}
const styles =StyleSheet.create({
    top:{
        width:50,
        height:50,
        backgroundColor:'powderblue'
    },
    mid:{
        width:100,
        height:100,
        backgroundColor:'skyblue'
    },
    bot:{
        width:150,
        height:150,
        backgroundColor:'steelblue'
    }
})