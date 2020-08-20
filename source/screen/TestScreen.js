import React, {Component} from 'react';
import {Alert, Image, StyleSheet, ScrollView} from 'react-native';
import {
  View,
  Text,
  TextField,
  TouchableOpacity,
  Card,
  Button,
  Switch,
  Colors,
  FloatingButton} from 'react-native-ui-lib';
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
      showButton: false,
      value1: true,
      value2: false,
      searchText: '',
    };
  }

  // state = {
  //   value1: true,
  //   value2: false,
  // };

  onChangeText = text => {
    this.setState({searchText:text});
  };

  onSubmitEditing = text => {
    this.setState({searchText:text});
    this.onPress();
  };


  onPress = () => {
    Alert.alert('Info button pressed' + this.state.searchText);
    this.props.navigation.navigate('Search');
  };

  onPressUser = () => {
    Alert.alert('Info button pressed');
    this.props.navigation.navigate('Login');
  };

  onPressImage = () => {
    this.state.showButton ? this.hideButton() : this.showButton();
  }

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
    Alert.alert('Closed.');     //关闭并添加到我喜欢列表
    this.hideButton();
  };

  render () {
    return (
      <View flex padding-page>
        <View row width={'100%'} center marginV-20>
          <Button
            round
            label="U"
            backgroundColor="#FF7F50"
            style={{width: 60, height: 60, position: "absolute", left: 0}}
            onPress={this.onPressUser}
          />
          <TextField
            text60
            containerStyle={{marginBottom: -30, marginHorizontal: 0}}
            placeholder="Search..."
            maxLength={50}
            style={{width: 190,}}
            // floatOnFocus
            rightButtonProps={{iconSource: search, onPress: this.onPress, accessibilityLabel: 'TextField Info'}} //添加按enter键查询
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitEditing}
            // keyboardType="default"
          />
          <Switch
            onColor={Colors.orange30}
            offColor={Colors.violet30}
            value={this.state.value2}
            onValueChange={value2 => this.setState({value2})}
            style={{position: "absolute", right: 0,}}
          />
        </View>
        <View row width={'100%'} center marginT-25>
          
          {/* <Image
            source={album1}
            style={{width: 330, height: 330}}
            borderRadius={300}
            centered
          /> */}
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={{marginRight: 10}}
              onPress={this.onPressImage}
            >
              <Image
                source={album1}
                style={{width: 330, height: 330}}
                borderRadius={300}
                centered
              />
            </TouchableOpacity>
          </View>
          {/* <Button
            round
            iconSource={heartIcon}
            backgroundColor="#FF7F50"
            style={{width: 50, height: 50}}
          /> */}
          <FloatingButton
            style={styles.floatButton}
            visible={this.state.showButton}
            button={{
              onPress: this.close,
              round: true,
              iconSource: heartIcon,
              backgroundColor: "#FF7F50",
              style: styles.floatButton
            }}
            // secondaryButton={{
            //   label: 'Not now',
            //   onPress: this.onPress,
            //   color: Colors.red30
            // }}
            bottomMargin={80}
            hideBackgroundOverlay={true}
            
          />
        </View>

          <Card
            marginV-30
            paddingV-16
          >
            {/* <Text>{songName}</Text>
            <Text>{singerName}</Text> */}
            <Text>songName</Text>
            <Text>singerName</Text>
          </Card>

          {/* 待：播放进度条 */}
          <Card
            marginB-26
            paddingV-16
          >
            <Text>---------------------------------------------------------</Text>
          </Card>
          <View flex row style={styles.playbar}>
          <Button
            round
            iconSource={prevIcon}
            backgroundColor="#FF7F50"
            style={styles.playBtns}
          />
          <Button
            round
            iconSource={playIcon}       // 三元运算符？state？与stopIcon切换
            backgroundColor="#FF7F50"
            style={styles.playBtns}
          />
          <Button
            round
            iconSource={nextIcon}
            backgroundColor="#FF7F50"
            style={styles.playBtns}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  floatButton: {
    width: 50,
    bottom: 30,
    backgroundColor: "#FF7F50"   // 加点透明度
  },
  bar: {
    alignItems: "center"
  },
  playbar: {
    justifyContent: "center"
  },
  playBtns: {
    width: 70,
    height: 60,
    marginHorizontal:26
  }
  // buttonsContainer: {
  //   position: "absolute",
  //   width: 330,
  //   height: 330,
  // }
});
