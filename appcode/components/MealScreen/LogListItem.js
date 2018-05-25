//Import libraries for Component
import React from 'react';
import { Text, View } from 'react-native';
import { ListItem, List } from 'react-native-elements';

//make a Component
const LogListItem = (props) => {
    const {
        titleStyle,
        subtitleStyle,
        badgeTextStyle,
        badgeContainerStyle,
        containerStyle
    } = styles;

    var listData = [{
        "title": "Banana",
        "brand": "Organics",
        "calories": "115"
    },
    {
        "title": "Biscuit",
        "brand": "Ritz",
        "calories": "80"
    }];
    console.log("loglistitem -> " + props.testData);
    return (

        <List containerStyle={containerStyle} >
            {listData.map((item, i) => {
                return (
                    <ListItem
                        onPress={() => { return }}
                        key={i}
                        title={item.title}
                        subtitle={item.brand}
                        titleStyle={titleStyle}
                        subtitleStyle={subtitleStyle}
                        hideChevron={true}
                        badge={
                            {
                                value: item.calories,
                                textStyle: badgeTextStyle,
                                containerStyle: badgeContainerStyle
                            }}
                    />
                )
            })}
        </List>

    );
};

const styles = {
    containerStyle: {
        marginTop: 0
    },
    titleStyle: {
        fontSize: 15
    },
    subtitleStyle: {
        fontSize: 10
    },
    badgeTextStyle: {
        color: 'white',
    },
    badgeContainerStyle: {
        backgroundColor: "grey"
    }
};
//make the component available to other parts of the application
export default LogListItem;
