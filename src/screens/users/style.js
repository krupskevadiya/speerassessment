import {StyleSheet} from 'react-native';
import Colors from '../../constant/color';
import Dimens from '../../constant/Dimen';
import Colors from '../../constant/color';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: Colors.screenbackground,
    padding: Dimens.dimen15,
  },
  searchView: {
    padding: Dimens.dimen10,
    borderRadius: Dimens.dimen3,
    borderColor: Colors.gray,
    borderWidth: Dimens.dimen1,
    alignItems: 'center',
  },
  searchInput: {
    color: Colors.black,
  },
  fullView: {
    flex: 1,
  },
});
export default styles;
