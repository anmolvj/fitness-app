//Import libraries for Component
import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { ListItem, Card, List } from 'react-native-elements';



import LogListItem from './LogListItem';




//make a Component
class LoggedFoodList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            
            <List containerStyle={styles.containerStyle} >
                {this.props.data.map((item, i) => {
                    return (
                        <ListItem
                            onPress={() => { item.onClick() }}
                            key={i}
                            title={item.title}
                            subtitle={item.brand}
                            titleStyle={styles.titleStyle}
                            subtitleStyle={styles.subtitleStyle}
                            hideChevron={true}
                            badge={
                                {
                                    value: item.calories,
                                    textStyle: styles.badgeTextStyle,
                                    containerStyle: styles.badgeContainerStyle
                                }}
                        />
                    )
                })}
            </List>
        );
    }

}



const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#333333',
        paddingLeft: 10
    },
    headerText: {
        fontSize: 13,
        fontWeight: "bold",
        color: "white"
    },
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

});
//make the component available to other parts of the application
export default LoggedFoodList;
