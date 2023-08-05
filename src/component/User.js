import {Text, View} from 'react-native';
import styles from './style';
import {FastImage} from './FastImage';

export const User = props => {
  return (
    <View style={styles.userMainView}>
      <FastImage style={styles.userImage} source={props.image}></FastImage>
    </View>
  );
};
