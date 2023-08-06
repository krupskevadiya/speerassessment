import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import axios from 'axios';
import {PrintLog} from '../../constant/PrintLog';
import User from '../../component/User';
import styles from './style';
import {Toolbar} from '../../component/ToolBar';
import Strings from '../../constant/String';
import AppUrl from '../../constant/AppUrl';
import Constant from '../../constant/Constant';
import {Loader} from '../../component/Loader';
import StaticRoute from '../../constant/StaticRoute';

const Followers = ({navigation, route}) => {
  const username = route.params.username;
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [endCursor, setEndCursor] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    fetchUserData(username, null);
  }, []);

  const fetchUserData = (username, cursor) => {
    setIsLoading(true);
    const query = `
      query ($username: String!, $pageSize: Int!, $after: String) {
        user(login: $username) {
          followers(first: $pageSize, after: $after) {
            pageInfo {
              endCursor
              hasNextPage
            }
            nodes {
              id
              name
              login
              avatarUrl
              bio
            }
          }
        }
      }
    `;

    const variables = {
      username,
      pageSize: Constant.recordPerPage,
      after: cursor,
    };

    axios
      .post(
        AppUrl.getUser,
        {query, variables},
        {
          headers: {
            Authorization: `Bearer ${Constant.authTokenGit}`,
          },
        },
      )
      .then(response => {
        const {nodes, pageInfo} = response.data.data.user.followers;
        setUserData([...nodes]);
        setIsLoading(false);
        setEndCursor(pageInfo.endCursor);
        setHasNextPage(pageInfo.hasNextPage);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  };

  const fetchUserDataMore = (username, cursor) => {
    setIsLoading(true);
    const query = `
      query ($username: String!, $pageSize: Int!, $after: String) {
        user(login: $username) {
          followers(first: $pageSize, after: $after) {
            pageInfo {
              endCursor
              hasNextPage
            }
            nodes {
              id
              name
              login
              avatarUrl
              bio
            }
          }
        }
      }
    `;

    const variables = {
      username,
      pageSize: Constant.recordPerPage,
      after: cursor,
    };

    axios
      .post(
        AppUrl.getUser,
        {query, variables},
        {
          headers: {
            Authorization: `Bearer ${Constant.authTokenGit}`,
          },
        },
      )
      .then(response => {
        const {nodes, pageInfo} = response.data.data.user.followers;
        PrintLog('==========user count followers===========' + nodes.length);
        setUserData(prevData => [...prevData, ...nodes]);
        setIsLoading(false);
        setEndCursor(pageInfo.endCursor);
        setHasNextPage(pageInfo.hasNextPage);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  };

  const loadMore = () => {
    if (!isLoading && hasNextPage) {
      fetchUserDataMore(username, endCursor);
    }
  };

  const renderItem = ({item}) => {
    return (
      <User
        data={item}
        isFollowDispay={false}
        onCellPressed={() => sendToProfile(item.login)}></User>
    );
  };
  function sendToProfile(username) {
    navigation.navigate(StaticRoute.userDetailsRoute, {username: username});
  }
  const renderLoadMore = () => {
    return isLoading ? (
      <Loader mainViewStyle={styles.loadMoreView}></Loader>
    ) : null;
  };
  function onBackPress() {
    navigation.goBack();
  }
  return (
    <View style={styles.mainView}>
      <Toolbar
        isBackArrowDisplay={true}
        title={Strings.followersCap}
        onBackPress={() => onBackPress()}></Toolbar>
      <View style={styles.innerView}>
        <FlatList
          data={userData}
          extraData={userData}
          renderItem={renderItem}
          keyExtractor={item => item.login}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderLoadMore}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Followers;
