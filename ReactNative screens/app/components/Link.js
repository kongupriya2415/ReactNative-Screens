import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native'

    const Link=()=>{
        const navigation=useNavigation();
        return(
         <Button title='click to product details' onPress={()=>navigation.goBack('productDetails',{id:102})}></Button> 
        )
       }


const styles = StyleSheet.create({
  container: {}
});

export default Link;