//Import libraries for Component
import React from 'react';
import { Text, View } from 'react-native';

//make a Component
const NutrientData = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
  <View style={viewStyle}>
    <Text style={textStyle}>{props.text}</Text>
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
    position: 'relative'
  },
  textStyle: {
    fontSize: 13,
    fontFamily: 'space-mono'
  }
};
//make the component available to other parts of the application
export default NutrientData;
