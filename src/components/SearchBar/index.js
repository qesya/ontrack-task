//import liraries
import React from 'react';
import {View, TextInput} from 'react-native';
import {t} from 'react-native-tailwindcss';
import Search from '../../assets/svg/search.svg';

// create a component
const Index = ({placeholder = 'Search', onChangeText, style, onBlur}) => {
  return (
    <View
      style={[
        t.flex,
        t.flexRow,
        t.justifyBetween,
        t.itemsCenter,
        t.pY0,
        t.pX5,
        t.borderBase,
        t.mT2,
        t.border,
        t.roundedFull,
        style,
      ]}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={[t.textBase, style]}
        placeholderTextColor={'#1D7874'}
        onBlur={onBlur}
      />
      <View>
        <Search />
      </View>
    </View>
  );
};

export default Index;
