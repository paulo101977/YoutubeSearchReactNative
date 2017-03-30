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
        loading: false
      }

      //bind methods:
      this._setLoading = this._setLoading.bind(this);
  }

  getInitialState(){
    return {
      loading: false
    }
  }

  _setLoading(){
    this.setState({loading: !this.state.loading})
  }

  render() {
      const routes = [
        {title: 'First Scene', index: 0},
        {title: 'Second Scene', index: 1},
      ];

      //set the navigation bar

      return (
        <Navigator
          initialRoute={routes[0]}
          initialRouteStack={routes}
          renderScene={(route, navigator) =>
            <View style={{flex:1}}>
              {
                !this.state.loading ?
                  <YoutubeSearchHome/>
                  :
                  <LoadingScreen/>
              }
              <Tooltip text={"Fill the video name..."}></Tooltip>
            </View>
          }
          navigationBar={
             <Navigator.NavigationBar
               routeMapper={{
                 LeftButton: (route, navigator, index, navState) =>
                  { return (
                      <View style={styles.containerElementsSearch}>
                          <TextInput
                            placeholderTextColor='#FFFFFF88'
                            selectionColor="white"
                            underlineColorAndroid="white"
                            placeholder='Type your video...'
                            style={styles.searchInput}/>

                            {/* Here we are make tests for the popup/tooltip */}
                            {/*<View style={styles.tooltip}>
                              <Text>
                                Pop-up test
                              </Text>
                            </View>
                            */}
                      </View>
                    )
                  },
                 RightButton: (route, navigator, index, navState) =>
                   { return (
                     <View style={styles.containerElementsButton}>
                       <TouchableHighlight
                         underlayColor="blue"
                         activeOpacity={0.3}>
                           <Button
                             onPress={this._setLoading}
                             style={styles.searchButton}
                             large
                             danger
                             iconLeft>
                             {/* Implemented with native-base */}
                             <Icon name="search" size={20} color="white" />
                           </Button>
                       </TouchableHighlight>
                    </View>
                   ); },
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
