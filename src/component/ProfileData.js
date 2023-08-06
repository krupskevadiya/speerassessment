import {View, Text} from 'react-native';
import styles from './style';
import {ImageView} from './FastImage';

const ProfileData = props => {
  return (
    <View style={styles.profileMainView}>
      <ImageView source={props.source} style={styles.profileImage}></ImageView>
      <Text style={styles.profileText}>{props.text}</Text>
    </View>
  );
};
export default ProfileData;
