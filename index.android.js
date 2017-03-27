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
  Navigator, /* Test for navigator, over the Navigation */
} from 'react-native';

import {Button,Icon,Container} from 'native-base';

//import the navigation component
import {
  StackNavigator,
} from 'react-navigation';

//import main component root
import YoutubeSearchHome from './components/main';

import styles from './styles/main';

//other router component
/* const App = StackNavigator({
  Main: {screen: YoutubeSearchHome}
}); */

export default class App extends Component {
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
            <YoutubeSearchHome></YoutubeSearchHome>
          }
          navigationBar={
             <Navigator.NavigationBar
               routeMapper={{
                 LeftButton: (route, navigator, index, navState) =>
                  { return (
                      <View style={styles.containerElementsSearch}>
                        <TextInput style={styles.searchInput}/>
                      </View>
                    )
                  },
                 RightButton: (route, navigator, index, navState) =>
                   { return (
                     <View style={styles.containerElementsButton}>
                       {/* Use native-base component button */}
                       <View style={styles.searchButton}  danger iconLeft>
                         <Text style={styles.searchButtonText}>GO</Text>
                         {/*<Icon style={styles.searchButtonText} color="white" name="search" />*/}
                       </View>
                       {
                         /*<View style={styles.containerElementsButton}>
                         <View style={styles.searchButton}>
                           <Text style={styles.searchButtonText}>GO</Text>
                         </View>
                       </View>*/
                      }
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
