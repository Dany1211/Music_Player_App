import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import {fontSizes} from '../constants/dimensions';
import { NextBtn, PlayBtn, PreviousBtn } from './PlayerControl';


const imageURL =
  'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/287/325x325/mortals-feat-laura-brehm-1586948734-yFnA6l5Geq.jpg';

const FloatingPlayer = () => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.90}>
      <Image source={{uri: imageURL}} style={styles.coverImage} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Mortals</Text>
        <Text style={styles.artist}>Laura Brehm</Text>
      </View>
      <View style={styles.buttonContainer}>
      <PreviousBtn/>
      <PlayBtn/>
      <NextBtn/>
      </View>
    </TouchableOpacity>
  );
};

export default FloatingPlayer;

const styles = StyleSheet.create({
  container: {
    width: "97%",
    height: 75,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    backgroundColor: "#4A517D",
    position: "absolute", 
    bottom: 15, 
    left: "1.5%",
    elevation: 5, 
    borderRadius: 10,
    zIndex: 10,
  },
  coverImage: {
    height: 60,
    width: 60,
    borderRadius :10 ,
  },
  titleContainer: {
    flex: 1,
    // marginHorizontal : 10 ,
  },
  title: {
    color: colors.textPrimary,
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
  },
  artist: {
    color: colors.textSecondary,
    fontSize: fontSizes.md,
    fontWeight: 300,
  },
  titleContainer: {
    flex: 1,
  },
  buttonContainer: {
    gap : 5,
    flexDirection : "row",
    marginRight : 10
  }
});
