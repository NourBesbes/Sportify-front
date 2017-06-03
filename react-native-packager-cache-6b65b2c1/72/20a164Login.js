
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactNative = require('react-native');

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _Signup = require('Sportify/Screens/Signup');

var _Signup2 = babelHelpers.interopRequireDefault(_Signup);

var _SharedStyles = require('Sportify/SharedStyles');

var _SharedStyles2 = babelHelpers.interopRequireDefault(_SharedStyles);

var _FontAwesome = require('react-native-vector-icons/FontAwesome');

var _FontAwesome2 = babelHelpers.interopRequireDefault(_FontAwesome);

var _reactNativeFbsdk = require('react-native-fbsdk');

var _reactNativeFbsdk2 = babelHelpers.interopRequireDefault(_reactNativeFbsdk);

var Login = function (_Component) {
    babelHelpers.inherits(Login, _Component);

    function Login(props) {
        babelHelpers.classCallCheck(this, Login);

        var _this = babelHelpers.possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

        _this.state = {
            loading: false,
            email: '',
            password: ''
        };
        return _this;
    }

    babelHelpers.createClass(Login, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var content = this.state.loading ? _react2.default.createElement(_reactNative.ActivityIndicator, { size: 'large' }) : _react2.default.createElement(
                _reactNative.View,
                { style: _SharedStyles2.default.container },
                _react2.default.createElement(_reactNative.TextInput, {
                    style: _SharedStyles2.default.inputContainer,
                    onChangeText: function onChangeText(email) {
                        return _this2.setState({ email: email });
                    },
                    value: this.state.email,
                    placeholder: "Email Address" }),
                _react2.default.createElement(_reactNative.TextInput, {
                    style: _SharedStyles2.default.inputContainer,
                    onChangeText: function onChangeText(text) {
                        return _this2.setState({ password: text });
                    },
                    value: this.state.password,
                    secureTextEntry: true,
                    placeholder: "Password" }),
                _react2.default.createElement(
                    _reactNative.TouchableHighlight,
                    { onPress: this.login.bind(this), style: _SharedStyles2.default.button },
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: _SharedStyles2.default.buttonText },
                        'Login'
                    )
                ),
                _react2.default.createElement(
                    _reactNative.Text,
                    null,
                    "\n"
                ),
                _react2.default.createElement(
                    _reactNative.TouchableOpacity,
                    null,
                    _react2.default.createElement(
                        _FontAwesome2.default.Button,
                        { name: 'facebook-official', backgroundColor: '#3b5998', onPress: this.loginWithFacebook },
                        'Login with Facebook'
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
                            { activeOpacity: 0.8, onPress: this.goToSignup.bind(this), style: _SharedStyles2.default.footer },
                            _react2.default.createElement(
                                _reactNative.Text,
                                { style: _SharedStyles2.default.footerText },
                                'Don\'t have an account? ',
                                _react2.default.createElement(
                                    _reactNative.Text,
                                    { style: _SharedStyles2.default.footerActionText },
                                    'Sign Up'
                                )
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: 'login',
        value: function login() {
            var _this3 = this;

            this.setState({
                loading: true
            });

            this.props.firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function (userData) {
                _this3.setState({
                    loading: false
                });
                alert("Login successful" + userData);
            }).catch(function (error) {
                _this3.setState({
                    loading: false
                });
                alert('Login Failed. Please try again');
            });
        }
    }, {
        key: 'loginWithFacebook',
        value: function loginWithFacebook() {
            _reactNativeFbsdk.LoginManager.logInWithReadPermissions(['public_profile']).then(function (result) {
                if (result.CANCELED) {
                    alert('Login was cancelled');
                } else {
                    alert('Login successful' + result.grantedPermissions.toString());
                }
            }, function (error) {
                alert('An error occured ' + error);
            });
        }
    }, {
        key: 'goToSignup',
        value: function goToSignup() {
            this.props.navigator.push({
                component: _Signup2.default
            });
        }
    }]);
    return Login;
}(_react.Component);

exports.default = Login;