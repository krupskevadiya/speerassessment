import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StaticRoute from '../constant/StaticRoute';
import users from '../screens/users';
import userdetails from '../screens/userdetails';
import landing from '../screens/landing';

const Stack = createNativeStackNavigator();
const AppRoute = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={StaticRoute.landingRoute}
          component={landing}></Stack.Screen>

        <Stack.Screen
          name={StaticRoute.userRoute}
          component={users}></Stack.Screen>

        <Stack.Screen
          name={StaticRoute.userDetailsRoute}
          component={userdetails}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoute;
