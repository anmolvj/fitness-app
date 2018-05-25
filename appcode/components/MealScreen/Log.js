import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

import LoggedFood from './LoggedFood';

class Log extends React.Component {

    static propTypes = {
        data: PropTypes.shape({
            loading: PropTypes.bool,
            error: PropTypes.object,
            findLog: PropTypes.object,
        }).isRequired,
    }

    constructor(props) {
        super(props);
        this.handleAddFood = this.handleAddFood.bind(this);
    }

    handleAddFood(mealName) {
        console.log(`Adding food to $(mealName)`);
    }

    render() {
        if (this.props.data.error) {
            console.log(this.props.data.error)
            return (<View >
                <LoggedFood />
                <Text>An unexpected error occurred</Text>
            </View>)
        }

        if (this.props.data.loading || !this.props.data.findLog) {
            return (
                <View><LoggedFood /><Text>Loading</Text></View>
            )
        }

        if (!this.props.userId) {
            return (
                <View><LoggedFood /><Text>User Not Found</Text></View>
            )
        }

       

        return (
            <View>
                <LoggedFood testData={"pokemon"}/>
               
            </View>
        );
    }
}


const styles = StyleSheet.create({
    textStyle: {

    }
});

const Query = gql`
  query Query($userId: String!) {
    findLog(userId: $userId) {
      breakfast,
      lunch,
      dinner
    }}`

const Logger = graphql(Query, {
    options: (ownProps) => ({
        variables: {
            userId: ownProps.userId
        }
    })
}
)(Log)

export default Logger;