import styles from './style';
import {View, Text, TouchableOpacity} from 'react-native';
import Dimen from '../constant/Dimen';
import {ImageView} from './FastImage';
import Images from '../constant/Images';

export const Toolbar = props => {
  return (
    <View style={styles.toolBar}>
      {props.isBackArrowDisplay ? (
        <TouchableOpacity
          style={styles.backViewStyle}
          onPress={props.onBackPress}>
          <ImageView
            style={styles.backImage}
            source={Images.backArrow}></ImageView>
        </TouchableOpacity>
      ) : null}
      <Text style={styles.toolBarTitle}>{props.title}</Text>
    </View>
  );
};
