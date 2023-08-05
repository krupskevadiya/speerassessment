import React, {useState, useEffect} from 'react';
import {View,FlatList} from 'react-native';
import styles from './style';
import NetInfo from '@react-native-community/netinfo';
import {Input} from '../../component/Input';
import String from '../../constant/String';
import Colors from '../../constant/color';
import {NoData} from '../../component/NoData';

export const Users = props => {
  const [searchText, setSearchText] = useState('');
  const [userData, setUserData] = useState([]);
  const [noDataText, setNoDataText] = useState('');

  useEffect(() => {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
      } else {
      }
    });
  });

  return (
    <View style={styles.mainView}>
      <View style={styles.searchView}>
        <Input
          placeholder={String.searchText}
          onChangeText={text => setSearchText(text)}
          value={searchText}
          style={styles.searchInput}
          placeholderTextColor={Colors.placeHolder}></Input>

        <View style={styles.fullView}>
          {userData && userData.length > 0 ? (
            <View style={styles.fullView}>
              <FlatList
              data={userData}
              extraData={userData}
              renderItem={}></FlatList>
            </View>
          ) : (
            <NoData text={noDataText}></NoData>
          )}
        </View>
      </View>
    </View>
  );
};
