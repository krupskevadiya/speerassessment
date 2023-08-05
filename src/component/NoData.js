import {Text, View} from 'react-native';
import styles from './style';

export const NoData = props => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.noDataText}>{props.text}</Text>
    </View>
  );
};
