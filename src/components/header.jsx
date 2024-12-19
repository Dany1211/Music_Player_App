import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'; 
import { iconSizes, spacing } from '../constants/dimensions';

// icons 
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign' ;

const header = () => {
  return (
    <View style={styles.header}>
    <TouchableOpacity>
    <Entypo name="menu" size={iconSizes.lg} color={colors.iconPrimary} />
    </TouchableOpacity>
    <TouchableOpacity>
    <AntDesign name="search1" size={iconSizes.lg} color={colors.iconPrimary}/>
    </TouchableOpacity>
    </View>
  )
}

export default header ;

const styles = StyleSheet.create({
    header : {
        flexDirection : "row" ,
        justifyContent : "space-between",
        paddingVertical : spacing.md ,
        paddingHorizontal : spacing.lg
      }
})