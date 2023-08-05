import FastImage from 'react-native-fast-image';
export const FastImage = props => {
  return (
    <FastImage
      style={props.style}
      source={props.source}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};
