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
import ListEvents from './ListEvents';
import Event from './Event';
import SearchEvent from './SearchEvent';
const RouteMapper = (route, navigationOperations, onComponentRef) => {
    if (route.name === 'list') {
        return (
            <ListEvents navigator={navigationOperations} />
        );
    }else if (route.name === 'SearchEvent') {
        return (
            <SearchEvent
                navigator={navigationOperations}
                {...this.props}
            />
        );
    }
    else if (route.name === 'event') {
        return (
            <Event
                event={route.event}
                navigator={navigationOperations}
                {...this.props}
            />
        );
    }

};

export default class eventroute extends Component {
    constructor(props) {
        super(props);
        //console.log("props   "+this.props.name);
        this.state = {
            hasToken: false,
            token: "",
        }
    }

    componentWillMount() {
        AsyncStorage.getItem("@Sportify:key").then((token) => {
            this.setState({hasToken: token !== null})
            this.setState({token: token});
            console.log("Pref  " + token);

        })}
    static navigationOptions = {
        title: 'Events',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={{uri :'events'}}
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
AppRegistry.registerComponent('Events', () => Events);