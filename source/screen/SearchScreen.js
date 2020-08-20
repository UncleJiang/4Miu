import React, {Component, useEffect, useState } from 'react';
import {StyleSheet, ScrollView, FlatList, ActivityIndicator, Alert} from 'react-native';
import {observable, action, autorun, configure, computed, reaction} from 'mobx';
import {observer, inject} from 'mobx-react';
import {View, TextField, Text, Button, ListItem, Colors} from 'react-native-ui-lib';

import search from '../image/icon/search.png';
import { SafeAreaView } from 'react-native-safe-area-context';

const Data = [
  {id: '0', text: 'Item'},
  {id: '1', text: 'Item'},
  {id: '2', text: 'Item'},
  {id: '2', text: 'Item'},
  {id: '2', text: 'Item'},
  {id: '2', text: 'Item'},
  {id: '2', text: 'Item'},
  {id: '2', text: 'Item'},
  {id: '2', text: 'Item'},
  {id: '2', text: 'Item'},
  {id: '2', text: 'Item'},
  {id: '2', text: 'Item'},
  {id: '2', text: 'Item'},
];
// const searchApi = 'http://msearchcdn.kugou.com/api/v3/search/song?showtype=14&highlight=em&pagesize=30&tag_aggr=1&tagtype=全部&plat=0&sver=5&keyword='+'&correct=1&api_ver=1&version=9108&page=1&area_code=1&tag=1&with_res_tag=1'
// const [isLoading, setLoading] = useState(true);
// const [mdata, setMData] = useState([]);
// const Item = ({ title }) => {
//   return (

//   );
// }

@inject('stores')
@observer
export default class SearchScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: Data,
      isLoading: false, 
      searchText: 'hello',
    };
  }
  
  // async function getMoviesFromApi() {
  //   try {
  //     let response = await fetch(
  //       'https://reactnative.dev/movies.json'
  //     );
  //     let responseJson = await response.json();
  //     return responseJson.movies;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  // componentDidMount () {
  //   return fetch('https://reactnative.dev/movies.json')
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       this.setState({
  //         isLoading: false,
  //         mdata: responseJson.movies,
  //       }, function() {
  //       });
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     })
  // }

  searchApi = 'http://msearchcdn.kugou.com/api/v3/search/song?showtype=14&highlight=em&pagesize=30&tag_aggr=1&tagtype=全部&plat=0&sver=5&keyword='+ 'hell' +'&correct=1&api_ver=1&version=9108&page=1&area_code=1&tag=1&with_res_tag=1';
  

  onChangeText = text => {
    // this.setState({searchText:text});
    this.request1();
    this.props.stores.changeSearchText(text);
  };

  onSubmitEditing = text => {
    // this.setState({searchText:text});
    this.props.stores.changeSearchText(text);
    // this.onPress();
  };

  onPress = () => {
    // Alert.alert('Info button pressed' + this.state.searchText);
    this.request1();
    Alert.alert('Info button pressed' + this.props.stores.searchText);
  };

  onPressListItem = (item,id) => {
    // console.warn(id);
    this.props.stores.changeSongName(item.songname_original);
    this.props.stores.changeSingerName(item.singername);
    Alert.alert('click'+id + this.props.stores.songName);
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
    console.log('SS??' + this.props.stores.searchText);
    this.request1();
  }
  // componentDidMount () {
  //   return fetch(this.props.stores.getSearchApi)
  //     .then((response) => response.text())
  //     .then((responseText) => {
  //       let response2 = responseText.slice(23,-21);
  //       return JSON.parse(response2);
  //     })
  //     .then((responseJson) => {
  //       this.setState({
  //         isLoading: false,
  //         mdata: responseJson.data.info,
  //       }, function() {

  //       });
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     })
  // }

  renderRow = (item, id) => (
    <ListItem
    activeBackgroundColor={Colors.dark60}
    activeOpacity={0.3}
    onPress={() => this.onPressListItem(item,id)}
    // onPress={() => Alert.alert(`press#${id+1}`)}
    >
      <ListItem.Part middle>
        {/* <Text text50>{item.text} #{item.id}</Text> */}
        <Text>{item.songname_original}</Text>
        <Text>{item.singername}</Text>
        {/* <Text>{item.filesize}{item.bitrate}</Text> */}
      </ListItem.Part>
    </ListItem>
  );

  render () {
    const items = this.state.items;
    const { stores } = this.props;
    if(this.state.isLoading) {
      return(
        <View style={{flex: 1,padding: 20}}>
          <ActivityIndicator/>
        </View>
      );
    }
    return (
      <View flex paddingH-25 paddingT-20>
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
          />
        <Text blue50 text20 marginT-20>Search Result</Text>
        <SafeAreaView style={{flex: 1}}>
          <FlatList 
            // data={items}
            data={this.state.mdata}
            // renderItem={this.renderItem}
            renderItem={({item, index}) => this.renderRow(item, index)}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </View>
    );
  }
}