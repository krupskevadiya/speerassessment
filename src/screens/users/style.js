import {StyleSheet} from 'react-native';
import Colors from '../../constant/Color';
import Dimens from '../../constant/Dimen';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: Colors.screenbackground,
    padding: Dimens.dimen12,
  },
  searchView: {
    borderRadius: Dimens.dimen3,
    borderColor: Colors.gray,
    borderWidth: Dimens.dimen1,
    justifyContent: 'center',
  },
  searchInput: {
    color: Colors.black,
    paddingHorizontal: Dimens.dimen5,
    paddingVertical: 0,
    fontSize: Dimens.dimen12,
  },
  fullView: {
    flex: 1,
  },
  userListView: {
    flex: 1,
    marginVertical: Dimens.dimen10,
  },
});
export default styles;
