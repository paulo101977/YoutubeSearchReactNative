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
} from 'react-native';

import styles from '../styles/main';
import ListView from './list';


export default class YoutubeSearchHome extends Component {
  render(){
    return(
      <View style={styles.container}>
        <ListView
          navigator={this.props.navigator}
          data={this.props.data}></ListView>
        {this.props.children}
        {/* render the Pop-up and other stacked components*/}
      </View>
    )
  }
}
