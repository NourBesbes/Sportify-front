/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
    Navigator,

  Text,
  View
} from 'react-native';
import Login from './Screens/Login'
import Main from './Screens/Main';
import Event from './Screens/Event';
import SearchEvent from './Screens/SearchEvent';
import Chat from './Screens/Chat';

console.disableYellowBox = true;

import Preferences from 'Sportify/Screens/Preferences';
export default class Sportify extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{component: Login}}
                configureScene={() => {
          return Navigator.SceneConfigs.FloatFromRight;
        }}

                renderScene={(route, navigator) => {

                    if(route.name == 'event'){

             return( <Event
              // Pass event object passed with route down as a prop
                 event={route.event}
                 // Pass navigationOperations as navigator prop
                  navigator={navigator}
                   {...this.props}
                      />  )
            }


        else if(route.component){
            // Pass the navigator the the component so it can navigate as well.
            // Pass firebaseApp so it can make calls to firebase.


            return React.createElement(route.component, { navigator});
          }
      }}/>

        );
    }
}



AppRegistry.registerComponent('Sportify', () => Sportify);
