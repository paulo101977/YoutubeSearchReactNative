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

    this.renderItem = this.renderItem.bind(this);
  }
    

  renderItem() {
      
    const {data} = this.props;
    const {dataSource} = this.state;
      
     const dataSet = (data) ? data : dataSource;
      
    if(dataSource){
      return dataSet.map(
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
          {this.renderItem()}
        </Content>
      </Container>
    );
  }
}
