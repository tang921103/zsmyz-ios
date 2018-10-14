import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity
} from 'react-native';
export default class MyPage extends Component{
    static navigationOptions = {
        headerTitle:'我的',
        tabBarLabel:'我的',

    }
    render(){
        const{navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <Text>我的界面</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5fcff',
    }
})