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


export default class Main extends Component {
  render(){
    return(
      <View style={styles.container}>
        <ListView></ListView>
      </View>
    )
  }
}
