/**
 * Created by nour on 5/26/17.
 */
'use strict';
import React, {Component} from 'react';
import {
    ScrollView,
    Text,
    View,
    ToolbarAndroid,
    AppRegistry,
    Image,
    ListView,
    RefreshControl,
    Navigator,
    TouchableOpacity,
    Dimensions,
    AsyncStorage
} from "react-native";
import styles from "Sportify/SharedStyles";
import RowUser from "Sportify/Screens/RowUser";

export default class Users extends Component {
    constructor(props) {
        super(props);

    }

    state = {
        dataSourceUser: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        }),
        // Used for RefreshControl
        isRefreshingUser: false,
        messages: [],
        hasToken: false,
        token: "",

    }
    static navigationOptions = {
        title: 'Chat',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={{uri :'chat'}}
                style={{width: 25, height: 25, tintColor: tintColor}}
            />
        ),

    };
    componentWillMount() {
        AsyncStorage.getItem("@Sportify:key").then((token) => {
            this.setState({hasToken: token !== null})
            this.setState({token: token});
            console.log("Pref  " + token);

        })}

    _renderCell(cell) {
        return <View onLayout={event => {
          var width = event.nativeEvent.layout.width;
         if(this.state.cellWidth!=width){
         this.setState({cellWidth:width})
         }
         if(this.state.cellHeight!=width){
         this.setState({cellHeight:width})
         }
        }}>
            <View
                style={{width:this.state.cellWidth,height:this.state.cellHeight,justifyContent:'center',backgroundColor:cell.backgroundColor}}
                resizeMode={Image.resizeMode.stretch} source={cell.image}>
                <Text style={{backgroundColor:'#0004',textAlign:'center',color:'#fff',fontSize:24}}>{cell.text}</Text>
            </View>
        </View>
    }

    componentDidMount() {
        // Fetch Data
        this._fetchDataUser();
    }


    _fetchDataUser = () => {
        // Data is being refreshed
        AsyncStorage.getItem("@Sportify:key").then((token) => {
            this.setState({hasToken: token !== null})
            this.setState({token: token});
            console.log("Pref  " + token);
            const dataUser = fetch('http://92.222.167.166:3000/api/users').then((response) => response.json())
                .then((responseData) => {
                    console.log("users token   "+this.state.token);
                    this.setState({isRefreshingUser: true});
                    this.setState({
                        // Fill up DataSource with demo data
                        dataSourceUser: this.state.dataSourceUser.cloneWithRows(responseData),
                        // Data has been refreshed by now
                        isRefreshingUser: false,
                    });
                })
                .done();
        })};

    _renderRowUser = (user) => {
        return (
            <RowUser
                // Pass event object
                user={user}
                // Pass a function to handle row presses
                onPress={()=>{
                    this.props.navigator.push({
                      name: 'Chat',
                       user: user,
                         });

          // Navigate to a separate event detail screen

        }}
            />
        );
    }


    render() {


        var ToolBar = <ToolbarAndroid

            //logo={{uri :'sportify'}}
            style={styles.toolbar}
            title="Welcome"
            titleColor="white"
            onActionSelected={this.onActionSelected}
            actions={[
              {title: "Log out", show: "never"}
            ]}
        />


        return (
            <View>
                {ToolBar}
                <ListView
                    // Data source from state
                    dataSource={this.state.dataSourceUser}
                    // Row renderer method
                    renderRow={this._renderRowUser}
                    // Refresh the list on pull down
                    refreshControl={
             <RefreshControl
             refreshing={this.state.isRefreshingUser}
             onRefresh={this._fetchDataUser}
             />
             }
                />
            </View>
        );
    }


}


