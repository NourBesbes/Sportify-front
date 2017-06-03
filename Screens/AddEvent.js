/**
 * Created by nour on 5/26/17.
 */
import React, {Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    AsyncStorage,
    Alert
} from 'react-native'
import DatePicker from 'react-native-datepicker'
import ImagePicker from "react-native-image-picker";
import Home from "Sportify/Screens/Home";


var nativeImageSource = require('nativeImageSource');
const data=[];
var k=0;
import ModalPicker from 'react-native-modal-picker'
export default class AddEvent extends Component {
    constructor(props) {
        super(props)
        this.state =
            {
                title: "",
                date: "2016-05-15",
                picture: '',
                description: "",
                address: "",
                categories: "",
                token: "",
                textInputValue: '',
                categoryId:''
            }
    }

    componentWillMount() {
        AsyncStorage.getItem("@Sportify:key").then((token) => {
            console.log(token)
            this.setState({token: token})
        })
        const result = fetch('http://92.222.167.166:3000/api/preferences').then((response) => response.json())
            .then((responseData) => {
                for(var i=0 ; i<responseData.length;i++)
                {
                    k++;
                    data.push({"key": k ,"label":responseData[i].label,"id":responseData[i]._id})
                }
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={{uri :'bg6'}}
                    style={[styles.container, styles.bg]}
                    resizeMode="cover"
                >
                    <View style={styles.headerContainer}>

                        <View style={styles.headerTitleView}>
                            <Text style={styles.titleViewText}>Add Event</Text>
                        </View>

                    </View>

                    <View style={styles.inputsContainer}>

                        <View style={styles.inputContainer}>
                            <View style={styles.iconContainer}>
                                <Image
                                    source={{uri :'sport'}}
                                    style={styles.inputIcon}
                                    resizeMode="contain"
                                />
                            </View>
                            <TextInput
                                style={[styles.input, styles.whiteFont]}
                                placeholder="Name"
                                placeholderTextColor="#FFF"
                                underlineColorAndroid='transparent'
                                onChangeText={(title) => this.setState({title: title})}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <View style={styles.iconContainer}>
                                <Image
                                    source={{uri :'cat'}}
                                    style={styles.inputIcon}
                                    resizeMode="contain"
                                />
                            </View>

                            <ModalPicker
                                data={data}
                                initValue="Select category"
                                onChange={(option)=>{ this.setState({textInputValue:option.label}) ;
                                this.setState({categoryId: option.id})}}>

                                <TextInput
                                    style={{ borderColor:'#ccc', padding:2, height:50,width:500}}
                                    editable={false}
                                    placeholder="Select category"
                                    placeholderTextColor="#FFF"
                                    value={this.state.textInputValue}

                                />

                            </ModalPicker>
                        </View>

                        <View style={styles.inputContainer}>
                            <View style={styles.iconContainer}>
                                <Image
                                    source={{uri :'events'}}
                                    style={styles.inputIcon}
                                    resizeMode="contain"
                                />
                            </View>
                            <DatePicker
                                style={{width: 200}}
                                date={this.state.date}
                                mode="date"
                                placeholder="select date"
                                format="YYYY-MM-DD"
                                minDate="2016-05-01"
                                maxDate="2020-06-01"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                dateIcon="false"
                                iconSource={{uri:"events"}}
                                customStyles={{
                                dateIcon: {
            position: 'absolute',
            left: -50,
            top: 13,
            marginRight: 0
          },
                                  dateInput: {
                                  marginLeft: 20,
                                  marginBottom:0,
                                  marginTop:15
                                          }
                                            }}
                                onDateChange={(date) => {this.setState({date: date})}}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <View style={styles.iconContainer}>
                                <Image
                                    source={{uri :'cat'}}
                                    style={styles.inputIcon}
                                    resizeMode="contain"
                                />
                            </View>
                            <TextInput
                                style={[styles.input, styles.whiteFont]}
                                placeholder="Description"
                                placeholderTextColor="#FFF"
                                underlineColorAndroid='transparent'
                                onChangeText={(description) => this.setState({description: description})}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <View style={styles.iconContainer}>
                                <Image
                                    source={{uri :'adress'}}
                                    style={styles.inputIcon}
                                    resizeMode="contain"
                                />
                            </View>
                            <TextInput
                                style={[styles.input, styles.whiteFont]}
                                placeholder="Adress"
                                placeholderTextColor="#FFF"
                                underlineColorAndroid='transparent'
                                onChangeText={(address) => this.setState({address: address})}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.profilePictureContainer}
                            onPress={() => this.onPressProfilePicture()}
                        >
                            <Text >Choose Picture</Text>
                            <Image
                                source={this.state.picture}
                                style={styles.picture}
                            /></TouchableOpacity>


                    </View>


                        <TouchableOpacity onPress={this.addEvent.bind(this)}>
                            <View style={styles.signup}>
                                <Text style={styles.whiteFont}> Add</Text>
                            </View>
                        </TouchableOpacity>
                </Image>

            </View>
        );
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
                        picture: source
                    });


                }
            });
    }

    addEvent() {
    console.log("add Event") ;
        var self = this;
        this.setState({
            // When waiting for the firebase server show the loading indicator.
            loading: false
        });
        var self = this
        var photo = {
            uri: this.state.picture.uri,
            type: 'image/jpeg',
            name: 'profile' + '-' + Date.now() + '.jpg'
        };
        var body = new FormData();
        body.append('file', photo);
        body.append('title', this.state.title);
        body.append('description', this.state.description);
        body.append('address', this.state.address);
        body.append('date', this.state.date);
        body.append('prefs', this.state.categoryId);
        fetch('http://92.222.167.166:3000/api/events?token=' + this.state.token, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            },
            body: body
        })
            .then( () => Alert.alert( 'Alert Title', "Event Added", [ {text: 'OK', onPress: () => console.log('OK Pressed!')}, ] ))
            .catch(error => {
                console.error(error);
            });

    }

}

let styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bg: {
        paddingTop: 30,
        width: null,
        height: null
    },
    headerContainer: {
        flex: 1,
    },
    inputsContainer: {
        flex: 3,
        marginTop: -30,
    },
    footerContainer: {
        flex: 1,
    },
    headerIconView: {
        marginLeft: 10,
        backgroundColor: 'transparent'
    },
    headerBackButtonView: {
        width: 25,
        height: 25,
    },
    backButtonIcon: {
        width: 25,
        height: 25
    },
    headerTitleView: {
        backgroundColor: 'transparent',
        marginTop: 25,
        marginLeft: 25,
    },
    titleViewText: {
        fontSize: 25,
        color: '#fff',
    },
    inputs: {
        paddingVertical: 20,
    },
    inputContainer: {
        borderWidth: 1,
        borderBottomColor: '#CCC',
        borderColor: 'transparent',
        flexDirection: 'row',
        height: 60,
    },
    iconContainer: {
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputIcon: {
        width: 30,
        height: 30,
    },
    input: {
        flex: 1,
        fontSize: 20,
    },
    signup: {
        backgroundColor: '#5ab3ce',
        paddingVertical: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    signin: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    greyFont: {
        color: '#D8D8D8'
    },
    whiteFont: {
        color: '#FFF',
        fontSize: 15,
    },
    profilePictureContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    picture: {
        width: 200,
        height: 200,
        borderRadius: 50,
        marginBottom: 20,
    },
})