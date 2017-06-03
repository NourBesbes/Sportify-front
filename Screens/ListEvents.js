/**
 * Created by nour on 5/26/17.
 */


'use strict';
import React, {Component} from 'react';
import {ScrollView, Text, View,ToolbarAndroid,AppRegistry,Image,ListView,RefreshControl,Navigator,TouchableOpacity,Dimensions,AsyncStorage} from "react-native";
import styles from "Sportify/SharedStyles";
import Row from "Sportify/Screens/Row";
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ListEvents extends Component {

    constructor(props) {
        super(props);
      //console.log("props   "+this.props.name);
        this.state = {
            // ListView DataSource object
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            // Used for RefreshControl
            isRefreshing: false,
            hasToken: false,
            token: "",
        }
    }

    static navigationOptions = {
        title: 'Events',
        tabBarIcon:
            ({ tintColor }) => (
                <Image
                    source={{uri :'events'}}
                    style={{width: 25, height: 25, tintColor: tintColor}}
                />
            ),

    };

    _renderCell(cell) {
        return <View onLayout={event => {
          var width = event.nativeEvent.layout.width;
         if(this.state.cellWidth!=width){
         this.setState({cellWidth:width})
         }
         if(this.state.cellHeight!=width){
         this.setState({cellHeight:width})
         }
        }}>
            <View style={{width:this.state.cellWidth,height:this.state.cellHeight,justifyContent:'center',backgroundColor:cell.backgroundColor}}
                  resizeMode={Image.resizeMode.stretch} source={cell.image}>
                <Text style={{backgroundColor:'#0004',textAlign:'center',color:'#fff',fontSize:24}}>{cell.text}</Text>
            </View>
        </View>
    }
    componentDidMount() {
        // Fetch Data
        this._fetchData();
    }

    _fetchData = () => {
        AsyncStorage.getItem("@Sportify:key").then((token) => {
            this.setState({hasToken: token !== null})
            this.setState({token: token});
          //  console.log("Pref  " + token);
            const data = fetch('http://92.222.167.166:3000/api/events?token='+this.state.token).then((response) => response.json())
                .then((responseData) => {
              //  console.log(responseData)
                    this.setState({isRefreshingUser: true});
                    this.setState({
                        // Fill up DataSource with demo data
                        dataSource: this.state.dataSource.cloneWithRows(responseData),
                        // Data has been refreshed by now
                        isRefreshing: false,
                    });

                })
                .done();

        })}



    _renderRow = (event) => {
        return (
            <Row
                // Pass event object
                event={event}
                // Pass a function to handle row presses
                onPress={()=>{

          // Navigate to a separate event detail screen
         this.props.navigator.push({
            name: 'event',
            event: event,
          });


        }}
            />
        );
    }

    render() {


        var ToolBar = <ToolbarAndroid
            style={styles.toolbar}
            title="Welcome"
            titleColor="white"
            onActionSelected={this.onActionSelected}
            actions = {[
              {title: "Log out", show: "never"}
            ]}
        />

        return (

             <View >
             {ToolBar}

             <ListView
             // Data source from state
             dataSource={this.state.dataSource}
             // Row renderer method
             renderRow={this._renderRow}
             // Refresh the list on pull down
             refreshControl={
             <RefreshControl
             refreshing={this.state.isRefreshing}
             onRefresh={this._fetchData}
             />
             }
             />
                 <ActionButton buttonColor="#5ab3ce" position="right" verticalOrientation="down">
                     <ActionButton.Item buttonColor='#7acee8' title="Search Event" onPress={() => this.goToSearchEvent()}>
                         <Icon name="md-search" style={styles.actionButtonIcon}/>
                     </ActionButton.Item>

                 </ActionButton>
             </View>

        );
    }
    goToSearchEvent(){
    this.props.navigator.push({
        name: 'SearchEvent'
    });
    }
}




