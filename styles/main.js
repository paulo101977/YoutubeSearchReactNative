
import {
  StyleSheet,
  Dimensions
} from 'react-native'

//get the Dimensions
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height;

const styles =   StyleSheet.flatten({
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
    padding: 0
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
});

module.exports =  styles;
