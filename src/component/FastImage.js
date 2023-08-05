import FastImage from 'react-native-fast-image';
import {PrintLog} from '../constant/PrintLog';
export const ImageView = props => {
  return (
    <FastImage
      style={props.style}
      source={props.source}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};
