import React, {useEffect} from 'react';
import {View} from 'react-native';
import styles from './style';
import Routes from '../../constant/StaticRoute';

export const Landing = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate(Routes.userRoute);
    }, 1000);
  });

  return <View style={{backgroundColor: 'pink', flex: 1}}></View>;
};
