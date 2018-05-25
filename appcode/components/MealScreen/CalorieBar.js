//Import libraries for Component
import React from 'react';
import { Text, View } from 'react-native';
import { ListItem, List } from 'react-native-elements';
import { Bar } from 'react-native-progress';

//make a Component
const CalorieBar = ({ consumed, goal }) => {
    const {
        containerStyle,
        headerContainer,
        calorieContainer,
        textContainer,
        totalText,
        goalText,
        leftText,
        totalContainer,
        goalContainer,
        leftContainer,
        calorieText,
        bold,
        small
    } = styles;

    var remaining = goal - consumed;
    var progress = remaining > 0 ? (remaining / goal) : 1;
    return (

        <View style={containerStyle}>


            <View style={headerContainer}>
                <View style={calorieContainer}>
                    <Text style={styles.calorieText} >Calories</Text>
                </View>

                <View style={textContainer}>
                    <View style={styles.totalContainer} >
                        <Text style={styles.totalText} >
                            <Text style={styles.bold}>Total  </Text>
                            <Text style={styles.small}>{consumed}</Text>
                        </Text>
                    </View>
                    <View style={styles.goalContainer} >
                        <Text style={styles.goalText} >
                            <Text style={styles.bold}>Goal  </Text>
                            <Text style={styles.small}>{goal}</Text>
                        </Text>
                    </View>
                    <View style={styles.leftContainer} >
                        <Text style={styles.leftText} >
                            <Text style={styles.bold}>Left  </Text>
                            <Text style={styles.small}>{remaining}</Text>
                        </Text>
                    </View>
                </View>
            </View>


            <Bar
                progress={progress}
                width={null}
                borderWidth={0}
                borderRadius={0}
                color={"#6699ff"}
                unfilledColor={"#a6a6a6"}
            />
        </View>

    );
};


const styles = {
    small: {
        fontSize: 10
    },

    bold: {
        fontWeight: "bold",
        fontSize: 14
    },
    containerStyle: {
        flex: 1,
        flexDirection: "column",
        padding: 10,
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    calorieContainer: {
    },
    textContainer: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
    },

    totalContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: "center"
    },
    goalContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: "center"
    },
    leftContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: "center",
    },

    calorieText: { fontSize: 25 },
    totalText: {},
    goalText: {},
    leftText: {},

};
//make the component available to other parts of the application
export default CalorieBar;
