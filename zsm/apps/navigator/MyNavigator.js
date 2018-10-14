import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import MainPage from './mainPage';   // 首页
import SettingPage from './settingPage';   // 设置页面
import MinePage from './mimePage';          // 我的页面
import DetailsPage from './detailsPage';     // 详情页
const Tabs = TabNavigator({
    Home: {
        screen: MainPage,
    },
    Set: {
        screen: SettingPage,
    },
    Me: {
        screen: MinePage,
    },
},{
    animationEnabled: false, // 切换页面时是否有动画效果
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 是否可以左右滑动切换tab
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#ff8500', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片未选中颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {
            height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
        style: {
            backgroundColor: '#fff', // TabBar 背景色
        },
        labelStyle: {
            fontSize: 14, // 文字大小
        },
    },
});
    export default StackNavigator({
        Main: {
            screen: Tabs
        },
        DetailsPage: { // 详情页
            screen: DetailsPage
        },
    },
    {
        headerMode: 'screen',  // 标题导航
        //initialRouteName: 'main', // 默认先加载的页面组件
        mode: 'modal'       // 定义跳转风格(card、modal)
    });
