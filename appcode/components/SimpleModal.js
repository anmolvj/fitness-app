//Import libraries for Component
import React from 'react';
import { Text, View } from 'react-native';
import { List, ListItem, Card, Divider, Icon } from 'react-native-elements'
import ListItemWithLeftIcon from './ListItemWithLeftIcon';
//make a Component
const SimpleModal = ({ data}) => {
  const {  
    name,
    brand,
    calorie,
    fat,
    fat_saturated,
    fat_monosaturated,
    fat_polyunsaturated,
    cholestrol,
    sodium,
    carbohydrate,
    fiber_dietary,
    sugar,
    protien,
    vitamin_a_percentage,
    vitamin_c_percentage,
    calcium,
    potassium
  } = data;

  const items = [
    {
    title: "Calorie",
    lefticon: {name: "energy" , type: "simple-line-icon", color:"#009C8A"},
    value: calorie
  },
  {
    title: "Fat",
    lefticon: {name: "drop" , type: "entypo", color:"#E8A400"},
    value: fat
  },
  {
    title: "Saturated Fat",
    lefticon: {name: "drop" , type: "entypo", color:"#E8A400"},
    value: fat_saturated
  },
  {
    title: "Monosaturated Fat",
    lefticon: {name: "drop" , type: "entypo", color:"#E8A400"},
    value: fat_monosaturated
  },
  {
    title: "Polyunsaturated Fat",
    lefticon: { name: "drop" , type: "entypo", color:"#E8A400"},
    value: fat_polyunsaturated
  },
  {
    title: "Cholestrol",
    lefticon: {name: "heart" , type: "material-community", color:"#6E0000"},
    value: cholestrol
  },
  {
    title: "Sodium",
    lefticon: {name: "heartbeat" , type: "font-awesome", color:"#FF0057"},
    value: sodium
  },
  {
    title: "Carbohydrate",
    lefticon: {name: "fire" , type: "material-community", color:"#FF2E00"},
    value: carbohydrate
  },
  {
    title: "Dietary Fiber",
    lefticon: {name: "food-apple" , type: "material-community", color: "#CF0000"},
    value: fiber_dietary
  },
  {
    title: "Sugar",
    lefticon: {name: "candycane" , type: "material-community", color:"#DD0000"},
    value: sugar
  },
  {
    title: "Protien",
    lefticon: {name: "ios-egg" , type: "ionicon", color:"#D9B594"},
    value: protien
  },
  {
    title: "Vitamin A",
    lefticon: {name: "pill" , type: "material-community", color:"#AC00B1"},
    value: vitamin_a_percentage+"%"
  },
  {
    title: "Vitamin C",
    lefticon: {name: "pill" , type: "material-community", color:"#00B5D4"},
    value: vitamin_c_percentage+"%"
  },
  {
    title: "Calcium",
    lefticon: {name: "bone" , type: "material-community", color:"#DECDB0"},
    value: calcium
  },
  {
    title: "Potassium",
    lefticon: {name: "fire" , type: "simple-line-icon"},
    value: potassium
  }

]

  return (
  <View >
    <Card title={name}>
    <Text style={{textAlign: "center"}}>{brand}</Text>
    
      {items.map((v,i)=>{
        return (
          <ListItemWithLeftIcon
            title={v.title}
            lefticon={v.lefticon}
            key={i}
            hideChevron={true}
            badgeValue={v.value}
          />
        )
      })}

    </Card>
  </View>
  );
};


//make the component available to other parts of the application
export default SimpleModal;
