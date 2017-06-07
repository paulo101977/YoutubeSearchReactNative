

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Alert,
  View,
  TextInput, //exclude this
  Navigator, /* Test for navigator, over the Navigation */
  TouchableHighlight, //add touch effect
  Button,
  Dimensions,
} from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';

//import the navigation component
import {
  StackNavigator,
} from 'react-navigation';

//import main component root
import YoutubeSearchComponent from './components/YoutubeSearchComponent';

//the Tooltip
import Tooltip from './components/tooltip';

//the loading screen
import LoadingScreen from './components/loadingscreen';

//var ToolTip = require('react-native-tooltip');

//import styles from './styles/main';

//other router component
/* const App = StackNavigator({
  Main: {screen: YoutubeSearchHome}
}); */

export default class App extends Component {

  constructor(props){
      super(props);

      this.state = {
        loading: false,
        dataSource: []
      }

      //bind methods:
      this._setLoading = this._setLoading.bind(this);
      this._renderMain = this._renderMain.bind(this);
      this._openModal = this._openModal.bind(this);
      this._closeModal = this._closeModal.bind(this);
      this._renderRight  = this._renderRight.bind(this);
      this._renderLeft = this._renderLeft.bind(this);
      this._loadinData = this._loadinData.bind(this);
  }

   _alert(){
       Alert.alert(
          'Alert Title',
          'My Alert Msg',
          [
            {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
        )
   }

  _loadinData(){

    this._openModal();

    fetch('https://api.github.com/search/repositories?q=tetris')
    .then((response) => response.json())
    .then((responseJson) => {
    //return responseJson.movies;
    //this._alert();
      const { items } = responseJson;

      //console.log(items)

      setInterval(() => {
          this._closeModal();
          this.setState({dataSource : items })
      } , 400)

    })
    .catch((error) => {
        console.error(error);
        this._alert();
    });
  }

  _renderLeft(){
      return (
          <View style={styles.containerElementsSearch}>
              <TextInput
                placeholderTextColor='#FFFFFF88'
                selectionColor="white"
                underlineColorAndroid="white"
                placeholder='Type your video...'
                style={styles.searchInput}/>
          </View>
        )
  }

  _renderRight(){
      return (
         <View style={styles.containerElementsButton}>
           <TouchableHighlight
             onPress={this._loadinData}
             activeOpacity={0.3}>
               <View
                 style={styles.searchButton}>
                 {/* Implemented with native-base */}
                 <Icon name="search" size={20} color="white" />
               </View>
           </TouchableHighlight>
        </View>
       );
  }

  _openModal(){
    this.refs.navigator.refs.loadingscreen._openModal();
  }

  _closeModal(){
    this.refs.navigator.refs.loadingscreen._closeModal();
  }

  _setLoading(){
    this.setState({loading: !this.state.loading})
  }

  _renderMain(data , navigator){
    return(
      <View style={{flex:1}}>
          <YoutubeSearchComponent navigator={navigator} data={data} />
          <LoadingScreen ref={'loadingscreen'}/>
      </View>
    )
  }

  render() {
      const routes = [
        {title: 'Home', index: 0},
        {title: 'Item', index: 1},
      ];

      //set the navigation bar
       const _self = this;

       //console.log('navigator')
       //console.log(this.refs.navigator)

       //const navigator = this.refs.navigator;

      return (

        <Navigator
          ref={'navigator'}
          initialRoute={routes[0]}
          initialRouteStack={routes}
          renderScene={(route, navigator) =>{
              if(route.index == 0)
                return _self._renderMain(this.state.dataSource , navigator)
              else {
                return <View></View>
              }
            }
          }
          navigationBar={
             <Navigator.NavigationBar
               routeMapper={{
                 LeftButton: (route, navigator, index, navState) =>
                  {
                    if(route.index == 0)
                        return _self._renderLeft()
                    else{
                        return <View style={styles.backButton}>
                                  <Icon
                                    onPress={()=>{navigator.pop()}}
                                    name="chevron-left" size={20} color="white" />
                                </View>
                    }
                  },
                 RightButton: (route, navigator, index, navState) =>
                   {
                     if(route.index == 0) return _self._renderRight()
                     else return null;
                   },
                 Title: (route, navigator, index, navState) =>
                   {
                      if(route.index == 0)
                          return null;
                      else{
                        return
                          <Text>
                            {route.title}
                          </Text>
                    }
                   },
               }}
               style={styles.searchContainer}/>
          }
          style={{padding: 1}}
        />
      );
    }
  }

//register the main componet
AppRegistry.registerComponent('YoutubeSearch', () => App);

//get the Dimensions
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height;

const styles = StyleSheet.create({
  input: {
    width: width,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  tooltip: {
    height: 30,
    flex: 1,
    marginVertical: 2,
    marginHorizontal: 2,
    borderLeftWidth: 3,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 5,
    borderLeftColor: '#c7c7cc',
    padding: 2,
    fontSize: 14,
    backgroundColor: 'white',
    position: "absolute",
    top: 60,
    left: 20
  },
  searchContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: 'red'
  },
  containerElementsSearch: {
    flex: 4,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  containerElementsButton: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  searchInput :{
    width: width - 60,
    height: 40,
    borderWidth: 0,
    color: 'white',
    fontFamily: 'Times',
    fontSize: 20,
    fontWeight: 'bold'
  },
  searchButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 6,
    padding: 0,
    paddingLeft: 6,
    paddingRight: 6,
  },
  backButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 6,
    padding: 0,
    paddingLeft: 6,
    paddingRight: 6,
    width: 40,
    height: 40,
  },
  title:{

  },
  searchButtonText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Times',
  },
  listContainer:{
    marginTop: 60,
    //height: height - 60, //max height of screen minus 60
  },
  listItemContainer:{
    height: 100,
    //borderBottomWidth: 1,
    //borderBottomColor: 'black',
    //marginBottom: 3,
  },
  listItemThumb: {
    width: 80,
    height: 80,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    width: width,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
