/**
 * Created by nour on 4/25/17.
 */
import React, { Component } from 'react';
import MapView from 'react-native-maps';
import ResponsiveImage from 'react-native-responsive-image';

import {
    Image,              // Renders background image
    StyleSheet,         // CSS-like styles
    Text,               // Renders text
    TouchableOpacity,   // Handles row presses
    View ,
    ScrollView

} from 'react-native';
import styles from "Sportify/SharedStyles";
export default class Event extends Component {
    // Extract event object passed as a prop from Row component
    render({ event } = this.props) {
        // Extract values from event object
       // console.log("Event   "+event.eventImageURL);
        const { title, date,eventImageURL, address } = event;
        return (
            <View style={styles.containerEvent}>
                {/* Background image with large image */}
                <Image source={{uri: eventImageURL}} style={styles.imageBackground}>
                    {/* Use ScrollView in case plot is too large to fit on the screen */}
                    <ScrollView
                        style={{flex: 1}}
                    >
                        {/* Title */}
                        <Text style={[styles.textEvent, styles.titleEvent]}>{title.toUpperCase()}</Text>
                        {/* Date */}
                        <View style={styles.dateEvent}>
                            {/* Icon */}
                            <Image
                                source={{uri: 'http://www.iconsfind.com/wp-content/uploads/2015/10/20151014_561e2d21d1f55.png'}}
                                style={styles.iconEvent}
                            />

                            {/* Value */}
                            <Text style={[styles.textEvent, styles.valueEvent]}>{date["$date"]}</Text>
                        </View>
                        {/* Plot */}
                        <View style={styles.plot}>
                            <Text style={styles.plotText}>{address}</Text>
                        </View>
                    </ScrollView>
                    {/* Button container */}
                    <View style={styles.buttonContainerEvent}>
                        {/* Press handler */}
                        <TouchableOpacity
                            // Go to the previous screen
                            onPress={() => {this.props.navigator.pop();}}
                            // Dim button a little bit when pressed
                            activeOpacity={0.7}
                            // Pass button style
                            style={styles.buttonEvent}
                        >
                            <Text style={styles.buttonTextEvent}>CLOSE</Text>
                        </TouchableOpacity>
                    </View>
                </Image>
                <MapView style={styles.mapEvent}
                         initialRegion={{
                        latitude: 37.78825,
                         longitude: -122.4324,
                             latitudeDelta: 0.0922,
                             longitudeDelta: 0.0421,
                              }}
                />

            </View>
        );
    }
}