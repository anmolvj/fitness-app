//Import libraries for Component
import React from 'react';
import { Text, View } from 'react-native';
import PureChart from 'react-native-pure-chart';

//make a Component
const WeightChart = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={{
            
          }}>
            <PureChart
                data={props.data}
                type='line'
                width={'100%'}
                height={300}
                
            />

        </View>
    );
};

const styles = {
    textStyle: {},
    viewStyle: {}
};
//make the component available to other parts of the application
export default WeightChart;
