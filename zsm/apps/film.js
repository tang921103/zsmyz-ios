import React,{Component} from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
} from "react-native";
var REQUEST_URL = "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";
export default class app extends Component{
    constructor(props){
        super(props);
        this.state={
            movies:null,
        };
        this.fetchData = this.fetchData.bind(this);
    }
    render(){
            if(!this.state.movies){
                return this.loadingView();
            }
            console.log(this.state.movies);
            var movie = this.state.movies[0];
            return this.renderMovies(movie);
    };
    componentDidMount(){
        this.fetchData();
    };
    fetchData(){
        fetch(REQUEST_URL).then(
            (response)=> {
                response.json()
            }
        ).then(
            (responseData)=>{
                this.setState({
                    movies:responseData.movies,
                })
            }
        )
    }
    // fetchData() {
    //     fetch(REQUEST_URL)
    //         .then((response) => response.json())
    //         .then((responseData) => {
    //             // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
    //             this.setState({
    //                 movies: responseData.movies,
    //             });
    //         });
    // }
    loadingView = ()=>{
        return(
            <View style={styles.container}>
                <Text style={styles.title}>The film is loading。。。。</Text>
            </View>
        )
    }
    renderMovies = (movie) =>{
        return(
            <View style={styles.container}>
                <Image source={{uri:movie.posters.thumbnail}} style={styles.thumbnail}></Image>
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                </View>
            </View>

        )
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: "center"
    },
    year: {
        textAlign: "center"
    },
    thumbnail: {
        width: 53,
        height: 81
    },
    list: {
        paddingTop: 20,
        backgroundColor: "#F5FCFF"
    }
});