

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';


//import main component root
import YoutubeSearchComponent from './components/YoutubeSearchComponent';
import YoutubeItem from './components/YoutubeItem';


//change navigator to router flux plugin
import {Scene, Router} from 'react-native-router-flux';

export default class App extends Component {

    constructor(props){
        super(props);

    }

    render() {
      return (
        <Router sceneStyle={{ backgroundColor: 'white' }}>
          <Scene hideNavBar={true} key="root">
            <Scene key="home" component={YoutubeSearchComponent} initial={true} title="Home"/>
            <Scene key="item" component={YoutubeItem} title="Item"/>
          </Scene>
        </Router>
      );
    }
}

//register the main componet
AppRegistry.registerComponent('YoutubeSearch', () => App);
