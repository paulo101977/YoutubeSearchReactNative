



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



//import styles from '../styles/main';

import Icon from 'react-native-vector-icons/FontAwesome';

import {Actions} from 'react-native-router-flux';

export default class YoutubeItem extends Component {

  // Initialize the hardcoded data
  constructor(props) {
    super(props);


  }

  _goBack(){
    Actions.pop();
  }

  render() {

    const {data} = this.props;
    const {full_name , description} = data;
    const {avatar_url} = data.owner;

    return (
      <View style={styles.container}>
        <View style={styles.topbar}>
            <TouchableOpacity
              onPress={()=>{this._goBack()}}
              activeOpacity={0.2}>
                <Icon name="chevron-left" size={30} color="white"/>
            </TouchableOpacity>
        </View>
          <View style={styles.content}>
            <Image
              style={styles.image}
              source={{uri: avatar_url}}  />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{full_name}</Text>
              <Text style={styles.description}>{description}</Text>
            </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 4,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    margin: 4,
    maxHeight: 120,
  },
  topbar: {
    flex: 1,
    maxHeight: 60,
    backgroundColor: '#E62117',
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
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
