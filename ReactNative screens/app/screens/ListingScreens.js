import React from 'react';
import {Screen,View, FlatList, Image, StyleSheet} from 'react-native';
import Card from '../components/Card';





const listings=[{
    id:1,
    title:'Red jacket for sale!',
    subtitle:100,
    image:require("../../assets/jacket.jpg")
},
{
    id:2,
    title:'CoUcH is GrEat condition',
    subtitle:1000,
    image:require("../../assets/couch.jpg")
},
]

const ListingScreens = (props) => {
    return (

        <View style={styles.screen}>
        <FlatList
          data={listings}  
          keyExtractor={(listing)=> listing.id.toString()} 
          renderItem={({item})=>(
            <Card
            title={item.title}
            subtitle={"$" + item.subtitle}
            image={item.image}
          ></Card>
          )}
        >
        </FlatList>
        </View>
    );
}


const styles = StyleSheet.create({
    screen:{
        padding:20,
    }
})

export default ListingScreens;