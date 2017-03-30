import React, { Component } from 'react';
import { AppRegistry, ListView, View, Image} from 'react-native';

import { Container, Content, Thumbnail, Text } from 'native-base';

import styles from '../styles/main';

import sourceImg from '../images/google_icon.png';

import ListItem from './listitem'

export default class ListViewComponent extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ]
    };

    this.getList = this.getList.bind(this);
  }

  getList() {
    if(this.state.dataSource){
      return this.state.dataSource.map(
        (data, key) =>
          <ListItem
            style={styles.listItemContainer}
            key={key}
            data={data}/>
      )
    }
    else {
      return null;
    }
  }


  render() {


    return (
      <Container style={styles.listContainer}>
        <Content>
          {this.getList()}
        </Content>
      </Container>
    );
  }
}
