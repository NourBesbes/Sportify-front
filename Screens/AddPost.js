/**
 * Created by nour on 5/27/17.
 */
import React, {Component} from "react";
import {AsyncStorage, Button, Image, ScrollView, Text, TouchableOpacity, View,TextInput,Alert} from "react-native";
import ImagePicker from "react-native-image-picker";
import styles from "Sportify/SharedStyles";
import ImageResizer from 'react-native-image-resizer';
var nativeImageSource = require('nativeImageSource');


export default class AddPost extends Component {
    constructor(props) {
        super(props)
        this.state =
            {
                userName: "",
                title: "",
                profilePicture: '',
                description: "",
                token: "",
                postPicture: "",
                content: ""
            }
    }


    componentWillMount() {
        AsyncStorage.getItem("@Sportify:key").then((token) => {
            console.log(token)
            this.setState({token: token})
            const dataUser = fetch('http://92.222.167.166:3000/api/users/me?token=' + this.state.token).then((response) => response.json())
                .then((responseData) => {
                    this.setState({userName: responseData['displayName']});
                    this.setState({profilePicture: responseData['profileImageURL']});
                    console.log(responseData['displayName'])

                })
                .done();
        })


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
                        postPicture: source
                    });


                }
            });
    }


    render() {

        return (
            <View style={styles.container}>
                <ScrollView
                    ref="scrollView"
                    keyboardShouldPersistTaps={false}
                    automaticallyAdjustContentInsets={true}
                    alwaysBounceVertical={false}
                    style={styles.scrollView}
                >

                    <View style={styles.rowContainer}>
                        <Image style={styles.smallPicture} source={{uri:this.state.profilePicture}}/>
                        <View style={styles.textContainer}>
                            <Text style={{color: "#188FCE"}}>{this.state.userName}</Text>
                            <TextInput multiline label={'Post'} highlightColor={'#00BCD4'}
                                       onChangeText={(content) => this.setState({content: content})}


                            />
                            <TouchableOpacity
                                style={styles.postPictureContainer}
                                onPress={() => this.onPressProfilePicture()}
                            >
                                <Text> </Text>
                                <Text>Add Picture</Text>
                                <Image
                                    source={this.state.postPicture}
                                    style={styles.postPicture}
                                /></TouchableOpacity>

                        </View>
                    </View>
                    <Text> </Text>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>

                        <Button title="Post" color="#00BCD4"  onPress={this.addPost.bind(this)}/>
                    </View>
                </ScrollView>
            </View>

        );

    }

    addPost() {
        console.log("Add Post");
        AsyncStorage.getItem("@Sportify:key").then((token) => {
                this.setState({token: token})

                var photo = {
                    uri: this.state.postPicture.uri,
                    type: 'image/jpeg',
                    name: 'profile' + '-' + Date.now() + '.jpg'
                };
                var body = new FormData();
            if(this.state.prefPicture) {
                body.append('file', photo);
                console.log("Post Picture was found")
            }
              //  body.append('file', photo);
                body.append('content', this.state.content);
                const url = `http://92.222.167.166:3000/api/users/posts?token=` + this.state.token;
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'multipart/form-data',
                    },
                    body: body
                }).then( () => Alert.alert( 'Alert Title', "Post Added", [ {text: 'OK', onPress: () => console.log('OK Pressed!')}, ] ))
                    .catch(error => {
                    console.error(error);
                });
            }).catch((err) => {
               console.log(err);
            });
                }


}
