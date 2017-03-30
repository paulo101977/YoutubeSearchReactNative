import React, { Component } from 'react';
import { View, Text} from 'react-native';

import {Spinner, Container, Content} from 'native-base';


import styles from '../styles/main';


import Modal from 'react-native-modalbox';


export default class LoadingScreen extends Component {

  constructor(props){
    super(props);

    console.log('constructor')
  }

  componentDidMount() {
    console.log('open')
    this.refs.modal.open();
  }

  render() {
    return (

            <Modal
            backdrop={true}
            ref={'modal'}
            isOpen={true}

            style={[styles.container, {justifyContent: 'center',alignItems: 'center'}]}
            swipeToClose={false} >
              <View style={[styles.container , {flex:1,flexDirection: 'column', alignItems: 'center' , justifyContent: 'center'}]}>
                {/*<Content style={[styles.container , {flex:1}]}>*/}

                  <Text style={{fontSize: 30, color: 'black'}}>Test ...</Text>
                  <Spinner color='blue' />

                  {/*</Content>*/}
              </View>
            </Modal>

    );
  }
}
