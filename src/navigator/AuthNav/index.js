

import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CardStyleInterpolators } from '@react-navigation/stack';

import LoginScreen from '../../screens/Auth/LoginScreen';
import RegisterScreen from '../../screens/Auth/RegisterScreen';
import { Header } from '../../components';
import ForgetPasswordScreen from '../../screens/Auth/ForgetPasswordScreen';

const Stack = createStackNavigator();

export default class AuthNav extends Component {
    render() {
        return (
            <Stack.Navigator
                headerMode="none"
                screenOptions={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    header: ({ scene, previous, navigation }) => {
                        const { options } = scene.descriptor;
                        const title =
                            options.headerTitle !== undefined
                                ? options.headerTitle
                                : options.title !== undefined
                                    ? options.title
                                    : scene.route.name;

                        return (
                            <Header
                                title={title}
                                previous={previous}
                                navigation={navigation}
                            />
                        );
                    },
                }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Forget" component={ForgetPasswordScreen} />
            </Stack.Navigator>
        );
    }
}
