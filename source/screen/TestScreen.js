import React, {Component} from 'react';
import {Alert, Image, StyleSheet} from 'react-native';
import {View, Text, TextField, Card, Button, Switch, Colors, FloatingButton} from 'react-native-ui-lib';
import search from '../image/icon/search.png';
import heartIcon from '../image/icon/heart.png';
import prevIcon from '../image/icon/prev.png';
import nextIcon from '../image/icon/next.png';
import playIcon from '../image/icon/play.png';
import album1 from '../image/album/timg.jpg';

const INPUT_SPACING = 10;
export default class TestScreen extends Component {
  constructor (props) {
    super(props);

    this.state = {
      showButton: true,
      value1: true,
      value2: false,
    };
  }

  // state = {
  //   value1: true,
  //   value2: false,
  // };

  onPress = () => {
    Alert.alert('Info button pressed');
    this.props.navigation.navigate('Search');
  };

  onPressUser = () => {
    Alert.alert('Info button pressed');
    this.props.navigation.navigate('Login');
  };

  showButton = () => {
    this.setState({
      showButton: true
    });
  };

  hideButton = () => {
    this.setState({
      showButton: false
    });
  };

  notNow = () => {
    Alert.alert('Not Now!');
    this.hideButton();
  };

  close = () => {
    Alert.alert('Closed.');
    this.hideButton();
  };

  render () {
    return (
      <View flex padding-page>
        <View row width={'100%'} center>
          <Button
            round
            label="U"
            backgroundColor="#FF69B4"
            style={{width: 50, height: 50}}
            onPress={this.onPressUser}
          />
          <TextField
            text60
            containerStyle={{marginBottom: INPUT_SPACING, marginHorizontal: 26}}
            placeholder="Search..."
            maxLength={50}
            style={{width: 180}}
            centered
            floatOnFocus
            rightButtonProps={{iconSource: search, onPress: this.onPress, accessibilityLabel: 'TextField Info'}} //添加按enter键查询
          />
          <Switch
            onColor={Colors.orange30}
            offColor={Colors.violet30}
            value={this.state.value2}
            onValueChange={value2 => this.setState({value2})}
            style={{marginBottom: 20}}
          />
        </View>
        <View row width={'100%'} center>
          <Image
            source={album1}
            style={{width: 330, height: 330}}
            borderRadius={300}
            centered
          />
          <Button
            round
            iconSource={heartIcon}
            backgroundColor="#FF69B4"
            style={{width: 50, height: 50}}
          />
          <FloatingButton
            round
            visible={this.state.showButton}
            button={{
              label: 'Approve',
              onPress: this.onPress
            }}
            secondaryButton={{
              label: 'Not now',
              onPress: this.onPress,
              color: Colors.red30
            }}
            // bottomMargin={80}
            hideBackgroundOverlay={true}
            style={styles.floatButton}
          />
        </View>

        <View>
          {/* 待：播放进度条 */}
          <Button
            round
            iconSource={prevIcon}
            backgroundColor="#FF69B4"
            style={{width: 50, height: 50}}
          />
          <Button
            round
            iconSource={playIcon}       // 三元运算符？state？与stopIcon切换
            backgroundColor="#FF69B4"
            style={{width: 50, height: 50}}
          />
          <Button
            round
            iconSource={nextIcon}
            backgroundColor="#FF69B4"
            style={{width: 50, height: 50}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  floatButton: {
    width: 100,
  }
});
