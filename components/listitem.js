import React, { Component } from 'react';
import { AppRegistry, ListView, View, Image} from 'react-native';

import {
  Text,
  Card,
  CardItem,
  Container,
  Content,
  Right,
  Left,
  Body,
  ListItem
} from 'native-base';

import styles from '../styles/main';

import sourceImg from '../images/google_icon.png';

export default class ListItemComponent extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);

  }
  render() {

    const data = this.props.data;

    return (
        <ListItem style={this.props.style}>
            <Card>
              <CardItem cardBody>
                <Left>
                  <Image
                    style={styles.listItemThumb}
                    source={sourceImg} />
                </Left>
                <Body>
                  <Text>{data}</Text>
                </Body>
              </CardItem>
              <CardItem>

              </CardItem>
            </Card>
        </ListItem>
    );
  }
}
