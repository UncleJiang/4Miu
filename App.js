import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './source/style/Theme';
import ProfileScreen from './source/screen/ProfileScreen';
import LoginScreen from './source/screen/LoginScreen';
import TestScreen from './source/screen/TestScreen';
import HomeScreen from './source/screen/HomeScreen';
import SearchScreen from './source/screen/SearchScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default class App extends Component {
  render () {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Lyric"
            component={ this.Lyric }
            options={{ title: '4Miu - MiusicName' }} //之后变量传入，变量为'4Miu - ' + { MiusicName }
          />
          <Stack.Screen
            name="Home"
            component={ HomeScreen }
            options={{ title: '4Miu - MiusicName' }} //之后变量传入，变量为'4Miu - ' + { MiusicName }
          />
          <Stack.Screen
            name="Profile"
            component={ ProfileScreen }
          />
          <Stack.Screen
            name="Login"
            component={ LoginScreen }
          />
          <Stack.Screen
            name="Search"
            component={ SearchScreen }
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  Lyric () {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Miu"
          component={TestScreen}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
        />
      </Tab.Navigator>
    );
  }
}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
