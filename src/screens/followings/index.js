import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import axios from 'axios';
import User from '../../component/User';
import styles from './style';
import Strings from '../../constant/String';
import {Toolbar} from '../../component/ToolBar';
import AppUrl from '../../constant/AppUrl';
import Constant from '../../constant/Constant';
import {PrintLog} from '../../constant/PrintLog';
import {Loader} from '../../component/Loader';
import StaticRoute from '../../constant/StaticRoute';

const followingQuery = `
  query ($username: String!, $pageSize: Int!, $after: String) {
    user(login: $username) {
      following(first: $pageSize, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            id
            name
            login
            avatarUrl
            bio
          }
        }
      }
    }
  }
`;

const Followings = ({navigation, route}) => {
  PrintLog(route.params.username);
  const username = route.params.username;
  const [userData, setUserData] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [endCursor, setEndCursor] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(true);

  useEffect(() => {
    fetchUsers(username, null);
  }, [username]);

  const fetchUsers = (username, cursor) => {
    setIsLoading(true);
    axios
      .post(
        AppUrl.getUser,
        {
          query: followingQuery,
          variables: {
            username,
            pageSize: Constant.recordPerPage,
            after: cursor,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${Constant.authTokenGit}`,
          },
        },
      )
      .then(response => {
        const data = response.data.data.user.following;

        setUserData([...data.edges]);
        setEndCursor(data.pageInfo.endCursor);
        setHasNextPage(data.pageInfo.hasNextPage);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  };

  const fetchUsersMore = (username, cursor) => {
    setIsLoading(true);
    axios
      .post(
        AppUrl.getUser,
        {
          query: followingQuery,
          variables: {
            username,
            pageSize: Constant.recordPerPage,
            after: cursor,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${Constant.authTokenGit}`,
          },
        },
      )
      .then(response => {
        const data = response.data.data.user.following;

        setUserData(prevData => [...prevData, ...data.edges]);
        setEndCursor(data.pageInfo.endCursor);
        setHasNextPage(data.pageInfo.hasNextPage);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  };

  const loadMoreData = () => {
    if (!isloading && hasNextPage) {
      fetchUsersMore(username, endCursor);
    }
  };

  function sendToProfile(username) {
    PrintLog(username);
    navigation.navigate(StaticRoute.userDetailsRoute, {username: username});
  }

  const renderItem = ({item}) => {
    return (
      <User
        data={item.node}
        isFollowDispay={false}
        onCellPressed={() => sendToProfile(item.node.login)}></User>
    );
  };

  const renderLoadMore = () => {
    return isloading ? (
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
        title={Strings.following}
        onBackPress={() => onBackPress()}></Toolbar>
      <View style={styles.innerView}>
        <FlatList
          data={userData}
          renderItem={renderItem}
          keyExtractor={item => item.node.id}
          onEndReached={loadMoreData}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderLoadMore}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Followings;
