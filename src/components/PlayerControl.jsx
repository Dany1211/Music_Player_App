import React from 'react';
import { TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign' ;

export const PreviousBtn = () => {
  return (
    <TouchableOpacity>
      <MaterialIcons name="skip-previous" size={40} color="#fff" /> 
    </TouchableOpacity>
    
  );
};

export const PlayBtn = () => {
 const   isPlaying = false
    return (
      <TouchableOpacity>
        <AntDesign name={  isPlaying? "pause" : "play"}   size={40} color="#fff" /> 
      </TouchableOpacity>
      
    );
  };
  



export const NextBtn = () => {
    return (
      <TouchableOpacity>
        <MaterialIcons name="skip-next" size={40} color="#fff" /> 
      </TouchableOpacity>
      
    );
  };
  