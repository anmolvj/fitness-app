import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import MyFoodList from './MyFoodList';



class EnhancedNutrientModal extends React.Component {

  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.object,
      getNutrient: PropTypes.json,
    }).isRequired,
  }

  render() {
    if (this.props.data.error) {
      console.log(this.props.data.error.message)
      return (<View ><Text>An unexpected error occurred</Text></View>)
    }

    if (this.props.data.loading || !this.props.data.getNutrient) {

      return (
        <View><Text>Still Loading</Text></View>
      )
    }
    console.log(this.props.data.getNutrient);
    return (
      <View>
        <Text>{JSON.stringify(this.props.data.getNutrient, null, 2)}</Text>
      </View>
    );
  }

}

const Query = gql`
  query Query($yield: Int!, $quantity: Int!, $uri: String!, $measure: String!) {
    getNutrient(yield: $yield, quantity: $quantity, uri: $uri, measure: $measure) {
        data
    }}`

const NutrientModal = graphql(Query, {
  options: (ownProps) => ({
    variables: {
      yield: ownProps.yield,
      quantity: ownProps.quantity,
      uri: ownProps.uri,
      measure: ownProps.measure
    }
  })
}
)(EnhancedNutrientModal)

export default NutrientModal;


