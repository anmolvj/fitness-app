import React from 'react';
import { Text, View } from 'react-native';
import { ListItem } from 'react-native-elements'

class MyFoodList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      brand: props.brand,
      food_uri: props.food_uri,
      calorie: props.calorie,
      elementkey: props.elementkey,
      item: props.item
    };
    
  }

  _handlePress(){	
    this.props.onPress(this.state.item);
}
  render() {
    return (
      <ListItem
          onPress={()=>{this._handlePress()}}
          key={this.state.elementkey}
          title={this.state.name}
          subtitle={this.state.brand}
          titleStyle={{fontSize: 15}}
          subtitleStyle={{fontSize: 10}}
          hideChevron={true}
          badge={
            { value: this.state.calorie, 
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
