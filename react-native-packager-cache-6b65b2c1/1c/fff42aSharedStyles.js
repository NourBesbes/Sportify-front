Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactNative = require('react-native');

var _StyleVars = require('Sportify/StyleVars');

var _StyleVars2 = babelHelpers.interopRequireDefault(_StyleVars);

var windowWidth = _reactNative.Dimensions.get("window").width;
var windowHeight = _reactNative.Dimensions.get("window").height;
exports.default = _reactNative.StyleSheet.create({
    screenContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: _StyleVars2.default.Colors.mediumBackground
    },
    headingText: {
        color: _StyleVars2.default.Colors.primaryText,
        fontFamily: _StyleVars2.default.Fonts.heading,
        fontSize: 16,
        fontWeight: "600"
    },
    text: {
        color: _StyleVars2.default.Colors.primaryText,
        fontFamily: _StyleVars2.default.Fonts.general,
        fontSize: 12,
        fontWeight: "400"
    },
    navBarTitleText: {
        color: _StyleVars2.default.Colors.navBarTitle,
        fontFamily: _StyleVars2.default.Fonts.heading,
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
        backgroundColor: _StyleVars2.default.Colors.primary
    },
    buttonText: {
        color: "white",
        fontFamily: _StyleVars2.default.Fonts.general,
        fontSize: 14,
        fontWeight: "400"
    },
    Logo: {
        width: windowWidth * 0.50,
        height: windowWidth * 0.50
    },

    innerContainer: {

        alignItems: "center",
        justifyContent: "center",
        height: windowHeight,
        width: windowWidth

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

        color: "black",
        fontFamily: _StyleVars2.default.Fonts.general,
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
        fontFamily: _StyleVars2.default.Fonts.general,
        fontSize: 14
    },
    footerActionText: {
        fontWeight: "600"
    }
});