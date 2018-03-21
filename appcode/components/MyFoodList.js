import React from 'react';
import { Text, View } from 'react-native';
import { ListItem } from 'react-native-elements'

class MyFoodList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      food_uri: props.food_uri,
      measure: props.measure,
      elementkey: props.elementkey,
    };
    
  }

  _handlePress(){	
    this.props.onPress(this.state.food_uri);
}
  render() {
    return (
      <ListItem
          onPress={()=>{this._handlePress()}}
          key={this.state.elementkey}
          title={this.state.title}
          subtitle={"Serving Size"}
          titleStyle={{fontSize: 15}}
          subtitleStyle={{fontSize: 10}}
          hideChevron={true}
          badge={
            { value: this.state.measure, 
              textStyle: { 
                color: 'white', 
              }, 
              containerStyle: { 
                marginTop: 0,
                backgroundColor: "grey" 
              } }}
              />
    );
}
};

export default MyFoodList;
