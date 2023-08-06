import React, {useEffect} from 'react';
import {View} from 'react-native';
import styles from './style';
import StaticRoute from '../../constant/StaticRoute';
import {ImageView} from '../../component/FastImage';
import Images from '../../constant/Images';

const Landing = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace(StaticRoute.userRoute);
    }, 1000);
  });

  return (
    <View style={styles.mainViewStyle}>
      <ImageView
        source={Images.splashImage}
        style={styles.imageView}></ImageView>
    </View>
  );
};
export default Landing;
