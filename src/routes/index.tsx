import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Produto from '../screens/Product';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />
            <Navigator >
                <Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
                <Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
                <Screen name="Produto" component={Produto}/>
            </Navigator>
        </NavigationContainer>
    );
}