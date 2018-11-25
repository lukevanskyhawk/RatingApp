import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Login from './Login';
import Loader from './Loader';
import reducers from '../reducers/PeopleReducer';
import AppHome from '../components/AppHome';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default class App extends Component {
    state = {
        loggedIn: null
    };

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
            <Provider store={store}>
                <View style={styles.container}>
                    {this.renderInitialView()}
                </View>
            </Provider>
        );
    }
}