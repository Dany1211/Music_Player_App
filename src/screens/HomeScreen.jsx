// src/screens/HomeScreen.jsx
import {StyleSheet, View, Text, FlatList, ScrollView} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import Header from '../components/header';
import {fontSizes, spacing} from '../constants/dimensions';
import SongCard from '../components/SongCard';
import SongCardWithCategory from '../components/SongCardWithCategory';
import FloatingPlayer from '../components/FloatingPlayer';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={SongCardWithCategory}
        contentContainerStyle={{
          paddingBottom: 400,
        }}></FlatList>
      <FloatingPlayer/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
});
