//import liraries
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import {t} from 'react-native-tailwindcss';
import Button from '../../components/Button';
import ArrowLeft from '../../assets/svg/arrow-green.svg';
import ShareIcon from '../../assets/svg/share.svg';
import {HOME_SCREEN} from '../../constants/routes';
import Share from 'react-native-share';
import {getDetailBook} from '../../api';

const Index = ({navigation, route}) => {
  const {id} = route.params;
  const [book, setBook] = React.useState({});

  React.useEffect(() => {
    detail(id);
  }, [route, id]);

  const detail = async id => {
    const res = await getDetailBook(id);
    console.log(res);
    setBook(res);
  };

  const shareResponse = () => {
    Share.open({
      message: `ontrack://app/details/${book.book.id}`,
      title: 'Share book',
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  return (
    <SafeAreaView style={[t.flex1, t.bgWhite]}>
      {Object.keys(book).length > 0 ? (
        <>
          <ScrollView
            contentContainerStyle={[t.pX6, t.pT3,t.pB8, t.justifyBetween, t.flex1]}
            style={[t.selfStart, t.wFull]}>
            <View>
            <TouchableHighlight
              style={t.selfStart}
              underlayColor="#1D78740a"
              onPress={() => navigation.navigate(HOME_SCREEN)}>
              <ArrowLeft />
            </TouchableHighlight>
              <View style={[t.bgBase, t.wFull, t.p10, t.roundedLg, t.mY4 ,]}>
                <Text
                  style={[
                    t.text4xl,
                    t.fontPoppinsBold,
                    t.textWhite,
                    t.textCenter,
                  ]}>
                  {book.book.book_title.charAt(0)}
                </Text>
              </View>
              <Text
                style={[t.textBase, t.fontPoppinsRegular, t.textBase, t.mT1]}>
                Publication Year : {book.book.book_publication_year}
              </Text>
              <Text style={[t.text3xl, t.fontPoppinsBold, t.textBase]}>
                {book.book.book_title}
              </Text>
              <Text
                style={[t.textBase, t.fontPoppinsRegular, t.textBase, t.mT1]}>
                Author : {book.book.book_author}
              </Text>
              <Text
                style={[t.textBase, t.fontPoppinsRegular, t.textBase, t.mT1]}>
                Publication Country : {book.book.book_publication_country}
              </Text>
              <Text
                style={[t.textBase, t.fontPoppinsRegular, t.textBase, t.mT1]}>
                Publisher : {book.book.book_publisher}
              </Text>
              <Text
                style={[
                  t.textBase,
                  t.fontPoppinsRegular,
                  t.textBase,
                  t.mT1,
                  t.mB6,
                ]}>
                Pages : {book.book.book_pages}
              </Text>

              <Text style={[t.textBase, t.fontPoppinsRegular, t.textBase]}>
                Description : {'\n'}
                {book.book.description}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                ex voluptates repudiandae, quas dolore rem unde aperiam,
                obcaecati, provident doloribus soluta corporis nisi omnis saepe!
                Quaerat fugit similique eligendi. Illum.
              </Text>
            </View>
            <Button
              title="Share link"
              style={[t.wFull, t.mB6, t.mT4]}
              onPress={() => shareResponse()}
              styleText={[t.textWhite, t.textWhite]}>
              <ShareIcon />
            </Button>
          </ScrollView>
        </>
      ) : null}
    </SafeAreaView>
  );
};

export default Index;
