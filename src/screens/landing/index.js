import React, {useEffect} from 'react';
import {View} from 'react-native';
import styles from './style';
import StaticRoute from '../../constant/StaticRoute';

const Landing = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate(StaticRoute.userRoute);
    }, 1000);
  });

  return <View style={{backgroundColor: 'pink', flex: 1}}></View>;
};
export default Landing;
