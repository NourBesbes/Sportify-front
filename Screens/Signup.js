/**
 * Created by nour on 3/27/17.
 */
'use strict';
import {
    AppRegistry,
    Text,
    TextInput,
    Image,
    ScrollView,
    View,
    TouchableHighlight,
    TouchableOpacity,
    ToolbarAndroid,
    ActivityIndicator,
    StyleSheet,
    AsyncStorage
} from 'react-native';

import styles from 'Sportify/SharedStyles'
import React, {Component} from 'react';
import Login from './Login';
import Preferences from 'Sportify/Screens/Preferences';
export default class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // used to display a progress indicator if waiting for a network response.
            loading: false,
            // entered credentials
            email: '',
            password: '',
            username: ''

        }
    }
    // A method to passs the username and password to firebase and make a new user account
    signup() {
        var self = this ;
        this.setState({
            // When waiting for the firebase server show the loading indicator.
            loading: false
        });
        var self = this
        var userData = {
            fullName: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        fetch('http://92.222.167.166:3000/api/users/auth/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        })
            .then((response) => response.json())
            .then(function (responseData) {
                if (!responseData.token) {
                    alert('Cannot register sorry !')
                    this.setState({
                        // When waiting for the firebase server show the loading indicator.
                        loading: false
                    });
                } else {
                    console.log("My token is : " + responseData.token);
                    AsyncStorage.setItem("@Sportify:key", responseData.token).then(() => self.goToPreferences())
                }
            })

    }


    goToLogin() {
        this.props.navigator.push({
            component: Login
        });
    }

    render() {
        // The content of the screen should be inputs for a username, password and submit button.
        // If we are loading then we display an ActivityIndicator.
        const content = this.state.loading ? <ActivityIndicator size="large"/> :
            <View>
                <TextInput
                    style={styles.inputContainer}
                    onChangeText={(username) => this.setState({username: username})}
                    keyboardType="text"
                    autoCapitalize="none"
                    value={this.state.username}
                    placeholder={"Full name"}/>

                <TextInput
                    style={styles.inputContainer}
                    onChangeText={(email) => this.setState({email: email})}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={this.state.email}
                    placeholder={"Email Address"}/>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({password: text})}
                    value={this.state.password}
                    secureTextEntry={true}
                    placeholder={"Password"}/>


                <TouchableHighlight onPress={this.signup.bind(this)} style={styles.button}>
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableHighlight>


            </View>;


        // A simple UI with a toolbar, and content below it.
        return (
            <View style={styles.container}>
                <View
                    ref="scrollView"
                    keyboardShouldPersistTaps={false}
                    automaticallyAdjustContentInsets={true}
                    alwaysBounceVertical={false}

                >

                    <View style={styles.innerContainer}>
                        <Image source={{uri :'sportify'}} style={styles.Logo}/>

                        {content}
                        <TouchableOpacity activeOpacity={0.8} onPress={this.goToLogin.bind(this)} style={styles.footer}>
                            <Text style={styles.footerText}>
                                Already signed up? <Text style={styles.footerActionText}>Login</Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );

    }

    goToPreferences() {
        this.props.navigator.push({
            component: Preferences
        });
    }
}

AppRegistry.registerComponent('Signup', () => Signup);
