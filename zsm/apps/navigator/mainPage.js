import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
export default class MainPage extends Component {
    static navigationOptions = {
        // headerTitle:'首页',
        tabBarLabel: '首页',
        // headerTitleStyle:{
        //     fontSize:18,
        //     fontWeight:'400',
        //     alignSelf:'center',
        // },
        headerStyle: {
            height: 0, //去掉标题
        },
        // tabBarIcon:<Image style={{height: 30, width: 30}}
        //                   source={require('./ic_tab_mine.png')}/>
    };
    render() {
        // 获取 navigate 属性
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>

                <TouchableOpacity style={{width:200,height: 50, backgroundColor: 'red', borderRadius:5,justifyContent: 'center', alignItems: 'center'}}
                                  onPress={() => navigate('DetailsPage', { title: '详情页',des:'回到上一页' })} >
                    <Text style={{color:"#FFF"}}>点击查看详情</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
});
