import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class GiveFeedbackScreen extends React.Component {
  static navigationOptions = {
    title: 'Give Feedback',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Email of person you are rating</Text>
        <TextInput style={styles.emailInput} placeholder="Email" />

        <Text>This is where the stars will be</Text>

        <Text>Comments</Text>
        <TextInput style={styles.commentInput} placeholder="Comments" multiline={true} />



        <TouchableOpacity
          style={styles.submitButton}
        // onPress={
        //   // () => this.login(this.state.email, this.state.password)
        // }
        >
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
  },
  emailInput: {
    borderWidth: 1,
    height: 40,
    margin: 15,
    padding: 3,
  },
  commentInput: {
    borderWidth: 1,
    height: 200,
    margin: 15,
    padding: 3,

  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white'
  }
});
