import React, {Component, useEffect, useState } from 'react';
import {StyleSheet, ScrollView, FlatList, ActivityIndicator, Alert} from 'react-native';
import {observer, inject} from 'mobx-react';
import {View, TextField, Text, Button, ListItem, Colors} from 'react-native-ui-lib';

import search from '../image/icon/search.png';
import { SafeAreaView } from 'react-native-safe-area-context';

@inject('stores')
@observer
export default class SearchScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false, 
      searchText: 'hello',
    };
  }

  onChangeText = text => {
    this.request1();
    this.props.stores.changeSearchText(text);
  };

  onSubmitEditing = text => {
    this.props.stores.changeSearchText(text);
  };

  onPress = () => {
    this.request1();
    // Alert.alert('Info button pressed' + this.props.stores.searchText);
  };

  onPressListItem = (item,id) => {
    this.props.stores.changeSongName(item.songname_original);
    this.props.stores.changeSingerName(item.singername);
    // Alert.alert('click'+id + this.props.stores.songName);
    console.log('Type: ' + typeof(this.props.stores.songName));
  }

  request1 () {    //待改名
    return fetch(this.props.stores.getSearchApi)
      .then((response) => response.text())
      .then((responseText) => {
        let response2 = responseText.slice(23,-21);
        return JSON.parse(response2);
      })
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          mdata: responseJson.data.info,
        }, function() {

        });
      })
      .catch((error) => {
        console.error(error);
      })
  }

  componentDidMount () {
    this.request1();
  }

  renderRow = (item, id) => (
    <ListItem
    activeBackgroundColor={Colors.dark60}
    activeOpacity={0.3}
    onPress={() => this.onPressListItem(item,id)}
    >
      <ListItem.Part middle>
        <Text>{this.renderEm(item.songname_original)}</Text>
        <Text>{this.renderEm(item.singername)}</Text>
      </ListItem.Part>
    </ListItem>
  );

  // 显示高亮
  renderEm (itemStr) {
    itemStr = ' ' + itemStr;
    if (itemStr.search('<em>') >= 0){
      arr1 = itemStr.split('<em>');
      arr2 = arr1[1].split('</em>');
    
      return (
        <Text>{arr1[0]}<Text red10>{arr2[0]}</Text>{arr2[1]}</Text>
        );
    } else {
      return (
        <Text>{itemStr}</Text>
      );
    }
  }

  render () {
    const { stores } = this.props;
    if(this.state.isLoading) {
      return(
        <View style={{flex: 1,padding: 20}}>
          <ActivityIndicator/>
        </View>
      );
    }
    return (
      <View flex paddingH-25 paddingT-20 style={styles.body}>
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
        <Text blue50 text20 marginT-20>Search Result</Text>
        <SafeAreaView style={{flex: 1}}>
          <FlatList 
            data={this.state.mdata}
            renderItem={({item, index}) => this.renderRow(item, index)}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
});