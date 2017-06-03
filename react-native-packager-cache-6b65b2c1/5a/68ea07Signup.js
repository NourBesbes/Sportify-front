
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactNative = require('react-native');

var _SharedStyles = require('Sportify/SharedStyles');

var _SharedStyles2 = babelHelpers.interopRequireDefault(_SharedStyles);

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _Login = require('./Login');

var _Login2 = babelHelpers.interopRequireDefault(_Login);

var Signup = function (_Component) {
    babelHelpers.inherits(Signup, _Component);

    function Signup(props) {
        babelHelpers.classCallCheck(this, Signup);

        var _this = babelHelpers.possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this, props));

        _this.state = {
            loading: false,

            email: '',
            password: ''

        };
        return _this;
    }

    babelHelpers.createClass(Signup, [{
        key: 'signup',
        value: function signup() {
            var _this2 = this;

            this.setState({
                loading: true
            });

            this.props.firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(function (authData) {
                var userRef = _this2.props.firebaseApp.database().ref().child('profiles').child(authData.uid);
                userRef.set({ email: _this2.state.email }).then(function () {
                    return next(_this2.state);
                }).catch(function (err) {
                    return error(err);
                });
            }).then(function () {
                alert('Your account was created!');
                _this2.setState({
                    email: '',
                    password: '',
                    loading: false
                });
            }).catch(function (error) {
                _this2.setState({
                    loading: false
                });
                alert("Account creation failed: " + error.message);
            });
        }
    }, {
        key: 'goToLogin',
        value: function goToLogin() {
            this.props.navigator.push({
                component: _Login2.default
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var content = this.state.loading ? _react2.default.createElement(_reactNative.ActivityIndicator, { size: 'large' }) : _react2.default.createElement(
                _reactNative.View,
                null,
                _react2.default.createElement(_reactNative.TextInput, {
                    style: _SharedStyles2.default.inputContainer,
                    onChangeText: function onChangeText(email) {
                        return _this3.setState({ email: email });
                    },
                    keyboardType: 'email-address',
                    autoCapitalize: 'none',
                    value: this.state.email,
                    placeholder: "Email Address" }),
                _react2.default.createElement(_reactNative.TextInput, {
                    style: _SharedStyles2.default.textInput,
                    onChangeText: function onChangeText(text) {
                        return _this3.setState({ password: text });
                    },
                    value: this.state.password,
                    secureTextEntry: true,
                    placeholder: "Password" }),
                _react2.default.createElement(
                    _reactNative.TouchableHighlight,
                    { onPress: this.signup.bind(this), style: _SharedStyles2.default.button },
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: _SharedStyles2.default.buttonText },
                        'Signup'
                    )
                )
            );

            return _react2.default.createElement(
                _reactNative.View,
                { style: _SharedStyles2.default.container },
                _react2.default.createElement(
                    _reactNative.ScrollView,
                    {
                        ref: 'scrollView',
                        keyboardShouldPersistTaps: false,
                        automaticallyAdjustContentInsets: true,
                        alwaysBounceVertical: false,
                        style: _SharedStyles2.default.scrollView
                    },
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: _SharedStyles2.default.innerContainer },
                        _react2.default.createElement(_reactNative.Image, { source: require("Sportify/Sportify-Logo.png"), style: _SharedStyles2.default.Logo }),
                        content,
                        _react2.default.createElement(
                            _reactNative.TouchableOpacity,
                            { activeOpacity: 0.8, onPress: this.goToLogin.bind(this), style: _SharedStyles2.default.footer },
                            _react2.default.createElement(
                                _reactNative.Text,
                                { style: _SharedStyles2.default.footerText },
                                'Already signed up? ',
                                _react2.default.createElement(
                                    _reactNative.Text,
                                    { style: _SharedStyles2.default.footerActionText },
                                    'Login'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);
    return Signup;
}(_react.Component);

exports.default = Signup;


_reactNative.AppRegistry.registerComponent('Signup', function () {
    return Signup;
});