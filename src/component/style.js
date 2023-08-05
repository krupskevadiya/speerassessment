import {StyleSheet} from 'react-native';
import Colors from '../constant/Color';
import Dimens from '../constant/Dimen';
import Colors from '../constant/color';
import Fonts from '../constant/Fonts';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    padding: Dimens.dimen15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataText: {
    fontFamily: Fonts.semiBold,
    color: Colors.gray,
    fontSize: Dimens.dimen15,
  },
  userMainView: {
    flexDirection: 'row',
    padding: Dimens.dimen10,
  },
  userImage: {
    height: Dimens.dimen50,
    width: Dimens.dimen50,
    borderRadius: Dimens.dimen25,
  },
});
export default styles;
