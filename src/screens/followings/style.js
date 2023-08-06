import {StyleSheet} from 'react-native';
import Colors from '../../constant/Color';
import Dimens from '../../constant/Dimen';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: Colors.screenbackground,
  },

  userListView: {
    flex: 1,
    marginVertical: Dimens.dimen10,
  },
  innerView: {
    padding: Dimens.dimen12,
    flex: 1,
  },
  loadMoreView: {
    alignItems: 'center',
  },
});
export default styles;
