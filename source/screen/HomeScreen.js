import React, {Component} from 'react';
import {View, TextField, Text, Button} from 'react-native-ui-lib';
import {
  StyleSheet,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';


// const Stack = createStackNavigator();

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <View style={styles.body}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {<Text>Home Screenvxcv</Text>   /* 待 */}
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Step One</Text>
          <Text style={styles.sectionDescription}>
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Text>
        </View>
        <Button
          title="Go To Profile"
          onPress={() => this.props.navigation.navigate('Profile')}
          />
        <Button
          title="Go To Login"
          onPress={() => this.props.navigation.navigate('Login')}
          />
        {/* <Button
          title="Go To Test"
          onPress={() => this.props.navigation.navigate('Test')}
          /> */}
      </View>
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
