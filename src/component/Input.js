import {TextInput} from 'react-native';
export const Input = props => {
  return (
    <TextInput
      style={props.style}
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={text => props.onChangeText(text)}
      placeholderTextColor={props.placeholderTextColor}></TextInput>
  );
};
