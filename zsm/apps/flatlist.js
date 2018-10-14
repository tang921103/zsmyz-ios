import React ,{Component}from 'react'
import {
    View,
    Text,
    Platform,
    FlatList,
    StyleSheet
} from 'react-native';
var da = [
    {key: 'Devin'},
    {key: 'Jackson'},
    {key: 'James'},
    {key: 'Joel'},
    {key: 'John'},
    {key: 'Jillian'},
    {key: 'Jimmy'},
    {key: 'Julie'},
]
export default class flatlist extends Component{
    constructor(props){
        super(props);
        this.state={
            names:[
                {key: 'Devin'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Jillian'},
                {key: 'Jimmy'},
                {key: 'Julie'},
            ]
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                    ]}
                    renderItem={
                        ({item})=> <Text style={styles.text}>{item.key}</Text>
                    }
                />
            </View>
        )
    }

}
const styles = StyleSheet.create({
    text:{
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    container:{
      flex:1,
      marginTop:20
    }
})

// import React, { Component } from 'react';
// import { FlatList, StyleSheet, Text, View } from 'react-native';
//
// export default class FlatListBasics extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <FlatList
//                     data={[
//                         {key: 'Devin'},
//                         {key: 'Jackson'},
//                         {key: 'James'},
//                         {key: 'Joel'},
//                         {key: 'John'},
//                         {key: 'Jillian'},
//                         {key: 'Jimmy'},
//                         {key: 'Julie'},
//                     ]}
//                     renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
//                 />
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingTop: 22
//     },
//     item: {
//         padding: 10,
//         fontSize: 18,
//         height: 44,
//     },
// })