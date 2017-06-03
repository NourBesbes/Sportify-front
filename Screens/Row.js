/**
 * Created by nour on 4/24/17.
 */

import styles from "Sportify/SharedStyles";
import ResponsiveImage from 'react-native-responsive-image';
import React, { Component } from 'react';
import {
    Image,              // Renders background image
    StyleSheet,         // CSS-like styles
    Text,               // Renders text
    TouchableOpacity,   // Handles row presses
    View ,

} from 'react-native';


export default class Row extends Component {

    // Extract event and onPress props passed from List component
    render({ event, onPress } = this.props) {
        // Extract values from event object
        const { title, date,eventImageURL} = event;
        console.log(date["$date"]);
        return (
            // Row press handler
            <TouchableOpacity
                // Pass row style
                style={styles.row}
                // Call onPress function passed from List component when pressed
                onPress={onPress}
                // Dim row a little bit when pressed
                activeOpacity={0.7}
            >
                {/* Background image */}
                <ResponsiveImage source={{uri: eventImageURL}} style={styles.imageBackground}>
                    {/* Title */}
                    <Text style={[styles.textRow, styles.titleRow]}>{title}</Text>
                    {/* date */}
                    <View style={styles.date}>
                        {/* Icon */}
                        <Image
                            source={{uri: 'http://www.iconsfind.com/wp-content/uploads/2015/10/20151014_561e2d21d1f55.png'}}
                            style={styles.iconRow}
                        />
                        {/* Value */}
                        <Text style={[styles.textRow, styles.valueRow]}>{date["$date"]}</Text>
                    </View>
                </ResponsiveImage>
            </TouchableOpacity>
        );
    }

}