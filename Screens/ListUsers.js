/**
 * Created by nour on 5/28/17.
 */
import React, { Component } from 'react';
import {
    Navigator,    // Allows to navigate between different screens
    StatusBar,    // Allows to hide the status bar
    Text,
    Image,
    AppRegistry
} from 'react-native';
import Users from './Users';
import Chat from './Chat';

const RouteMapper = (route, navigationOperations, onComponentRef) => {
    if (route.name === 'list') {
        return (
            <Users navigator={navigationOperations} />
        );
    }else if (route.name === 'Chat') {
        return (
            <Chat
                navigator={navigationOperations}
                {...this.props}
            />
        );
    }


};

export default class ListUsers extends Component {

    static navigationOptions = {
        title: 'Chat',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={{uri :'chat'}}
                style={{width: 25, height: 25, tintColor: tintColor}}
            />
        ),

    };
    componentDidMount() {
        // Hide the status bar
        StatusBar.setHidden(true);
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
AppRegistry.registerComponent('ListUsers', () => ListUsers);
