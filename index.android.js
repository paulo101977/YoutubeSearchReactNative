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
  Alert,
  View,
  TextInput, //exclude this
  Navigator, /* Test for navigator, over the Navigation */
  TouchableHighlight, //add touch effect
} from 'react-native';

import {Button,Container,Input} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';

//import the navigation component
import {
  StackNavigator,
} from 'react-navigation';

//import main component root
import YoutubeSearchHome from './components/main';

//the Tooltip
import Tooltip from './components/tooltip';

//the loading screen
import LoadingScreen from './components/loadingscreen';

//var ToolTip = require('react-native-tooltip');

import styles from './styles/main';

//other router component
/* const App = StackNavigator({
  Main: {screen: YoutubeSearchHome}
}); */

export default class App extends Component {

  constructor(props){
      super(props);

      this.state = {
        loading: false,
        dataSource: []
      }

      //bind methods:
      this._setLoading = this._setLoading.bind(this);
      this._renderMain = this._renderMain.bind(this);
      this._openModal = this._openModal.bind(this);
      this._closeModal = this._closeModal.bind(this);
      this._renderRight  = this._renderRight.bind(this);
      this._renderLeft = this._renderLeft.bind(this);
      this._loadinData = this._loadinData.bind(this);
  }
    
   _alert(){
       Alert.alert(
          'Alert Title',
          'My Alert Msg',
          [
            {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
        )
   }
    
  _loadinData(){
      
    this._openModal();

    fetch('https://api.github.com/search/repositories?q=tetris')
    .then((response) => response.json())
    .then((responseJson) => {
    //return responseJson.movies;
    //this._alert();
      const { items } = responseJson;
        
      console.log(items)
      
      setInterval(() => {
          this._closeModal();
          this.setState({dataSource : items })
      } , 400)

    })
    .catch((error) => {
        console.error(error);
        this._alert();
    });
  }
    
  _renderLeft(){
      return (
          <View style={styles.containerElementsSearch}>
              <TextInput
                placeholderTextColor='#FFFFFF88'
                selectionColor="white"
                underlineColorAndroid="white"
                placeholder='Type your video...'
                style={styles.searchInput}/>
          </View>
        )
  }
    
  _renderRight(){
      return (
         <View style={styles.containerElementsButton}>
           <TouchableHighlight
             underlayColor="blue"
             activeOpacity={0.3}>
               <Button
                 onPress={this._loadinData}
                 style={styles.searchButton}
                 large
                 danger
                 iconLeft>
                 {/* Implemented with native-base */}
                 <Icon name="search" size={20} color="white" />
               </Button>
           </TouchableHighlight>
        </View>
       );
  }

  _openModal(){
    this.refs.navigator.refs.loadingscreen._openModal();
  }

  _closeModal(){
    this.refs.navigator.refs.loadingscreen._closeModal();
  }

  _setLoading(){
    this.setState({loading: !this.state.loading})
  }

  _renderMain(data){
    return(
      <Container style={{flex:1}}>
          <YoutubeSearchHome data={data} />
          <LoadingScreen ref={'loadingscreen'}/>
      </Container>
    )
  }

  render() {
      const routes = [
        {title: 'First Scene', index: 0},
        {title: 'Second Scene', index: 1},
      ];

      //set the navigation bar
       const _self = this;
      
      return (
        
        <Navigator
          ref={'navigator'}
          initialRoute={routes[0]}
          initialRouteStack={routes}
          renderScene={(route, navigator) =>
            _self._renderMain(this.state.dataSource)
          }
          navigationBar={
             <Navigator.NavigationBar
               routeMapper={{
                 LeftButton: (route, navigator, index, navState) =>
                  { return _self._renderLeft()},
                 RightButton: (route, navigator, index, navState) =>
                   { return _self._renderRight() },
                 Title: (route, navigator, index, navState) =>
                   { return null; },
               }}
               style={styles.searchContainer}
             />
          }
          style={{padding: 1}}
        />
      );
    }
  }

//register the main componet
AppRegistry.registerComponent('YoutubeSearch', () => App);
