import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {t} from 'react-native-tailwindcss';
import SearchBar from '../../components/SearchBar';
import Card from '../../components/Card';
import {DETAILS_SCREEN} from '../../constants/routes';
import {filterBooks, getBooks} from '../../api';
import isCloseToBottom from '../../utils/detectReachBottom';
import {useState} from 'react';

const Index = ({navigation}) => {
  const [booksShowed, setbooksShowed] = useState([]);
  const [isBookNotFound, setIsBookNotFound] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  React.useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    let page = 1;
    const res = await getBooks(page);
    const more = booksShowed.concat(res.books);
    console.log('DATA', more);
    console.log('JUMLAH', more.length);
    setbooksShowed(more);
    page += 1;
    setLoadMore(false);
  };

  const filter = async text => {
    if (text) {
      setIsBookNotFound(false);

      let result = await filterBooks(text);
      console.log(result.books.length);

      if (result.books.length === 0) {
        setbooksShowed([]);
        setIsBookNotFound(true);
      } else {
        setbooksShowed(result.books);
      }
    } else {
      loadBooks();
    }
  };

  return (
    <SafeAreaView style={[t.flexCol, t.bgWhite, t.flex1]}>
      <View style={[t.pX6, t.mB5]}>
        <Text style={[t.text3xl, t.fontPoppinsBold, t.textBase, t.mT4]}>
          Collection
        </Text>
        <Text
          style={[t.textBase, t.fontPoppinsRegular, t.textBase, t.mT1, t.mB4]}>
          Find your favourites book
        </Text>
        <SearchBar onChangeText={text => filter(text)} />
      </View>

      <ScrollView
        contentContainerStyle={[t.pX6]}
        onScroll={({nativeEvent}) => {
          if (isCloseToBottom(nativeEvent)) {
            setLoadMore(true);
            loadBooks();
          }
        }}>
        {Object.keys(booksShowed).length > 0 ? (
          <View>
            {booksShowed.map((data, index) => (
              <Card
                key={index.toString()}
                author={data.book_author}
                bookTitle={data.book_title}
                year={data.book_publication_year}
                onPress={() =>
                  navigation.navigate(DETAILS_SCREEN, {id: data.id})
                }
              />
            ))}
          </View>
        ) : (
          <Text style={[t.textCenter]}>
            {isBookNotFound ? (
              'Book not found'
            ) : (
              <View>
                <ActivityIndicator size="large" color="#1D7874" style={t.mB4} />
                <Text
                  style={[t.textBase, t.fontPoppinsRegular, t.textBase, t.mB4]}>
                  Loading ...
                </Text>
              </View>
            )}
          </Text>
        )}
        {loadMore && (
          <ActivityIndicator size="large" color="#1D7874" style={t.mB4} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
