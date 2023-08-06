import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import axios from 'axios';
import AppUrl from '../../constant/AppUrl';
import Constant from '../../constant/Constant';
import {PrintLog} from '../../constant/PrintLog';
import User from '../../component/User';
import {Input} from '../../component/Input';
import String from '../../constant/String';
import styles from './style';
import StaticRoute from '../../constant/StaticRoute';
import {Toolbar} from '../../component/ToolBar';
import {Loader} from '../../component/Loader';
import NoData from '../../component/NoData';
import _ from 'lodash';

const Users = props => {
  const [searchText, setSearchText] = useState('');
  const [noDataText, setNoDataText] = useState();
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isMore, setIsMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(null);

  useEffect(() => {
    // Reset some data when the search text update
    // setUserData([]);
    setCurrentPage(null);
    setIsMore(true);
  }, [searchText]);

  // Query to get data from API
  const query = `
    query($queryString: String!, $currentPage: String) {
      search(query: $queryString, type: USER, first: ${Constant.recordPerPage}, after: $currentPage) {
        edges {
          node {
            ... on User {
              id
              name
              login
              avatarUrl
              bio
              followers {
                totalCount
              }
              following {
                totalCount
              }
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  `;

  const loadData = () => {
    if (!isLoading && isMore) {
      setIsLoading(true);
      setNoDataText('');
      axios
        .post(
          AppUrl.getUser,
          {
            query,
            variables: {
              queryString: searchText,
              currentPage,
            },
          },
          {
            headers: {
              Authorization: 'Bearer ' + Constant.authTokenGit,
            },
          },
        )
        .then(response => {
          if (response.status == 200) {
            const data = response.data.data.search;
            PrintLog(data);

            const respData = data.edges;
            const filteredData = _.filter(respData, item =>
              _.has(item, 'node'),
            );
            setUserData(filteredData);
            setCurrentPage(data.pageInfo.endCursor);
            setIsMore(data.pageInfo.hasNextPage);
            setIsLoading(false);
            if (data.edges.length == 0) {
              setNoDataText(searchText.length > 0 ? String.noDataText : '');
            } else {
              setNoDataText('');
            }
          } else {
            setNoDataText(String.searchError);
            setIsLoading(false);
          }
        })
        .catch(error => {
          PrintLog(error);
          setNoDataText(String.searchError);
          setIsLoading(false);
        });
    }
  };

  const loadDataMore = () => {
    if (!isLoading && isMore) {
      setIsLoading(true);
      setNoDataText('');
      axios
        .post(
          AppUrl.getUser,
          {
            query,
            variables: {
              queryString: searchText,
              currentPage,
            },
          },
          {
            headers: {
              Authorization: 'Bearer ' + Constant.authTokenGit,
            },
          },
        )
        .then(response => {
          if (response.status == 200) {
            const data = response.data.data.search;
            PrintLog(data);
            console.log(data.edges.length);

            const finalArray = [userData, ...data.edges];
            const uniqueData = _.uniq(finalArray, item => item.node.id);
            const filteredData = _.filter(uniqueData, item =>
              _.has(item, 'node'),
            );

            setUserData(filteredData);
            setCurrentPage(data.pageInfo.endCursor);
            setIsMore(data.pageInfo.hasNextPage);
            setIsLoading(false);
            if (data.edges.length == 0) {
              setNoDataText(searchText.length > 0 ? String.noDataText : '');
            } else {
              setNoDataText('');
            }
          } else {
            setNoDataText(String.searchError);
            setIsLoading(false);
          }
        })
        .catch(error => {
          PrintLog(error);
          setNoDataText(String.searchError);
          setIsLoading(false);
        });
    }
  };

  //Loader for Progress
  const loadMoreIndicator = () => {
    return isLoading ? (
      <Loader mainViewStyle={styles.loadMoreView}></Loader>
    ) : null;
  };

  function sendUserToFollower(username) {
    props.navigation.navigate(StaticRoute.followersRoute, {username: username});
  }
  function sendUserToFollowing(username) {
    props.navigation.navigate(StaticRoute.followingRoute, {username: username});
  }

  //UserList
  const renderListItem = item => {
    return (
      <User
        data={item}
        sendToFollowers={username => {
          sendUserToFollower(username);
        }}
        sendToFollowings={username => {
          sendUserToFollowing(username);
        }}
        isFollowDispay={true}
        onCellPressed={() => {}}></User>
    );
  };
  function onChangeText(text) {
    setSearchText(text);
    setNoDataText('');

    if (text.trim().length > 0) {
      if (text.trim().length % 3 == 0) {
        loadData();
      } else {
      }
    } else {
      setUserData([]);
    }
  }

  const keyExtractor = item => item.node.id;

  return (
    <View style={styles.mainView}>
      <Toolbar isBackArrowDisplay={false} title={String.userTitle}></Toolbar>
      <View style={styles.innerView}>
        <View style={styles.searchView}>
          <Input
            placeholder={String.searchText}
            value={searchText}
            onChangeText={text => onChangeText(text)}
            style={styles.searchInput}
          />
        </View>
        <View style={styles.userListView}>
          {userData && userData.length > 0 ? (
            <FlatList
              data={userData}
              extraData={userData}
              renderItem={({item}) => renderListItem(item.node)}
              keyExtractor={keyExtractor}
              ListFooterComponent={loadMoreIndicator}
              onEndReached={loadDataMore}
              onEndReachedThreshold={0.5}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <View style={styles.noDataView}>
              <NoData displayText={noDataText}></NoData>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Users;
