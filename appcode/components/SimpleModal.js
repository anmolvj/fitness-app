//Import libraries for Component
import React from 'react';
import { Text, View } from 'react-native';
import { List, ListItem, Card, Divider, Icon } from 'react-native-elements'

//make a Component
const SimpleModal = ({ data }) => {


  return (
  <View >
    <Card title={data.name}>
    <Text style={{textAlign: "center"}}>{data.brand}</Text>
         
            <ListItem
                title="calorie"
                leftIcon={{ name: "energy" , type: "simple-line-icon", color:"#009C8A"}}
                hideChevron={true}
                badge={
                  { value: data.calorie, 
                    textStyle: { 
                      color: 'white', 
                    }, 
                    containerStyle: { 
                      marginTop: 0,
                      backgroundColor: "grey",
                      width: 100 
                    } }}
              />
              <ListItem
                title="fat"
                leftIcon={{ name: "drop" , type: "entypo", color:"#E8A400"}}
                hideChevron={true}
                badge={
                  { value: data.fat, 
                    textStyle: { 
                      color: 'white', 
                    }, 
                    containerStyle: { 
                      marginTop: 0,
                      backgroundColor: "grey" ,
                      width: 100
                    } }}
              />

              <ListItem
                title="saturated fat"
                leftIcon={{ name: "drop" , type: "entypo", color:"#E8A400"}}
                hideChevron={true}
                badge={
                  { value: data.fat_saturated, 
                    textStyle: { 
                      color: 'white', 
                    }, 
                    containerStyle: { 
                      marginTop: 0,
                      backgroundColor: "grey" ,
                      width: 100
                    } }}
              />
              <ListItem
                title="monosaturated fat"
                leftIcon={{ name: "drop" , type: "entypo", color:"#E8A400"}}
                hideChevron={true}
                badge={
                  { value: data.fat_monosaturated, 
                    textStyle: { 
                      color: 'white', 
                    }, 
                    containerStyle: { 
                      marginTop: 0,
                      backgroundColor: "grey" ,
                      width: 100
                    } }}
              />
              <ListItem
                title="polyunsaturated fat"
                leftIcon={{ name: "drop" , type: "entypo", color:"#E8A400"}}
                hideChevron={true}
                badge={
                  { value: data.fat_polyunsaturated, 
                    textStyle: { 
                      color: 'white', 
                    }, 
                    containerStyle: { 
                      marginTop: 0,
                      backgroundColor: "grey" ,
                      width: 100
                    } }}
              />

              <ListItem
                title="cholestrol"
                leftIcon={{ name: "heart" , type: "material-community", color:"#6E0000"}}
                hideChevron={true}
                badge={
                  { value: data.cholestrol, 
                    textStyle: { 
                      color: 'white', 
                    }, 
                    containerStyle: { 
                      marginTop: 0,
                      backgroundColor: "grey" ,
                      width: 100
                    } }}
              />

              <ListItem
                title="sodium"
                leftIcon={{ name: "heartbeat" , type: "font-awesome", color:"#FF0057"}}
                hideChevron={true}
                badge={
                  { value: data.sodium, 
                    textStyle: { 
                      color: 'white', 
                    }, 
                    containerStyle: { 
                      marginTop: 0,
                      backgroundColor: "grey" ,
                      width: 100
                    } }}
              />

              <ListItem
                title="carbohydrate"
                leftIcon={{ name: "fire" , type: "material-community", color:"#FF2E00"}}
                hideChevron={true}
                badge={
                  { value: data.carbohydrate, 
                    textStyle: { 
                      color: 'white', 
                    }, 
                    containerStyle: { 
                      marginTop: 0,
                      backgroundColor: "grey" ,
                      width: 100
                    } }}
              />

              <ListItem
                title="dietary fiber"
                leftIcon={{ name: "food-apple" , type: "material-community", color: "#CF0000"}}
                hideChevron={true}
                badge={
                  { value: data.fiber_dietary, 
                    textStyle: { 
                      color: 'white', 
                    }, 
                    containerStyle: { 
                      marginTop: 0,
                      backgroundColor: "grey" ,
                      width: 100
                    } }}
              />
         
              <ListItem
                title="sugar"
                leftIcon={{ name: "candycane" , type: "material-community", color:"#DD0000"}}
                hideChevron={true}
                badge={
                  { value: data.sugar, 
                    textStyle: { 
                      color: 'white', 
                    }, 
                    containerStyle: { 
                      marginTop: 0,
                      backgroundColor: "grey" ,
                      width: 100
                    } }}
              />

              <ListItem
                title="protien"
                leftIcon={{ name: "ios-egg" , type: "ionicon", color:"#D9B594"}}
                hideChevron={true}
                badge={
                  { value: data.protien, 
                    textStyle: { 
                      color: 'white', 
                    }, 
                    containerStyle: { 
                      marginTop: 0,
                      backgroundColor: "grey" ,
                      width: 100
                    } }}
              />

              <ListItem
                title="vitamin a"
                leftIcon={{ name: "pill" , type: "material-community", color:"#AC00B1"}}
                hideChevron={true}
                badge={
                  { value: data.vitamin_a_percentage+"%", 
                    textStyle: { 
                      color: 'white', 
                    }, 
                    containerStyle: { 
                      marginTop: 0,
                      backgroundColor: "grey" ,
                      width: 100
                    } }}
              />

              <ListItem
                title="vitamin c"
                leftIcon={{ name: "pill" , type: "material-community", color:"#00B5D4"}}
                hideChevron={true}
                badge={
                  { value: data.vitamin_c_percentage+"%", 
                    textStyle: { 
                      color: 'white', 
                    }, 
                    containerStyle: { 
                      marginTop: 0,
                      backgroundColor: "grey" ,
                      width: 100
                    } }}
              />

              <ListItem
                title="calcium"
                leftIcon={{ name: "bone" , type: "material-community", color:"#DECDB0"}}
                hideChevron={true}
                badge={
                  { value: data.calcium, 
                    textStyle: { 
                      color: 'white', 
                    }, 
                    containerStyle: { 
                      marginTop: 0,
                      backgroundColor: "grey" ,
                      width: 100
                    } }}
              />
           
              <ListItem
                title="potassium"
                leftIcon={{ name: "fire" , type: "simple-line-icon"}}
                hideChevron={true}
                badge={
                  { value: data.potassium, 
                    textStyle: { 
                      color: 'white', 
                    }, 
                    containerStyle: { 
                      marginTop: 0,
                      backgroundColor: "grey" ,
                      width: 100
                    } }}
              />
    </Card>
  </View>
  );
};


//make the component available to other parts of the application
export default SimpleModal;
