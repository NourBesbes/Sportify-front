/**
 * Created by nour on 4/25/17.
 */
import styles from "Sportify/SharedStyles";

import React, { Component } from 'react';
import {
    Image,              // Renders background image
    StyleSheet,         // CSS-like styles
    Text,               // Renders text
    TouchableOpacity,   // Handles row presses
    View ,

} from 'react-native';


export default class RowUser extends Component {

    // Extract event and onPress props passed from List component
    render({ user, onPress } = this.props) {
        // Extract values from event object

        const { profileImageURL, displayName } = user;
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
                <View style={styles.rowContainer}>
                <Image source={{uri:profileImageURL}} style={styles.smallPicture}>
                </Image>
                {/* Title */}
                <View style={styles.textContainer}>
                    <Text style={{color : "#188FCE"}}>{displayName}</Text>
                </View>

                {/* date */}
                <View style={styles.date}>
                    {/* Icon */}
                    <Image
                        source={{uri: 'http://www.freeroam.lt/images/laikai/maratonas.png'}}
                        style={styles.iconRow}
                    />
                    {/* Value */}

                </View></View>
            </TouchableOpacity>
        );
    }

}