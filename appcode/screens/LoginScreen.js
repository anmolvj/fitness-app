import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View, AsyncStorage } from 'react-native';
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
    email: Email,
    password: t.String,
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
            placeholder: 'abc@gmail.com',
            error: 'Invalid Email'
        },
        password: {
            placeholder: '********',
            error: 'Enter a valid String'
        }
    },
    stylesheet: formStyles,
};



class LoginPage extends React.Component {
    static navigationOptions = {
        title: 'Login',

    }

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.setUserId = this.setUserId.bind(this);
    }

    setUserId = (value) => {
        try {
            AsyncStorage.setItem('@UserId', value);
        } catch (error) {
            console.log("Error saving data" + error);
        }
    }

    onSubmit = (value) => {
        this.props.mutate({
            variables: {
                email: value.email,
                password: value.password
            }
        })
            .then(({ data }) => {
                console.log('I received this data --->', data.signinUser.user.id);
                this.setUserId(data.signinUser.user.id);
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
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
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
                            text='Log In'
                            onPress={this.handleSubmit}
                        />
                    </View>


                </View>
            </View>
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
  mutation Mutation($email: String!, $password: String!) {
    signinUser(email: { email: $email, password: $password }) {
      user{
          id
      }
    }
  }
`
const LoginScreen = graphql(Mutation)(LoginPage);

export default LoginScreen;