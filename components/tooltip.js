import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
  } from 'react-native';


//import styles from '../styles/main';


export default class Tooltip extends Component {


  render() {
    const info = this.props.info;
    return (
      <View style={this.props.style,styles.container}>
        {/* the arrow */}
        <View style={styles.arrow}></View>
        <View style={styles.textContainer}>
          <Text style={styles.info}>
            {info}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    position: 'absolute',
    flex: 1,
    backgroundColor: 'transparent',
    padding: 6,
    left: 10,
    top: 50,
    //opacity: 0,
    //height: 0,
  },
  arrow:{
    position: 'absolute',
    width: 14,
    height: 14,
    backgroundColor: '#DDDDDD',
    borderColor: '#DDDDDD',
    borderWidth: 1,
    borderRadius: 0,
    transform: [
      { rotate: '45deg'},
    ],
    top: 2,
    left: 15,
  },
  textContainer:{
    backgroundColor: '#DDDDDD',
    padding: 6,
    borderRadius: 4,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    //borderTopWidth: 0,
    borderTopColor: 'black',
    borderTopWidth: 1,
  },
  info:{
    fontFamily: 'Times',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white'
  }
});
