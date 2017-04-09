



import React, { Component } from 'react';
import { 
    AppRegistry, 
    ListView, 
    View, 
    Animated, //start animation from here
    Image,
    Easing,
} from 'react-native';

import {
  Text,
  Card,
  CardItem,
  Container,
  Content,
  Right,
  Left,
  Body,
  ListItem,
} from 'native-base';

import styles from '../styles/main';

import sourceImg from '../images/google_icon.png';

export default class ListItemComponent extends Component {
    
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
      
    this.state = {
      fadeAnim: new Animated.Value(0),
    };

  }

  componentDidMount() {
    Animated.timing(                            
      this.state.fadeAnim,                 
      {
        toValue: 1,  
        duration: 2000,
      }
    ).start();               
  }

  render() {

    const {full_name} = this.props.data;
    const {avatar_url} = this.props.data.owner;

    return (
        <Animated.View style={this.props.style , {height: 100 , opacity:this.state.fadeAnim }}>
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
        </Animated.View>
    );
  }
}
