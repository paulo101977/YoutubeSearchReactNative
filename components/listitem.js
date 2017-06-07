



import React, { Component } from 'react';
import {
    AppRegistry,
    ListView,
    View,
    Animated, //start animation from here
    Image,
    Easing,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/FontAwesome';

//import styles from '../styles/main';

import sourceImg from '../images/google_icon.png';

export default class ListItemComponent extends Component {

  // Initialize the hardcoded data
  constructor(props) {
    super(props);

    this.state = {
      fadeAnim: new Animated.Value(0),
    };

    this._handleClick = this._handleClick.bind(this);

  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 1000,
      }
    ).start();
  }

  _handleClick(data){
    const {full_name , description, owner} = data;

    Actions.item({data:data , title: full_name})
  }

  render() {

    const {data} = this.props;
    const {full_name , description} = data;
    const {avatar_url} = data.owner;

    return (
        <View>
          {/* TODO: create generic component here (topbar)*/}
          <Animated.View style={{opacity:this.state.fadeAnim }}>
            <TouchableOpacity
              onPress={()=>{this._handleClick(data)}}
              activeOpacity={0.2}>
              <View style={styles.container}>
                <Image
                  style={styles.image}
                  source={{uri: avatar_url}}  />
                <View style={styles.textContainer}>
                  <Text style={styles.title}>{full_name}</Text>
                  <Text style={styles.description}>{description}</Text>
                </View>

              </View>
            </TouchableOpacity>
          </Animated.View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 4,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    margin: 4,
    maxHeight: 120,
  },
  image: {
    width: 100,
    height: 100,
  },
  textContainer: {
    padding: 10,
    flex: 1,
    flexWrap: "wrap"
  },
  title: {
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 10,
    color: "black",
    flex: 1,
    flexWrap: "wrap",
  },
  description: {
    flex: 1,
    flexWrap: "wrap",
  }
})
