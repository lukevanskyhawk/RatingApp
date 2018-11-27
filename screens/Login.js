import React, { Component } from 'react';
import { TextInput, Text, View, Button } from 'react-native';
import Loader from './Loader';
import firebase from 'firebase';

export default class Login extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    };

    constructor(props) {
        super(props);

        this.onButtonPress = this.onButtonPress.bind(this);
    }

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({error: '', loading: true});
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onAuthSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onAuthSuccess.bind(this))
                    .catch(this.onAuthFailed.bind(this));
            })
    }

    onAuthSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }

    onAuthFailed() {
        this.setState({
            error: 'Authentication failed',
            loading: false
        });
    }

    renderLoader() {
        if (this.state.loading) {
            return <Loader size="large" />;
        } else {
            return <Button 
                onPress={this.onButtonPress}
                title="Login"
                color="#841584"
            />
        }
    }

    render() {
        return (
            <View>
                <Text>
                    Login or create account
                </Text>
                <TextInput
                    keyboardType="email-address"
                    placeholder="Email"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <TextInput
                    secureTextEntry={true}
                    placeholder="Password"
                />
                <View>
                    {this.renderLoader()}
                </View>
            </View>
        );
    }
}
