import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import t from 'tcomb-form-native';

const Form = t.form.Form;

const Email = t.subtype(t.String, (email) => {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
});


const User = t.struct({
    username: t.String,
    email: Email,
    password: t.String,
    weight: t.String,
    height: t.String,
});

const formStyles = {
    ...Form.stylesheet,
    controlLabel: {
        normal: {
            color: '#404040',
            fontSize: 18,
            marginBottom: 7,
            fontWeight: '600'
        },
        error: {
            color: '#ff4d4d',
            fontSize: 18,
            marginBottom: 7,
            fontWeight: '600'
        }
    },
    errorBlock: {
        fontSize: 12,
        marginBottom: 2,
        color: 'red'
    },
}

const options = {
    fields: {
        email: {
            placeholder: 'e.g. somegenericname@gmail.com',
            error: 'Enter a valid email'
        },
        password: {
            placeholder: '...keep it secret',
            error: 'Choose something you use on a dozen other sites or something you won\'t remember'
        },
        username: {
            placeholder: 'Pablo',
        },
        weight: {
            placeholder: 'Enter weight in pounds, eg: 157',
            error: 'Enter weight in pounds, eg: 157'
        },
        height: {
            placeholder: 'Enter height in centimeter, eg: 166',
            error: 'Enter height in centimeter, eg: 166'
        }
    },
    stylesheet: formStyles,
};


class SignupPage extends React.Component {
    static navigationOptions = {
        title: 'Sign Up'
    }
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit = (value) => {

        this.props.mutate({
            variables: { 
                username: value.username,
                email: value.email,
                password: value.password,
                weight: value.weight,
                height: value.height,
                date: "01-01-2018",
                activity:"ACTIVE",
                caloriegoal:2500,
                calorieTotal:2000,
                breakfast: "BREAKFAST",
                lunch: "LUNCH",
                dinner: "DINNER" 
            }
        })
        .then(({ data }) => {
            console.log('got data --->', data);
            this.props.navigation.navigate('Main');
        }).catch((error) => {
            console.log('there was an error sending the query', error);
        });
 
    }

    handleSubmit = () => {
        const value = this._form.getValue(); // use that ref to get the form value
        value == null ? console.log('validation failed') : this.onSubmit(value);

        //CODE TO CHECK LOGIN CREDENTIALS GOES HERE
    }

    render() {

        return (
            <ScrollView style={styles.container}>
                <View style={styles.mainContainer}>

                    <View style={styles.logoContainer}>

                    </View>

                    <View style={styles.formContainer}>
                        <Form
                            ref={c => this._form = c}
                            type={User}
                            options={options}
                        />
                        <Button
                            text='Sign Up'
                            onPress={this.handleSubmit}

                        />
                    </View>


                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    mainContainer: {
        flex: 1,
    },
    headerContainer: {
        backgroundColor: '#333333',
        paddingLeft: 10
    },
    logoContainer: {},
    formContainer: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    headerText: {
        fontSize: 13,
        fontWeight: "bold",
        color: "white"
    }
});



const Mutation = gql`
  mutation Mutation($username: String!, 
  $email: String!, 
  $password: String!, 
  $weight: String!, 
  $height: String!, 
  $date: String!,
  $activity: ActivityEnum,
  $caloriegoal: Int!,
  $calorieTotal: Int!,
  $breakfast: MealNameEnum,
  $lunch: MealNameEnum,
  $dinner: MealNameEnum

  ) {
    createUser( 
        authProvider: {email:{email:$email,password:$password}}, 
        username: $username, 
        weight: $weight, 
        height: $height,
        day: {
            date:$date,
            weight:$weight,
            activity:$activity,
            caloriegoal:$caloriegoal,
            calorieTotal:$calorieTotal,
            meals: [
                {
                    name:$breakfast,
                     },
                {
                    name:$lunch,
                    },
                {
                    name:$dinner,
                 }
            ]
        }){
    id
   }
    }
`
const SignupScreen = graphql(Mutation)(SignupPage);

export default SignupScreen;