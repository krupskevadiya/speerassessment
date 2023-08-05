import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

const Pagination = ({handleLoadMore}) => {
  return (
    <View>
      <TouchableOpacity onPress={handleLoadMore}>
        <Text>Load More</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pagination;
