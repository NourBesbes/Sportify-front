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
    Dimensions
} from "react-native";
import styles from "Sportify/SharedStyles";
import {GiftedChat} from 'react-native-gifted-chat';
import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyDZBRin_1ktO7cERWMLCuEicng310aBmLE",
    authDomain: "socialapp-7aff6.firebaseapp.com",
    databaseURL: "https://socialapp-7aff6.firebaseio.com",
    storageBucket: "socialapp-7aff6.appspot.com",
    messagingSenderId: "508912104235"
};
const firebaseApp =firebase.initializeApp(firebaseConfig);

export default class Users extends Component {
    //mocking test of chat
    constructor(props) {
        super(props);
        this.state = {messages: []};
        this.onSend = this.onSend.bind(this);
    }
    componentWillUnmount(){
        this.closeChat();
    }
    componentWillMount() {

        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://facebook.github.io/react/img/logo_og.png',
                    },
                },
            ],
        });
    }

    closeChat() {
        if (this.messagesRef) {
            this.messagesRef.off();
        }
    }



    componentDidMount() {
        this.loadMessages((message) => {
            this.setState((previousState) => {
                return {
                    messages: GiftedChat.append(previousState.messages, message),
                };
            });
        });
    }
    loadMessages(callback) {
        this.messagesRef = firebaseApp.database().ref('messages');
        this.messagesRef.off();
        const onReceive = (data) => {
            const message = data.val();

            callback({
                _id: data.key,
                text: message.text,
                createdAt: message.createdAt,
                user: {
                    _id: message.user._id,
                    name: message.user.name
                }
            })
        }
        this.messagesRef.limitToLast(20).on('child_added', onReceive);
    }

    componentWillMount() {
        this.setState({
            //Sender
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://facebook.github.io/react/img/logo_og.png',
                    },
                },
            ],
        });
    }
    onSend(messages = []) {
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, messages),
            };
        });
    }
    sendMessage(message) {

        for (let i = 0; i < message.length; i++) {
            firebaseApp.database().ref('messages').push({
                text: message[i].text,
                user: message[i].user,
                createdAt: new Date().toLocaleString()
            })
        }
    }


    render() {
        let ToolBar = <ToolbarAndroid
            style={styles.toolbar}
            title="Welcome"
            titleColor="white"
            onActionSelected={this.onActionSelected}
            actions={[
              {title: "Log out", show: "never"}
            ]}
        />
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={(message) => {
                    this.sendMessage(message);
               }}

                user={{
          _id: 1,
        }}
            />
        );
    }
}


