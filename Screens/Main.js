/**
 * Created by p0wontnx on 4/10/17.
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
import {SideMenu, List, ListItem} from 'react-native-elements'
import Events from "Sportify/Screens/Events";
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ListUsers from "Sportify/Screens/ListUsers";
import {StackNavigator, TabNavigator} from 'react-navigation';
import AddEvent from 'Sportify/Screens/AddEvent';
import Home from 'Sportify/Screens/Home';
export default class Main extends Component {
    constructor(props) {
        super(props);


        state = {
            // ListView DataSource object
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            // Used for RefreshControl
            isRefreshing: false,

            // ListView DataSource object
            dataSourceUser: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            // Used for RefreshControl
            isRefreshingUser: false,
            hasToken: false,
            token : ""
        }
    }

    componentWillMount() {
        AsyncStorage.getItem("@Sportify:key").then((token) => {
            this.setState({hasToken: token !== null})
            this.setState({token: token});
            console.log("Pref  " + token);
        })
    }

    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={{uri :'home'}}
                style={{width: 25, height: 25, tintColor: tintColor}}
            />
        ),

    };

    onSideMenuChange(isOpen: boolean) {
        this.setState({
            isOpen: isOpen
        })
    }

    toggleSideMenu() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }


    render() {


        var ToolBar = <ToolbarAndroid

            Icon={{uri :'sportify'}}
            style={styles.toolbar}
            title="Welcome"
            titleColor="white"
            actions={[
              {title: "Log out", show: "never" }
            ]}
        />

        return (

            <View>
                {ToolBar}

                <View style={styles.rowContainer}>
                    <Image style={styles.smallPicture} source={require("Sportify/nour.jpg")}/>
                    <View style={styles.textContainer}>
                        <Text style={{color : "#188FCE"}}>Nour Besbes</Text>
                        <Text style={styles.title2}
                              numberOfLines={1}> paragraph ......</Text>

                    </View>
                </View>
                <ActionButton buttonColor="#5ab3ce" position="right" verticalOrientation="down">
                    <ActionButton.Item buttonColor='#9b59b6' title="Add Event" onPress={() => this.goToAddEvent()}>
                        <Icon name="md-create" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
                        <Icon name="md-notifications-off" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
                        <Icon name="md-done-all" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                </ActionButton>

            </View>




        );
    }


    goToAddEvent() {
        this.props.navigator.push({
            component: AddEvent
        });
    }
}

export const tabs = {
    // text
    labelStyle: {
        fontFamily: 'Avenir',
        fontSize: 8,
    },
    activeTintColor: '#FFF', // text color active tab
    showIcon: true,
    inactiveTintColor: "#bdcacc", // text color inactive tab
    indicatorStyle: {backgroundColor: "#FFF"},
    upperCaseLabel: false, // active tab highlight top
    style: {
        backgroundColor: "#5ab3ce", // background color of tabs
        borderTopColor: "#5ab3ce",
        height: 57// active tab highlight bottom
    }
};
const MyApp = TabNavigator(
    {
        Home: {screen: Home},
        Events: {screen: Events},
        Users: {screen: ListUsers}

    },

    // navigator config
    {
        lazyLoad: true, // render the tabs lazily
        tabBarPosition: 'bottom', // where are the tabs shown
        backBehavior: 'none', // back button doesn't take you to the initial tab
        tabBarOptions: tabs,
        // label text
    }
);

module.exports = MyApp;
AppRegistry.registerComponent('MyApp', () => MyApp);