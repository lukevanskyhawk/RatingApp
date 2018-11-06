import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ProfileScreen from '../screens/ProfileScreen';
import GiveFeedbackScreen from '../screens/GiveFeedback';
import MyFeedbackScreen from '../screens/MyFeedbackScreen';

const ProfileStack = createStackNavigator({
  Home: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-contact${focused ? '' : '-outline'}`
          : 'md-contact'
      }
    />
  ),
};

const FeedbackStack = createStackNavigator({
  Links: GiveFeedbackScreen,
});

FeedbackStack.navigationOptions = {
  tabBarLabel: 'Give Feedback',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-text${focused ? '' : '-outline'}` : 'md-text'}
    />
  ),
};

const MyFeedbackStack = createStackNavigator({
  Settings: MyFeedbackScreen,
});

MyFeedbackStack.navigationOptions = {
  tabBarLabel: 'My Feedback',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-filing${focused ? '' : '-outline'}` : 'md-filing'}
    />
  ),
};

export default createBottomTabNavigator({
  ProfileStack,
  FeedbackStack,
  MyFeedbackStack,
});
