import Colors from '../constant/Color';
import {View, ActivityIndicator} from 'react-native';

export const Loader = props => {
  return (
    <View style={props.mainViewStyle}>
      <ActivityIndicator size="small" color={Colors.theme} />
    </View>
  );
};
