import React, {useState, useEffect, useMemo} from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {ImageView} from '../../component/FastImage';
import Images from '../../constant/Images';
import AppUrl from '../../constant/AppUrl';
import Constant from '../../constant/Constant';
import {PrintLog} from '../../constant/PrintLog';
import User from '../../component/User';
import Colors from '../../constant/Color';
import {Input} from '../../component/Input';
import String from '../../constant/String';
import {getDatafromSearch} from '../../constant/APICall';
import styles from './style';

const PER_PAGE_RECORD = 20;

const Users = () => {
  const [searchText, setSearchText] = useState('');
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isMore, setIsMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(null);

  useEffect(() => {
    // Reset some data when the search text update
    setUserData([]);
    setCurrentPage(null);
    setIsMore(true);
  }, [searchText]);

  // Query to get data from API
  const query = `
    query($queryString: String!, $currentPage: String) {
      search(query: $queryString, type: USER, first: ${PER_PAGE_RECORD}, after: $currentPage) {
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

  const loadData = async from => {
    if (!isLoading && isMore) {
      setIsLoading(true);
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
          const data = response.data.data.search;
          PrintLog(data.edges);
          setUserData(prevUserData => [...prevUserData, ...data.edges]);
          setCurrentPage(data.pageInfo.endCursor);
          setIsMore(data.pageInfo.hasNextPage);
          setIsLoading(false);
        })
        .catch(error => {
          PrintLog(error);
          setIsLoading(false);
        });

      /*try {
        let input = {
          query,
          variables: {
            queryString: searchText,
            currentPage,
          },
        };
        let data = await getDatafromSearch(input);
        PrintLog('====data edge======' + data);
        if (data && data.edges) {
          PrintLog(data.edges);
          setUserData(prevUserData => [...prevUserData, ...data.edges]);
          setCurrentPage(data.pageInfo.endCursor);
          setIsMore(data.pageInfo.hasNextPage);
          setIsLoading(false);
        } else {
          PrintLog('====no data======');
          setIsLoading(false);
        }
      } catch (e) {
        PrintLog(error);
        setIsLoading(false);
      }*/
    }
  };

  const loadMoreIndicator = () => {
    return isLoading ? (
      <ActivityIndicator size="small" color={Colors.gray} />
    ) : null;
  };

  // Memoize the result of userdata
  const memoizedUsers = useMemo(() => userData, [userData]);

  return (
    <View style={styles.mainView}>
      <View style={styles.searchView}>
        <Input
          placeholder={String.searchText}
          value={searchText}
          onChangeText={text => {
            setSearchText(text);
            loadData();
          }}
          style={styles.searchInput}
        />
      </View>
      <View style={styles.userListView}>
        <FlatList
          data={memoizedUsers}
          extraData={memoizedUsers}
          renderItem={({item}) => <User data={item.node}></User>}
          keyExtractor={item => item.node.id}
          ListFooterComponent={loadMoreIndicator}
          onEndReached={loadData}
          onEndReachedThreshold={0.8}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Users;
