import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes from '../constant/StaticRoute';
import Landing from '../screens/landing';
import Users from '../screens/users';
import UserDetails from '../screens/userdetails';

const Stack = createNativeStackNavigator();
const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Routes.landingRoute}
          component={Landing}></Stack.Screen>

        <Stack.Screen name={Routes.userRoute} component={Users}></Stack.Screen>

        <Stack.Screen
          name={Routes.userDetailsRoute}
          component={UserDetails}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
