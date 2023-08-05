import {StyleSheet} from 'react-native';
import Colors from '../constant/Color';
import Dimens from '../constant/Dimen';
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
    flex: 1,
    padding: Dimens.dimen12,
    backgroundColor: 'white',
    borderRadius: Dimens.dimen5,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: Dimens.dimen5,
    elevation: Dimens.dimen5,
    marginBottom: Dimens.dimen15,
  },
  fullView: {
    flex: 1,
    marginLeft: Dimens.dimen10,
    justifyContent: 'center',
  },
  userImage: {
    height: Dimens.dimen50,
    width: Dimens.dimen50,
    borderRadius: Dimens.dimen25,
    borderWidth: Dimens.dimen1,
    borderColor: Colors.gray,
  },
  userHorizontalView: {
    flex: 1,
    flexDirection: 'row',
  },
  followView: {
    flex: 1,
    flexDirection: 'row',
    marginTop: Dimens.dimen10,
  },
  userName: {
    color: Colors.darkGray,
    fontFamily: Fonts.regular,
    fontSize: Dimens.dimen10,
  },
  name: {
    color: Colors.darkGray,
    fontFamily: Fonts.semiBold,
    fontSize: Dimens.dimen12,
  },
  userBio: {
    color: Colors.gray,
    fontFamily: Fonts.regular,
    fontSize: Dimens.dimen10,
    flex: 1,
  },
  followers: {
    color: Colors.gray,
    fontFamily: Fonts.bold,
    fontSize: Dimens.dimen10,
  },
  followersCount: {
    color: Colors.gray,
    fontFamily: Fonts.bold,
    fontSize: Dimens.dimen12,
  },
});
export default styles;
