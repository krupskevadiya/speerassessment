import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import {ImageView} from '../../component/FastImage';
import Images from '../../constant/Images';
import axios from 'axios';
import AppUrl from '../../constant/AppUrl';
import {Toolbar} from '../../component/ToolBar';
import {Loader} from '../../component/Loader';
import ProfileData from '../../component/ProfileData';

const UserDetails = ({navigation, route}) => {
  const username = route.params.username;
  function onBackPress() {
    navigation.goBack();
  }
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const response = await axios.get(AppUrl.getUserDetail + username);
        setUserData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching user details:', error);
        setIsLoading(false);
      }
    };

    getUserDetails();
  }, []);

  return (
    <View style={styles.mainView}>
      <Toolbar
        isBackArrowDisplay={true}
        title={userData && userData.name != null ? userData.name : ''}
        onBackPress={() => onBackPress()}></Toolbar>
      {isLoading ? (
        <Loader mainViewStyle={styles.loaderView}></Loader>
      ) : (
        <View style={styles.contentView}>
          <View style={styles.imageViewStyle}>
            <ImageView
              source={
                userData && userData.avatar_url != null
                  ? {uri: userData.avatar_url}
                  : Images.userImage
              }
              style={styles.userImage}
            />
          </View>

          <View style={styles.userDetailView}>
            {userData && userData.name && userData.name.length > 0 ? (
              <ProfileData
                source={Images.username}
                text={userData.name}></ProfileData>
            ) : null}
            {userData && userData.login && userData.login.length > 0 ? (
              <ProfileData
                source={Images.username}
                text={userData.login}></ProfileData>
            ) : null}

            {userData && userData.bio && userData.bio.length > 0 ? (
              <ProfileData
                source={Images.about}
                text={userData.bio}></ProfileData>
            ) : null}

            {userData && userData.followers ? (
              <ProfileData
                source={Images.followers}
                text={userData.followers}></ProfileData>
            ) : null}

            {userData && userData.following ? (
              <ProfileData
                source={Images.following}
                text={userData.following}></ProfileData>
            ) : null}

            {userData && userData.location && userData.location.length > 0 ? (
              <ProfileData
                source={Images.location}
                text={userData.location}></ProfileData>
            ) : null}

            {userData &&
            userData.twitter_username &&
            userData.twitter_username.length > 0 ? (
              <ProfileData
                source={Images.twitter}
                text={userData.twitter_username}></ProfileData>
            ) : null}
          </View>
        </View>
      )}
    </View>
  );
};
export default UserDetails;
