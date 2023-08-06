import {StyleSheet} from 'react-native';
import Colors from '../constant/Color';
import Dimens from '../constant/Dimen';
import Fonts from '../constant/Fonts';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    height: '100%',
    width: '100%',
    padding: Dimens.dimen15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataText: {
    fontFamily: Fonts.semiBold,
    color: Colors.gray,
    fontSize: Dimens.dimen15,
    alignSelf: 'center',
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
    flexDirection: 'row',
    flex: 1,
  },
  followLayout: {
    flex: 1,
    paddingTop: Dimens.dimen15,
    paddingBottom: Dimens.dimen5,
  },
  followView: {
    flex: 1,
    flexDirection: 'row',
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
  toolBar: {
    backgroundColor: Colors.theme,
    height: Dimens.dimen50,
    padding: Dimens.dimen10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  backImage: {
    height: Dimens.dimen15,
    width: Dimens.dimen15,
  },
  toolBarTitle: {
    color: Colors.white,
    fontFamily: Fonts.semiBold,
    fontSize: Dimens.dimen16,
  },
  backViewStyle: {
    paddingVertical: Dimens.dimen12,
    paddingHorizontal: Dimens.dimen15,
    height: '100%',
    position: 'absolute',
    left: 0,
  },
  profileMainView: {
    flexDirection: 'row',
    paddingHorizontal: Dimens.dimen10,
    paddingVertical: Dimens.dimen12,
    backgroundColor: 'white',
    borderRadius: Dimens.dimen5,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: Dimens.dimen5,
    elevation: Dimens.dimen5,
    marginBottom: Dimens.dimen15,
  },
  profileText: {
    fontFamily: Fonts.regular,
    color: Colors.black,
    fontSize: Dimens.dimen14,
    marginLeft: Dimens.dimen10,
  },
  profileImage: {
    height: Dimens.dimen20,
    width: Dimens.dimen20,
  },
});
export default styles;
