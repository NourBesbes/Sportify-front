/**
 * Created by nour on 5/27/17.
 */

import React, { Component } from 'react';
import {
    Navigator,    // Allows to navigate between different screens
    StatusBar,    // Allows to hide the status bar
    Text,
    Image,
    AppRegistry,
    AsyncStorage
} from 'react-native';
import Posts from './Posts';
import AddEvent from './AddEvent';
import AddPost from './AddPost'
import Login from './Login'
const RouteMapper = (route, navigationOperations, onComponentRef) => {
    if (route.name === 'list') {
        return (
            <Posts navigator={navigationOperations} />
        );
    }else if (route.name === 'AddEvent') {
        return (
            <AddEvent
                navigator={navigationOperations}
                {...this.props}
            />
        );
    }
    else if (route.name === 'Login') {
        return (
            <Login
                navigator={navigationOperations}
                {...this.props}
            />
        );
    }
    else if (route.name === 'AddPost') {
        return (
            <AddPost
                navigator={navigationOperations}
                {...this.props}
            />
        );
    }

};

export default class Home extends Component {

    static navigationOptions = {
        title: 'Home',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={{uri :'home'}}
                style={{width: 25, height: 25, tintColor: tintColor}}
            />
        ),

    };
    constructor(props) {
        super(props)
        this.state = {
            token: ""
        }
    }

    componentDidMount() {
        // Hide the status bar
        StatusBar.setHidden(true);
    }

    componentWillMount() {
        AsyncStorage.getItem("@Sportify:key").then((token) => {
            console.log(token)
            this.setState({token: token})
        })
    }

    render() {
        return (
            // Handle navigation between screens
            <Navigator
                // Default to list route
                initialRoute={{name: 'list'}}
                // Use FloatFromBottom transition between screens
                configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
                // Pass a route mapper functions
                renderScene={RouteMapper}
            />
        );
    }
}
AppRegistry.registerComponent('Home', () => Home);