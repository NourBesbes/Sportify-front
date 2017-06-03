Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Login = require('./Screens/Login');

var _Login2 = babelHelpers.interopRequireDefault(_Login);

var _firebase = require('firebase');

var firebase = babelHelpers.interopRequireWildcard(_firebase);

console.disableYellowBox = true;
var firebaseConfig = {
    apiKey: "AIzaSyDZBRin_1ktO7cERWMLCuEicng310aBmLE",
    authDomain: "socialapp-7aff6.firebaseapp.com",
    databaseURL: "https://socialapp-7aff6.firebaseio.com",
    storageBucket: "socialapp-7aff6.appspot.com",
    messagingSenderId: "508912104235"
};
var firebaseApp = firebase.initializeApp(firebaseConfig);

var Sportify = function (_Component) {
    babelHelpers.inherits(Sportify, _Component);

    function Sportify() {
        babelHelpers.classCallCheck(this, Sportify);
        return babelHelpers.possibleConstructorReturn(this, (Sportify.__proto__ || Object.getPrototypeOf(Sportify)).apply(this, arguments));
    }

    babelHelpers.createClass(Sportify, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_reactNative.Navigator, {
                initialRoute: { component: _Login2.default },
                configureScene: function configureScene() {
                    return _reactNative.Navigator.SceneConfigs.FloatFromRight;
                },

                renderScene: function renderScene(route, navigator) {
                    if (route.component) {
                        return _react2.default.createElement(route.component, { navigator: navigator, firebaseApp: firebaseApp });
                    }
                } });
        }
    }]);
    return Sportify;
}(_react.Component);

exports.default = Sportify;


_reactNative.AppRegistry.registerComponent('Sportify', function () {
    return Sportify;
});