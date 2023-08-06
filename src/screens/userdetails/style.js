import {StyleSheet} from 'react-native';
import Colors from '../../constant/Color';
import Dimens from '../../constant/Dimen';
import Fonts from '../../constant/Fonts';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: Colors.screenbackground,
  },
  imageViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  userImage: {
    height: Dimens.dimen120,
    width: Dimens.dimen120,
    borderRadius: Dimens.dimen60,
  },
  contentView: {
    flex: 1,
    padding: Dimens.dimen12,
  },
  loaderView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: Colors.black,
    fontFamily: Fonts.semiBold,
    fontSize: Dimens.dimen15,
    marginTop: Dimens.dimen5,
  },
  userName: {
    color: Colors.gray,
    fontFamily: Fonts.regular,
    fontSize: Dimens.dimen12,
  },
  userDetailView: {
    marginTop: Dimens.dimen20,
  },
});
export default styles;
