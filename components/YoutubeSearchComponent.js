/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ListView,
  Button,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import LoadingScreen from './loadingscreen';
import ListItem from './listitem';

import Icon from 'react-native-vector-icons/FontAwesome';

//import styles from '../styles/main';
//import ListView from './list';
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


export default class YoutubeSearchHome extends Component {

  constructor(props) {
    super(props);

    //empty array
    this.state = {
      dataSource: ds.cloneWithRows([

      ])
    };
  }

  _loadinData(){
    const {searchText} = this.state;

    //TODO: add tooltip call here
    if(!searchText) return;

    this.fetchData(searchText)

  }

  fetchData(searchText){

    this._openModal();

    fetch('https://api.github.com/search/repositories?q=' + searchText)
    .then((response) => response.json())
    .then((responseJson) => {
      const { items } = responseJson;

      console.log(items)

      setInterval(() => {
          this._closeModal();
          this.setState({dataSource: ds.cloneWithRows(items)})


      } , 400)

    })
    .catch((error) => {
        console.error(error);
        this._alert();
    });
  }

  _openModal(){
    this.refs.modal._openModal();
  }

  _closeModal(){
    this.refs.modal._closeModal();
  }

  render(){

    const {dataSource} = this.state;

    return(
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <View>
            <TextInput
              onChangeText={(text)=>{ this.setState({searchText: text})}}
              ref={"textInput"}
              placeholderTextColor='#FFFFFF88'
              selectionColor="white"
              underlineColorAndroid="white"
              placeholder='Type your repository...'
              style={styles.searchInput}
              />
          </View>
          <TouchableOpacity
           onPress={() => this._loadinData()}
           activeOpacity={0.5}>
              <Icon name="search" size={30} color="white"></Icon>
          </TouchableOpacity>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <ListItem data={rowData} /> } />
        <LoadingScreen ref="modal"/>
      </View>
    )
  }
}

var width = Dimensions.get('window').width; //full width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  searchBar: {
    height: 60,
    width: width,
    backgroundColor: '#E62117',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  searchInput :{
    width: width - 60,
    height: 40,
    borderWidth: 0,
    color: 'white',
    fontFamily: 'Times',
    fontSize: 20,
    fontWeight: 'bold'
  },
  image: {
    width: 100,
    height: 100,
  },
  textContainer: {
    padding: 10,
    flex: 1,
    flexWrap: "wrap"
  },
  title: {
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 10,
    color: "black",
    flex: 1,
    flexWrap: "wrap",
  },
  description: {
    flex: 1,
    flexWrap: "wrap",
  },
})
