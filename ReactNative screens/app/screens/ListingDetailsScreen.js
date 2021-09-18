import React from 'react';
import { StyleSheet, Text, SafeAreaView,Platform,StatusBar, View,Button,Image} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';





function ListingDetailsScreen(){
    return(
        <View>
         <Image style={styles.image} source={require("../../assets/jacket.jpg")} />
          <View style={styles.container}>
             <Text style={styles.title}>Red jacket for sale!</Text>
             <Text style={styles.price}>$100</Text>
              <View styles={styles.user}>
               <ListItem 
               image={require("../../assets/jacket.jpg")}
               title="priya"
               subtitle="10 Listings"></ListItem>
              
              </View>

          </View>
         
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        borderRadius:100,
        marginBottom:20,
        overflow:"hidden"
    },
    container:{
        flex:1,
        padding:20,
        backgroundColor:"white"
    },
    image:{
        width:"100%",
        height:300,
        borderTopRightRadius:100,
        borderTopLeftRadius:100
    },
    subtitle:{
      
        fontWeight:'bold'
    },
    title:{
        marginBottom:7,
        color:"black"
    },
    price:{
        color:"#4ECDC4"
    }
})

export default ListingDetailsScreen;