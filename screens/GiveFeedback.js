import React from 'react';
import {
  Image,
  Platform,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import StarRating from 'react-native-star-rating';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

export default class GiveFeedbackScreen extends React.Component {
  static navigationOptions = {
    title: 'Give Feedback',
  };

  constructor(props) {
    super(props);
    this.state = {
      starCount: 0
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
      <DismissKeyboard>
        <View style={styles.container}>
          <Text>Email of person you are rating</Text>
          <TextInput
            style={styles.emailInput}
            keyboardType="email-address"
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text>Rating</Text>
          <StarRating
            containerStyle={styles.ratingInput}
            disabled={false}
            maxStars={5}
            fullStarColor={'#fba634'}
            rating={this.state.starCount}
            selectedStar={(rating) => this.onStarRatingPress(rating)}
          />

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
      </DismissKeyboard>
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
    borderRadius: 3
  },
  ratingInput: {
    height: 50,
    margin: 15,
    padding: 3
  },
  commentInput: {
    borderWidth: 1,
    height: 200,
    margin: 15,
    padding: 3,
    borderRadius: 3
  },
  submitButton: {
    backgroundColor: '#339afa',
    padding: 10,
    margin: 15,
    height: 60,
    borderRadius: 5
  },
  submitButtonText: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center'
  }
});
