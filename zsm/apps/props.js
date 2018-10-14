import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Greeting extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Text>Hello {this.props.name} {this.props.age}!</Text>
            </View>
        );
    }
}

export default class LotsOfGreetings extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Greeting name='Rexxar' age='23' />
                <Greeting name='Jaina' />
                <Greeting  name='tangqiu'/>
                <View>
                    <Film content="content"></Film>
                </View>
            </View>
        );
    }
}
class Film extends Component{
    render(){
        return(
            <View style={{backgroundColor:'#ff0000',width:300,height:30,itemAlign:'center',justifyItems:'center',textAlign: 'center'}}>
                <Text>属性：{this.props.content}</Text>
            </View>
        )
    }
}