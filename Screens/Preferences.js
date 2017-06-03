/**
 * Created by nour on 3/31/17.
 */
'use strict';
import {Image, ScrollView, Text, ToolbarAndroid, TouchableOpacity, View, Button, AsyncStorage} from "react-native";
import ImagePicker from "react-native-image-picker";
import SelectMultiple from "react-native-select-multiple";
import React, {Component} from "react";
import styles from "Sportify/SharedStyles";
import Main from 'Sportify/Screens/Main';
var nativeImageSource = require('nativeImageSource');
const Teamsports = [];
const Sports={};
var k =0;
export default class Preferences extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // used to display a progress indicator if waiting for a network response.
            loading: false,
            // entered credentials
            email: '',
            password: '',
            username: '',
            selectedSports: [],
            prefPicture: '',
            hasToken: false,
            token: "",
            sports:[],
            prefs:[]

        }


    }

    componentWillMount() {
        AsyncStorage.getItem("@Sportify:key").then((token) => {
            this.setState({hasToken: token !== null})
            this.setState({token: token});
            console.log("Pref  " + token);

        }).then(()=> fetch('http://92.222.167.166:3000/api/preferences').then((response) => response.json())
            .then((responseData) => {
                for(var i=0 ; i<responseData.length;i++)
                {
                    k++;
                    Teamsports.push(responseData[i].label)
                    Sports[responseData[i].label] = responseData[i]._id
                }
                if(k== responseData.length)
                {
                    this.setState({sports: Teamsports})                }

            }))





    }

    onSelectionsChange = (selectedSports) => {

        this.setState({selectedSports});
       var x= selectedSports.map((v) =>Sports [v.label])
        this.setState({prefs:x})
    }

    render() {

        return (
            <View style={styles.container}>
                <ScrollView
                    ref="scrollView"
                    keyboardShouldPersistTaps={false}
                    automaticallyAdjustContentInsets={true}
                    alwaysBounceVertical={false}
                >
                    <ToolbarAndroid

                        onIconClicked={() => this.setState({actionText: 'Icon clicked'})}
                        style={styles.toolbar}
                        subtitle={this.state.actionText}
                        title="Welcome"
                        titleColor="white"
                    />

                    <View style={styles.inputContainer2}>
                        <TouchableOpacity
                            style={styles.profilePictureContainer}
                            onPress={() => this.onPressProfilePicture()}
                        >
                            <Text >Choose Profile Picture</Text>
                            <Image
                                source={this.state.prefPicture}
                                style={styles.profilePicture}
                            /></TouchableOpacity></View>

                    <Text>Choose your favorite sports</Text>

                    <Text>{"\n"}</Text>
                    <ScrollView style={styles.container}>
                        <SelectMultiple
                            items={this.state.sports}
                            selectedItems={this.state.selectedSports}
                            onSelectionsChange={this.onSelectionsChange}

                        />
                    </ScrollView>

                    <Button onPress={this.addPref.bind(this)} title="Next" color={'#5ab3ce'}
                            accessibilityLabel="Go to main"/>
                </ScrollView>
            </View>

        )
    }
    onPressProfilePicture() {
        ImagePicker.showImagePicker({noData: true},
            (response) => {
                console.log('Response = ', response);
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                }
                else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                }
                else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                }
                else {
                    let source = {uri: response.uri, isStatic: true};
                    this.setState({
                        prefPicture: source
                    });

                }
            });
    }

    addPref() {
        AsyncStorage.getItem("@Sportify:key").then((token) => {
                this.setState({token: token})
                var photo = {
                    uri: this.state.prefPicture.uri,
                    type: 'image/jpeg',
                    name: 'profile' + '-' + Date.now() + '.jpg'
                };
                var body = new FormData();
                if(this.state.prefPicture) {
                    body.append('file', photo);
                    console.log("Picture was found")
                }
                body.append('prefs', JSON.stringify(this.state.prefs));
                console.log(this.state.prefs);
                const url = `http://92.222.167.166:3000/api/users/prefs?token=` + this.state.token;
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'multipart/form-data',
                    },
                    body: body
                }).then(()=>{
                    this.props.navigator.push({
                        component: Main
                    });
                }).catch(error => {
                        console.error(error);
                    });
            }
        );
    }
    // Go to the Main page
    goToMain() {
        this.props.navigator.push({
            component: Main
        });
    }
}

