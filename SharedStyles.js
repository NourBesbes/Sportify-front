/**
 * Created by nour on 3/24/17.
 */

import { StyleSheet,
    Dimensions} from 'react-native';
import StyleVars from 'Sportify/StyleVars';
// Detect screen size to calculate row height
const screen = Dimensions.get('window');

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default StyleSheet.create({
    screenContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: StyleVars.Colors.mediumBackground
    },
    headingText: {
        color: StyleVars.Colors.primaryText,
        fontFamily: StyleVars.Fonts.heading,
        fontSize: 16,
        fontWeight: "600"
    },
    text: {
        color: StyleVars.Colors.primaryText,
        fontFamily: StyleVars.Fonts.general,
        fontSize: 12,
        fontWeight: "400"
    },
    navBarTitleText: {
        color: StyleVars.Colors.navBarTitle,
        fontFamily: StyleVars.Fonts.heading,
        fontWeight: "600",
        fontSize: 18,
        lineHeight: 22
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        paddingVertical: 9,
        paddingHorizontal: 15,
        overflow: "hidden",
        backgroundColor: "#5ab3ce"
    },
    buttonText: {
        color: "white",
        fontFamily: StyleVars.Fonts.general,
        fontSize: 14,
        fontWeight: "400"
    },
    Logo: {
        width: windowWidth * 0.50,
        height: windowWidth * 0.50,
    },

    innerContainer: {

        alignItems: "center",
        justifyContent: "center",
        height: windowHeight-25,
        width: windowWidth,

    },
    inputContainer: {
        width: windowWidth * 0.8,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        borderBottomColor: "rgba(255,255,255,0.75)",
        borderBottomWidth: 1
    },
    input: {
        flex: 1,
        height: 40,
        //backgroundColor: StyleVars.Colors.primary,
        color: "black",
        fontFamily: StyleVars.Fonts.general,
        fontSize: 16,
        padding: 5
    },
    footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 48,
        alignItems: "center",
        paddingVertical: 15,
        backgroundColor: "rgba(255,255,255,0.1)",
        borderTopWidth: 1,
        borderTopColor: "rgba(255,255,255,0.5)"
    },
    footerText: {
        color: "black",
        fontFamily: StyleVars.Fonts.general,
        fontSize: 14
    },
    footerActionText: {
        fontWeight: "600"
    },
    toolbar: {
        height: 56,
        backgroundColor: '#5ab3ce',
        alignSelf: 'stretch',
        textAlign: 'center',
    },

    profilePictureContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
        backgroundColor: StyleVars.Colors.mediumBackground
    },
    userImage: {
        width: 50,
        height: 50,
        marginHorizontal: 15
    },
    foregroundContainer: {
        width: Dimensions.get('window').width,
        height: 140,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    logoutButton: {
        position: 'absolute',
        top: 60,
        right: 15
    },
    containerP   : {
        backgroundColor: '#fff',
        margin:10,
        overflow:'hidden'
    },
    titleContainer : {
        flexDirection: 'row'
    },
    title       : {
        flex    : 1,
        padding : 10,
        color   :'#2a2f43',
        fontWeight:'bold'
    },

    buttonImage : {
        width   : 30,
        height  : 25
    },
    body        : {
        padding     : 10,
        paddingTop  : 0
    },
    inputContainer2: {
        width: windowWidth * 1,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30,
        marginTop: 30,
        borderBottomColor: "rgba(255,255,255,0.75)",
        borderBottomWidth: 1
    },
    tabView: {
        flex: 1,
        padding : 10,
        paddingTop  : 0,
        paddingBottom:0,
        backgroundColor: 'rgba(0,0,0,0.01)',
    },
    card: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
        margin: 5,
        flex: 1,
        shadowColor: '#ccc',
        shadowOffset: { width: 2, height: 2, },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    homefooter : {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,


    },
    content: {
        flex: 1,
    },
    thumb: {
        width: 80,
        height: 80,
        marginRight: 10
    },
    textContainer: {
        flex: 1
    },
    separator: {
        height: 0,
        backgroundColor: '#5ab3ce'
    },

    title2: {
        fontSize: 12,
        color: '#656565'
    },
    rowContainer: {
        flexDirection: 'row',
        padding: 10
    },
    smallPicture: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    row: {
        paddingBottom: 4,                   // Add padding at the bottom
    },
    // Background image
    imageBackground: {
        height: screen.height / 3,          // Divide screen height by 3
        justifyContent: 'center',           // Center vertically
        alignItems: 'center',               // Center horizontally
    },
    // Shared text style
    textRow: {
        color: '#fff',                      // White text color
        backgroundColor: 'transparent',     // No background
        fontFamily: 'Avenir',               // Change default font
        fontWeight: 'bold',                 // Bold font
        // Add text shadow
        textShadowColor: '#222',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    },
    // Movie title
    titleRow: {
        fontSize: 22,                       // Bigger font size
    },
    // Rating row
    date: {
        flexDirection: 'row',               // Arrange icon and rating in one line
    },
    // Certified fresh icon
    iconRow: {
        width: 22,                          // Set width
        height: 22,                         // Set height
        marginRight: 5,                     // Add some margin between icon and rating
    },
    // Rating value
    valueRow: {
        fontSize: 16,                       // Smaller font size
    },
    containerEvent: {
        flex: 1,                            // Take up all screen space
        backgroundColor: '#333',            // Dark background
    },
    imageBackgroundEvent: {
        flex: 1,                            // Take up all screen space
        padding: 20                         // Add padding for content inside
    },
    textEvent: {
        backgroundColor: 'transparent',     // No background
        color: '#fff',                      // White text color
        fontFamily: 'Avenir',               // Change default font
        fontWeight: 'bold',                 // Bold font
        // Add text shadow
        textShadowColor: '#222',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 4,
    },
    titleEvent: {
        fontSize: 22,                       // Bigger font size
        marginTop: 30,                      // Add space between top screen edge
        marginBottom: 5,                    // Add space at the bottom
        textAlign: 'center',                // Center horizontally
    },
    dateEvent: {
        flexDirection: 'row',               // Arrange icon and rating in one line
        justifyContent: 'center',           // Center horizontally
    },
    iconEvent: {
        width: 22,                          // Set width
        height: 22,                         // Set height
        marginRight: 5,                     // Add some margin between icon and rating
    },
    valueEvent: {
        fontSize: 16,                       // Smaller font size
    },
    plot: {
        backgroundColor: 'rgba(255,255,255,0.5)', // Semi-transparent white background
        borderRadius: 10,                   // Rounder corners
        marginTop: 40,                      // Margin at the top
        padding: 10,                        // Padding for content inside
    },
    plotText: {
        color: '#333',                      // Dark text color
        fontFamily: 'Avenir',               // Change default font
        fontSize: 15,                       // Small font size
    },
    buttonContainerEvent: {
        marginTop: 20,                      // Add some margin at the top
    },
    buttonEvent: {
        backgroundColor: '#617D8A',         // Color the button
        padding: 15                         // Padding inside
    },
    buttonTextEvent: {
        color: '#fff',                      // White button text
        fontFamily: 'Avenir',               // Change default font
        fontWeight: 'bold',                 // Bold font
        textAlign: 'center',                // Center horizontally
    },
    map: {
        width:300,
        height:300
    },
    mapEvent: {
        width:500,
        height:500,
        bottom:0,


    },
    Mapcontainer: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'flex-end',
            alignItems: 'center',

    },
    postPicture: {
        width: 200,
        height: 200,
        borderRadius: 50,
        marginBottom: 20,
        backgroundColor: StyleVars.Colors.mediumBackground
    },
    postPictureContainer: {
        flex: 1,

    },
    inputPost: {
        width: windowWidth * 0.8,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        borderBottomColor: "#5ab3ce",
        borderBottomWidth: 1,
        height:70
    },
    searchBar: {
        paddingLeft: 30,
        fontSize: 18,
        height: 50,
        flex: 1,
        borderWidth: 9,
        borderColor: "#E4E4E4",
},



});