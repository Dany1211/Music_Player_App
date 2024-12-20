import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import { fontSizes, spacing } from '../constants/dimensions'

const imageURL = "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/805/325x325/your-burn-1731978054-rhCAZVNaIC.png"
const SongCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
      source={{uri : imageURL}} style={styles.coverImage}
      ></Image>
      <Text style={styles.title}>Your Burn</Text>
      <Text style={styles.artistName}>Alan Walker</Text>
    </TouchableOpacity>
  )
} 

export default SongCard

const styles = StyleSheet.create({
    container : {
       height : 320 , 
       width : 250 ,   
    },
    coverImage : {
      width : 250 ,
      height : 250 ,
      borderRadius : 10 ,
    },
    title : {
        textAlign : "center",
        color : colors.textPrimary ,
        fontSize : fontSizes.lg ,
        fontWeight : 600,
        marginTop : spacing.sm ,
    },
    artistName : {
        textAlign : "center",
        color : colors.textSecondary ,
        fontSize : fontSizes.md ,
        fontWeight : 400,
        marginTop : spacing.xs ,
    }
})