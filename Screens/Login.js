/**
 * Created by nour on 3/27/17.
 */
'use strict';
import {
    AppRegistry,
    Dimensions,
    Image,
    ScrollView,
    Text,
    TextInput,
    View,
    TouchableHighlight,
    ToolbarAndroid,
    TouchableOpacity,
    ActivityIndicator,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import React, {Component} from 'react';
import Signup from 'Sportify/Screens/Signup';
import Main from 'Sportify/Screens/Main';
import styles from 'Sportify/SharedStyles'
import Icon from 'react-native-vector-icons/FontAwesome';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

export default class Login extends Component {


    constructor(props) {
        super(props);
        // We have the same props as in our signup.js file and they serve the same purposes.
        this.state = {
            loading: false,
            email: '',
            password: '',
            hasToken: false
        }
    }

    componentWillMount() {
        AsyncStorage.getItem("@Sportify:key").then((token) => {
            this.setState({hasToken: token !== null})
            console.log("Pref  " + token);
            if(token) {
                this.goToMain()
            }
        })
    }


    render() {
        // The content of the screen should be inputs for a username, password and submit button.
        // If we are loading then we display an ActivityIndicator.


        const content = this.state.loading ? <ActivityIndicator size="large"/> :
            <View style={styles.container}>
                <TextInput
                    style={styles.inputContainer}
                    onChangeText={(email) => this.setState({email: email})}
                    value={this.state.email}
                    placeholder={"Email Address"}/>
                <TextInput
                    style={styles.inputContainer}
                    onChangeText={(text) => this.setState({password: text})}
                    value={this.state.password}
                    secureTextEntry={true}
                    placeholder={"Password"}/>
                <TouchableHighlight onPress={this.login.bind(this)} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableHighlight>


                <TouchableOpacity>
                    <Icon.Button name="google" backgroundColor="#d34f3f" onPress={this.loginWithGoogle}>
                        Login with Google
                    </Icon.Button>
                </TouchableOpacity>
            </View>;

        // A simple UI with a toolbar, and content below it.
        return (
            <View style={styles.container}>
                <ScrollView
                    ref="scrollView"
                    keyboardShouldPersistTaps={false}
                    automaticallyAdjustContentInsets={true}
                    alwaysBounceVertical={false}
                    style={styles.scrollView}
                >

                    <View style={styles.innerContainer}>
                        <Image source={{uri :'sportify'}} style={styles.Logo}/>

                        {content}
                        <TouchableOpacity activeOpacity={0.8} onPress={this.goToSignup.bind(this)}
                                          style={styles.footer}>
                            <Text style={styles.footerText}>
                                Don't have an account? <Text style={styles.footerActionText}>Sign Up</Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }

    login() {
        this.setState({
            loading: true
        });
        // Log in and display an alert to tell the user what happened.
        var userData = {
            username: this.state.email,
            password: this.state.password
        }
        var self = this
        fetch('http://92.222.167.166:3000/api/users/auth/signin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        })
            .then((response) => response.json())
            .then(function (responseData) {
                AsyncStorage.setItem("@Sportify:key", responseData.token).then(() => {
                    self.goToMain()
                })

            })
    }


//Log in with google+
    loginWithGoogle() {
        GoogleSignin.configure({
            webClientId: ' 240411223918-1kk3bih9mjrud2pfk9m792geme6p1kg9.apps.googleusercontent.com ',
            offlineAccess: false
        });
        GoogleSignin.signIn()
            .then((user) => {
                console.log(user);
                this.setState({user: user});
            })
            .catch((err) => {
                console.log('WRONG SIGNIN', err);
            })
            .done();

    }

    // Go to the signup page
    goToSignup() {
        this.props.navigator.push({
            component: Signup
        });
    }

    goToMain() {
        this.props.navigator.push({
            component: Main
        });
    }
}

