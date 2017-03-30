import React, { Component } from 'react';
import { View, Text} from 'react-native';


import styles from '../styles/main';


export default class Tooltip extends Component {


  render() {
    const text = this.props.text;
    return (
      <Text style={styles.tooltip}>
        <Text style={styles.tooltip.container}>

          {/* this is a tooltip text */}
          <Text style={styles.tooltip.text}>
            {text}
          </Text>

        </Text>
      </Text>
    );
  }
}
