import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'; 
import Header from '../components/header';  
import { fontSizes, spacing } from '../constants/dimensions';
import SongCard from '../components/SongCard';

const SongCardWithCategory = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Recommended for you</Text>
      <FlatList data={[1,2,3,4,5]} renderItem={SongCard}
                 horizontal = {true} ItemSeparatorComponent={<View style={{marginHorizontal : spacing.md}}/>}
                 contentContainerStyle={{
                  paddingHorizontal : 10 ,
                 }}
      />

    </View>
  )
}

export default SongCardWithCategory

const styles = StyleSheet.create({
    container:{
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
})