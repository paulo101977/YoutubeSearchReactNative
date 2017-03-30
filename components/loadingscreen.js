import React, { Component } from 'react';
import { View, Text} from 'react-native';


import styles from '../styles/main';


export default class LoadingScreen extends Component {


  render() {
    const text = this.props.text;
    return (
      <View style={styles.loadingcontainer}>
        <Text style={styles.tooltip.container}>

          {/* this is a tooltip text */}
          <Text style={styles.tooltip.text}>
            {text}
          </Text>

        </Text>
      </View>
    );
  }
}
