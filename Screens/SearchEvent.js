/**
 * Created by nour on 5/27/17.
 */


import React, { Component } from 'react';
import { TouchableHightLight, Text, View ,TouchableOpacity,TextInput,ListView,RefreshControl} from 'react-native';
import styles from "Sportify/SharedStyles";
import Row from "Sportify/Screens/Row";
const rowHeight = 40;
const res=[];
var k=0;

export default class SearchEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            // Used for RefreshControl
            isRefreshing: false,
            events:[],
        };
    }
    setSearchText(event) {
        let searchText = event.nativeEvent.text;
        this.setState({searchText});
          // console.log(searchText);
        const result = fetch('http://92.222.167.166:3000/search/'+searchText).then((response) => response.json())
            .then((responseData) => {
            for(var i=0 ; i<responseData.length ; i++){
                res.push(responseData[i]._source);
                console.log(res);
                this.setState({events: res})
                k++;
            }
           if(k==responseData.length){
                this.setState({events: res})
            }
            this.setState({isRefreshingUser: true});
            this.setState({
                // Fill up DataSource with demo data
                dataSource: this.state.dataSource.cloneWithRows(this.state.events),
                // Data has been refreshed by now
                isRefreshing: false,
            });
                });

                }
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
        return (
           <View>
               <View style={{height:50}}>
               <TextInput
                   style={styles.searchBar}
                   value={this.state.searchText}
                   onChange={this.setSearchText.bind(this)}
                   placeholder="Search" />
               </View>
               <ListView
                   // Data source from state
                   dataSource={this.state.dataSource}
                   // Row renderer method
                   renderRow={this._renderRow}
                   // Refresh the list on pull down
                   refreshControl={
             <RefreshControl
             refreshing={this.state.isRefreshing}

             />
             }
               />
           </View>
        );
    }
}
