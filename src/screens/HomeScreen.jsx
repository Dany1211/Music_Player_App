// src/screens/HomeScreen.jsx
import { StyleSheet, View,Text,FlatList } from 'react-native';
import React from 'react';
import { colors } from '../constants/colors'; 
import Header from '../components/header';  
import { fontSizes, spacing } from '../constants/dimensions';
import SongCard from '../components/SongCard';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />  
      <Text style={styles.headingText}>Recommended for you</Text>
      <FlatList data={[1,2,3,4,5]} renderItem={SongCard}
                 horizontal = {true} ItemSeparatorComponent={<View style={{marginHorizontal : spacing.md}}/>}
                 contentContainerStyle={{
                  paddingHorizontal : 10 ,
                 }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex : 1 ,
  },
  headingText : {
    color : colors.textPrimary ,
    fontSize : fontSizes.xl ,
    fontWeight : "bold" ,
    marginTop : spacing.lg ,
    marginBottom : spacing.md ,
    marginLeft : spacing.md
  }
});
