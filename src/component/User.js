import {Text, View, TouchableOpacity} from 'react-native';
import styles from './style';
import {ImageView} from './FastImage';
import Images from '../constant/Images';
import String from '../constant/String';
import {PrintLog} from '../constant/PrintLog';

const User = props => {
  const {id, name, login, avatarUrl, bio, followers, following} = props.data;

  const followersCount =
    followers && followers.totalCount ? followers.totalCount : 0;
  const followingsCount =
    following && following.totalCount ? following.totalCount : 0;

  function clickFollowings() {
    if (followingsCount > 0) props.sendToFollowings(login);
  }

  function clickFollowers() {
    if (followersCount > 0) props.sendToFollowers(login);
  }
  return (
    <View style={styles.userMainView}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => props.onCellPressed(id)}>
        <View style={styles.userHorizontalView}>
          <ImageView
            source={
              avatarUrl && avatarUrl != null
                ? {uri: avatarUrl}
                : Images.userImage
            }
            style={styles.userImage}
          />
          <View style={styles.fullView}>
            <Text style={styles.name}>{name && name != null ? name : ''}</Text>
            <Text style={styles.userName}>
              {login && login != null ? login : ''}
            </Text>
            {bio && bio != null ? (
              <Text style={styles.userBio}>{bio}</Text>
            ) : null}
          </View>
        </View>
      </TouchableOpacity>
      {props.isFollowDispay ? (
        <View style={styles.followView}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.userHorizontalView}
            onPress={() => clickFollowers()}>
            <View style={styles.followLayout}>
              <Text style={styles.followers}>
                {followersCount + '  ' + String.followers}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.userHorizontalView}
            onPress={() => clickFollowings()}>
            <View style={styles.followLayout}>
              <Text style={styles.followers}>
                {String.following + '  ' + followingsCount}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};
export default User;
