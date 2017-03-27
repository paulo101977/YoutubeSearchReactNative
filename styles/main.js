
import {
  StyleSheet,
  Dimensions
} from 'react-native'

//get the width Dimensions
var width = Dimensions.get('window').width; //full width

const styles =   StyleSheet.flatten({
  input: {
    width: width,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
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
    width: 40,
    height: 40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 6,
    padding: 0
  },
  searchButtonText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Times',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});

module.exports =  styles;
