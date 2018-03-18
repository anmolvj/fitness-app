//Import libraries for Component
import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

//make a Component
const SearchBar = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
  <View style={viewStyle}>

  <Ionicons name="md-checkmark-circle" size={32} color="green" />

    <Text style={textStyle}>Some text from props</Text>
  </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 1,
    position: 'relative',
    display: 'flex',

  },
  textStyle: {
    fontSize: 13,
    fontFamily: 'space-mono'
  }
};
//make the component available to other parts of the application
export default SearchBar;
