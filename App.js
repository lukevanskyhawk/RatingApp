import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase';
import AppHome from './components/AppHome';
import Loader from './screens/Loader';
import Login from './screens/Login';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

export default class App extends Component {

    state = {
        loggedIn: null
    }

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCDKgeyJba0oV35IkDtO_x1EO_Y74RBi_M",
            authDomain: "fidello-feedback.firebaseapp.com",
            databaseURL: "https://fidello-feedback.firebaseio.com",
            projectId: "fidello-feedback",
            storageBucket: "fidello-feedback.appspot.com",
            messagingSenderId: "74834410827"
        });

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        })
    }

    renderInitialView() {
        switch (this.state.loggedIn) {
            case true:
                return <AppHome />
            case false:
                return <Login />
            default:
                return <Loader size="large" />
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderInitialView()}
            </View>
        );
    }
}
