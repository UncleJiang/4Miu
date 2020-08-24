import React, {Component} from 'react';
import {Alert, Image, StyleSheet, ScrollView,} from 'react-native';
import Slider from '@react-native-community/slider';
import {observer, inject} from 'mobx-react';
import Video from 'react-native-video';

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

@inject('stores')
@observer
export default class TestScreen extends Component {
  constructor (props) {
    super(props);

    this.state = {
      showButton: false,
      value1: true,
      value2: false,
      searchText: '',
      sliderValue: 0,
      duration: 0.0,
      currentTime: 0.0,
    };
  }

  //格式化播放时间
  formatMediaTime(duration) {
    let min = Math.floor(duration/60);
    let second = duration - min * 60;
    min = min >= 10 ? min : "0" + min;
    second = second >= 10 ? second : "0" + second;
    return min + ":" + second;
  }

  setTime(data) {
    let sliderValue = parseInt(this.state.currentTime);
    this.setState({
      slideValue: sliderValue,
      currentTime: data.currentTime
    });
  }

  setDuration(duration) {
    this.setState({ duration: duration.duration });
  }

  onChangeText = text => {
    this.props.stores.changeSearchText(text);
  };

  onSubmitEditing = text => {
    this.props.stores.changeSearchText(text);
    Alert.alert('Info button pressed' + this.props.stores.searchText);
    console.log(this.props.stores.searchText);
    this.props.navigation.navigate('Search');
  };

  onPress = () => {
    // Alert.alert('Info button pressed' + this.props.stores.searchText);
    console.log(this.props.stores.searchText);
    this.props.navigation.navigate('Search');
  };

  onPressUser = () => {
    // Alert.alert('Info button pressed');
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

  close = () => {
    // Alert.alert('Closed.');     //关闭并添加到我喜欢列表
    this.hideButton();
  };

  render () {
    const { stores } = this.props;
    return (
      <View flex padding-page style={styles.body}>
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
            rightButtonProps={{iconSource: search, onPress: this.onPress, accessibilityLabel: 'TextField Info'}} //添加按enter键查询
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitEditing}
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
            bottomMargin={80}
            hideBackgroundOverlay={true}
            
          />
        </View>

          <Card
            marginT-30
            marginB-10
            paddingV-16
            paddingH-16
          >
            <Text text40 dark10>{stores.songName}</Text>
            <Text text70 dark10>{stores.singerName}</Text>
          </Card>

          <Video
            source={{uri: 'http://fs.android2.kugou.com/463fa1ef2889627ea079d9c7e29f7248/5f3f85df/G111/M06/1D/10/D4cBAFoL9VyASCmXADTAFw14uaI428.mp3'}}
            ref={(ref) => {
              this.player = ref
            }}
            paused = {false}
            onLoad = {data => this.setDuration(data)}
            volume = {1.0}
            onProgress = {e => this.setTime(e)}
            onBuffer={this.onBuffer}
            onError={this.videoError}
            playInBackground={false}
            style={styles.backgroundVideo}
          />
          <Card
            marginB-26
            paddingV-16
          >
            <Slider
              value={this.state.slideValue}
              maximumValue={this.state.duration}
              step={1}
              onValueChange={value => this.setState({ currentTime: value})}
            />
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
            iconSource={playIcon}       // 待
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
    backgroundColor: "#FF7F50"
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
  },
  backgroundVideo: {
    backgroundColor: "#222222",
    position: "absolute",
    top: 0,
    left: 0,

  },
  body: {
    backgroundColor: Colors.white,
  },
});
