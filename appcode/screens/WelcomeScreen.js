import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { Button } from 'react-native-elements';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { WebBrowser } from 'expo';



export default class WelcomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    }
    handleLogin = () => {
        this.props.navigation.navigate("Login");
    }
    handleSignUp = () => {
        this.props.navigation.navigate("Signup");
    }

    render() {
        const { navigate } = this.props.navigation;
        
        return (
            <View style={styles.mainContainer}>

                <View style={styles.logoContainer}>

                </View>

                <View style={styles.formContainer}>
                    <View>
                        <Button
                            text="Login"
                            buttonStyle={{ width: 300, height: 70, backgroundColor: '#ff4d4d' }}
                            textStyle={{
                                fontSize: 20
                            }}
                            onPress={this.handleLogin}
                            icon={
                                <EntypoIcon
                                    name={'user'}
                                    size={35}
                                    color='white'
                                />
                            }
                            iconRight

                        />
                    </View>
                    <View>
                        <Button
                            text="Signup"
                            raised
                            buttonStyle={{
                                width: 300,
                                backgroundColor: '#6699ff',
                                height: 70,
                                marginTop: 30
                            }}
                            textStyle={{
                                fontSize: 20
                            }}
                            onPress={this.handleSignUp}
                            icon={
                                <EvilIcons
                                name={'pencil'}
                                size={50}
                                color={'white'}
                            />}
                            iconRight


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
    formContainer: {
        marginTop: 400
    },
});
