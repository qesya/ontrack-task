//import liraries
import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {t} from 'react-native-tailwindcss';

// create a component
const Button = ({onPress, title, children, style, styleText}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={[
        t.bgBase,
        t.pY4,
        t.pX8,
        t.roundedFull,
        // t.selfStretch,
        // t.mX8,
        style,
      ]}>
      <View style={[t.justifyBetween, t.flexRow, t.itemsCenter]}>
        <Text style={[styleText, t.mR4]}>{title}</Text>
        {children}
      </View>
    </TouchableHighlight>
  );
};
//make this component available to the app
export default Button;
