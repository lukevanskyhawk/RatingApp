import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import Loader from './Loader';
import firebase from 'firebase';

const LoginButton = MKButton.coloredButton()
    .withText('LOGIN')
    .build();

const Textfield = MKTextField.textfield()
  .withPlaceholder('Email...')
  .build();

const styles = StyleSheet.create({
    form: {
        paddingBottom: 10,
        width: 200
    },
    fieldStyles: {
        height: 40,
        color: MKColor.Orange,
        width: 200
    },
    loginButtonArea: {
        marginTop: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    errorMessage: {
        marginTop: 15,
        fontSize: 15,
        color: "red",
        alignSelf: "center"
    }
});

type Props = {};
export default class Login extends Component<Props> {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    };

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
            return <Loader size="large" />
        } else {
            return <LoginButton onPress={this.onButtonPress.bind(this)} />
        }
    }

    render() {
        return (
            <View style={styles.form}>
                <Text>
                    Login or create account
                </Text>
                <Textfield />
                <Text style={styles.errorMessage}>
                    {this.state.error}
                </Text>
                <View style={styles.loginButtonArea}>
                    {this.renderLoader()}
                </View>
            </View>
        );
    }
}
