//Import libraries for Component
import React from 'react';
import { Text, View } from 'react-native';
import { ListItem, List } from 'react-native-elements';


//make a Component
const MealDate = ({ date }) => {
    const {
        titleContainerStyle,
        subtitleContainerStyle
    } = styles;

    return (

        <View >
            <ListItem
                title={"Today"}
                leftIcon={{name: "chevron-left"}}
                subtitle={"May 24, 2018"}
                titleContainerStyle={titleContainerStyle}
                subtitleContainerStyle={subtitleContainerStyle}
                leftIconOnPress={()=>{return}}
                onPressRightIcon={()=>{return}}
            />
        </View>

    );
};


const styles = {
    titleContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    subtitleContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    }
};
//make the component available to other parts of the application
export default MealDate;
