import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StaticRoute from '../constant/StaticRoute';
import users from '../screens/users';
import userdetails from '../screens/userdetails';
import landing from '../screens/landing';
import follow from '../screens/followers';
import following from '../screens/followings';

const Stack = createNativeStackNavigator();
const AppRoute = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={StaticRoute.landingRoute}
          component={landing}
          options={{headerShown: false}}></Stack.Screen>

        <Stack.Screen
          name={StaticRoute.userRoute}
          component={users}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name={StaticRoute.followersRoute}
          component={follow}
          options={{headerShown: false}}></Stack.Screen>

        <Stack.Screen
          name={StaticRoute.followingRoute}
          component={following}
          options={{headerShown: false}}></Stack.Screen>

        <Stack.Screen
          name={StaticRoute.userDetailsRoute}
          component={userdetails}
          options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoute;
