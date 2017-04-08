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

    const {full_name} = this.props.data;
    const {avatar_url} = this.props.data.owner;

    return (
        <ListItem style={this.props.style}>
            <Card>
              <CardItem cardBody>
                <Left>
                  <Image
                    style={styles.listItemThumb}
                    source={{uri: avatar_url}}  />
                </Left>
                <Body>
                  <Text>{full_name}</Text>
                </Body>
              </CardItem>
              <CardItem>

              </CardItem>
            </Card>
        </ListItem>
    );
  }
}
