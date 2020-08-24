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
import {Provider} from 'mobx-react';
import stores from './source/store';

import theme from './source/style/Theme';
import ProfileScreen from './source/screen/ProfileScreen';
import LoginScreen from './source/screen/LoginScreen';
import TestScreen from './source/screen/TestScreen';
import LyricScreen from './source/screen/LyricScreen';
import SearchScreen from './source/screen/SearchScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default class App extends Component {
  render () {
    return (
      <Provider stores={stores}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={ this.HomeM }
              options={{ title: '4Miu' }}
            />
            <Stack.Screen
              name="Lyric"
              component={ LyricScreen }
              options={{ title: '4Miu' }}
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
      </Provider>
    );
  }

  HomeM () {
    return (
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: styles.tabBarStyle
        }}
      >
        <Tab.Screen
          name="Home"
          component={TestScreen}
        />
        <Tab.Screen
          name="Lyric"
          component={LyricScreen}
        />
      </Tab.Navigator>
    );
  }
}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  tabBarStyle: {
    fontSize: 20,
    fontWeight: '600',
    
  }
});
