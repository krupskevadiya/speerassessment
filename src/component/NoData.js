import {Text, View} from 'react-native';
import styles from './style';
import {PrintLog} from '../constant/PrintLog';

const NoData = props => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.noDataText}>{props.displayText}</Text>
    </View>
  );
};
export default NoData;
