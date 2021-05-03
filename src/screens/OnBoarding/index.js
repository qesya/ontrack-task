import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import People from '../../assets/svg/people.svg';
import {t} from 'react-native-tailwindcss';
import Button from '../../components/Button';
import Arrow from '../../assets/svg/arrow-icn.svg';
import {HOME_SCREEN} from '../../constants/routes';

const Index = ({navigation}) => {
  return (
    <SafeAreaView style={[t.flex1, t.justifyCenter, t.itemsCenter, t.bgWhite]}>
      <People style={[t._mT12]} />
      <Text style={[t.text3xl, t.fontPoppinsBold, t.textBase]}>OnTack</Text>
      <Text
        style={[t.textBase, t.fontPoppinsRegular, t.textBase, t.mT1, t.mB10]}>
        Keep reading , and you will fall in love
      </Text>

      <Button
        title="Continue"
        style={[t.pY3]}
        onPress={() => navigation.navigate(HOME_SCREEN)}
        styleText={[t.textWhite, t.textWhite]}>
        <Arrow />
      </Button>
    </SafeAreaView>
  );
};

export default Index;
