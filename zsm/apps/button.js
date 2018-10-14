import React,{Component} from 'react';
import {Button,
        Alert,
} from 'react-native';
export  default class extends Component{
    render(){
        return(
            <Button title={'点我'} onPress={
                this.click
            }/>
        )
    }
    click = ()=>{
        Alert.alert("点击了")
    }
}