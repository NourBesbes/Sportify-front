/**
 * Created by nour on 5/27/17.
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
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import RowPost from "Sportify/Screens/RowPost";



const responseData = [{
    displayName: "Souad Ben Mahmoud",
    profileImageURL: "https://s3.amazonaws.com/smartflora/45babc8be01cdffc4ebeb709985d6f98",
    postImageURL: "https://s3.amazonaws.com/smartflora/8cca7f31e210f101247edcf51b05d2f2",
    content: "Test post",
},
    {
        displayName: "Souad Ben Mahmoud",
        profileImageURL: "https://s3.amazonaws.com/smartflora/45babc8be01cdffc4ebeb709985d6f98",
        postImageURL: "https://s3.amazonaws.com/smartflora/8cca7f31e210f101247edcf51b05d2f2",
        content: "Test post",
    }

];


import AddEvent from 'Sportify/Screens/AddEvent';
export default class Main extends Component {
    constructor(props) {
        super(props);

    }

    state = {
        // ListView DataSource object

        dataSourceUser: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        }),
        // Used for RefreshControl
        isRefreshingUser: false,

    }
    componentDidMount() {
        // Fetch Data
        this._fetchDataUser();
    }
    static navigationOptions = {
        title: 'Home',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={{uri :'home'}}
                style={{width: 25, height: 25, tintColor: tintColor}}
            />
        ),

    };
    _fetchDataUser = () => {
        // Data is being refreshed
        AsyncStorage.getItem("@Sportify:key").then((token) => {
            this.setState({hasToken: token !== null})
            this.setState({token: token});
            console.log("Pref  " + token);
          const dataUser = fetch('http://92.222.167.166:3000/api/users/ByPrefs?token='+this.state.token).then((response) => response.json())
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
            this.setState({isRefreshingUser: true});
          /*  this.setState({
                // Fill up DataSource with demo data
                dataSourceUser: this.state.dataSourceUser.cloneWithRows(responseData),
                // Data has been refreshed by now
                isRefreshingUser: false,
            });*/



        })};

    _renderRowUser = (user) => {
        return (
            <RowPost
                // Pass event object
                user={user}
                // Pass a function to handle row presses

            />
        );
    }




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


    render() {

        var ToolBar = <ToolbarAndroid

            Icon={{uri :'sportify'}}
            style={styles.toolbar}
            title="Welcome"
            titleColor="white"
            actions={[
              {title: "Log out", show: "never"}
            ]}
            onActionSelected={this.goToLogin}
        />

        return (

            <View >
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
                <ActionButton buttonColor="#5ab3ce" position="right" verticalOrientation="down">
                    <ActionButton.Item buttonColor='#66c1dd' title="Add Event" onPress={() => this.goToAddEvent()}>
                        <Icon name="md-create" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#7acee8' title="Add Post" onPress={() => this.goToAddPost()}>
                        <Icon name="md-create" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>

                </ActionButton>
            </View>

        );
    }

    onActionSelected(position) {

        console.log('Trying to remove token')
        AsyncStorage.removeItem("@Sportify:key").then(() => {
            this.goToLogin()
        })
    }

    goToAddEvent() {
        this.props.navigator.push({
            name: 'AddEvent'
        });
    }
    goToAddPost() {
        this.props.navigator.push({
            name: 'AddPost'
        });
    }

    goToLogin() {
        /*this.props.navigator.push({
            name: 'Login'
        });*/
        AsyncStorage.removeItem(("@Sportify:key"));

    }

}

AppRegistry.registerComponent('Posts', () => Posts);