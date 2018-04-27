//Import libraries for Component
import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { List, ListItem, Card, Divider, Icon } from 'react-native-elements'

//make a Component
const ListItemWithLeftIcon = ({ title, lefticon, hideChevron, badgeValue }) => {
    
const { badgeTextStyle, badgeContainerStyle } = styles;

const badgeData = {};
badgeData.value = badgeValue
badgeData.textStyle = badgeTextStyle;
badgeData.containerStyle = badgeContainerStyle;

console.log(badgeData);
  return (
        <View >
            <ListItem
                        title={title}
                        leftIcon={lefticon}
                        hideChevron={hideChevron}
                        badge={badgeData}
                    />
        </View>
  );
};

const styles = StyleSheet.create({
    badgeTextStyle: {
        color: 'white',
    },
    badgeContainerStyle: {
        marginTop: 0,
        backgroundColor: "grey",
        width: 100 
    }
  });


//make the component available to other parts of the application
export default ListItemWithLeftIcon;
