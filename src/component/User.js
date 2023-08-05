import {Text, View, FlatList} from 'react-native';
import styles from './style';
import {ImageView} from './FastImage';
import Images from '../constant/Images';
import String from '../constant/String';
import {PrintLog} from '../constant/PrintLog';

const User = props => {
  const {name, login, avatarUrl, bio, followers, following} = props.data;
  return (
    <View style={styles.userMainView}>
      <View style={styles.userHorizontalView}>
        <ImageView
          source={
            avatarUrl && avatarUrl != null ? {uri: avatarUrl} : Images.userImage
          }
          style={styles.userImage}
        />
        <View style={styles.fullView}>
          <Text style={styles.name}>{name && name != null ? name : ''}</Text>
          <Text style={styles.userName}>
            {login && login != null ? login : ''}
          </Text>
          <Text style={styles.userBio}>{bio && bio != null ? bio : ''}</Text>
        </View>
      </View>

      <View style={styles.followView}>
        <View style={styles.userHorizontalView}>
          <Text style={styles.followers}>
            {(followers && followers.totalCount ? followers.totalCount : 0) +
              ' ' +
              String.followers}
          </Text>
        </View>
        <View style={styles.userHorizontalView}>
          <Text style={styles.followers}>
            {String.following +
              ' ' +
              (following && following.totalCount ? following.totalCount : 0)}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default User;
