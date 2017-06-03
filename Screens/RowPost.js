/**
 * Created by nour on 5/29/17.
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


export default class RowPost extends Component {

    // Extract event and onPress props passed from List component
    render({ user, onPress } = this.props) {
        // Extract values from event object

        const { profileImageURL, displayName ,postImageURL,content} = user;
        console.log(displayName+"      "+postImageURL)
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
                        <Image style={styles.smallPicture} source={{uri:profileImageURL}}/>
                        <View style={styles.textContainer}>
                            <Text style={{color : "#188FCE"}}>{displayName}</Text>
                            <Text style={styles.title2}
                                  numberOfLines={1}> {content}.</Text>
                            <Text>            </Text>
                            <Image source={{uri: postImageURL}} style={styles.imageBackground}></Image>
                        </View>
                    </View>

            </TouchableOpacity>
        );
    }

}