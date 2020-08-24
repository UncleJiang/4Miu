import React, {Component} from 'react';
import {View, TextField, Text, Button} from 'react-native-ui-lib';
import {
  StyleSheet,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

export default class LyricScreen extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <View style={styles.body}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {<Text>Lyric Screen</Text>   /* 待 */}
        </View>
        <View style={styles.sectionContainer}>
          <Text blue50 text20 marginT-20>Lyrics</Text>
          <Text style={styles.sectionDescription}>
            xxxxxxxxxxxxxxxxx
          </Text>
        </View>
        {/* <Button
          title="Go To Profile"
          onPress={() => this.props.navigation.navigate('Profile')}
          />
        <Button
          title="Go To Login"
          onPress={() => this.props.navigation.navigate('Login')}
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
});
