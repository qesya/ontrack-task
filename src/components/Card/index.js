//import liraries
import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {t} from 'react-native-tailwindcss';

// create a component
const Index = ({bookTitle, author, year, onPress}) => {
  return (
    <TouchableHighlight
      style={[t.flexRow, t.mY3]}
      onPress={onPress}
      underlayColor="#1D78740a">
      <>
        <View
          style={[
            t.w3_12,
            t.h32,
            t.bgBase,
            t.roundedLg,
            t.itemsCenter,
            t.justifyCenter,
          ]}>
          <Text style={[t.text3xl, t.fontPoppinsBold, t.textWhite]}>
            {bookTitle.charAt(0)}
          </Text>
        </View>
        <View style={[t.w9_12, t.mL4, t.flexWrap]}>
          <Text
            style={[
              t.textXl,
              t.fontPoppinsBold,
              t.textBase,
              t.wFull,
              t.maxWFull,
            ]}
            numberOfLines={2}
            ellipsizeMode="tail">
            {bookTitle}
          </Text>
          <Text style={[t.textBase, t.fontPoppinsRegular, t.textBase, t.mT1]}>
            {author}
          </Text>
          <Text style={[t.textBase, t.fontPoppinsRegular, t.textBase, t.mT1]}>
            {year}
          </Text>
        </View>
      </>
    </TouchableHighlight>
  );
};

export default Index;
