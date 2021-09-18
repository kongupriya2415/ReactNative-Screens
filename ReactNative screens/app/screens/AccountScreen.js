import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import Icons from '../components/Icons'
import ListItemSeperator from '../components/ListItemSeperator';

const menus = [{
   
    title:"My listings",
    icon:{
        name:"format-list-bulleted",
        backgroundColor:colors.primary
    }},
    {
        title:"My message",
        icon:{
            name:"email",
            backgroundColor:colors.secondary
        }}
]

const AccountScreen = () => {
    return (
        <View style={styles.container}>
         <View style={styles.box}>
           <ListItem
            title="priya"
            subtitle="priya@gmail.com"
            image={require("../../assets/jacket.jpg")}
           ></ListItem>
         </View>


         <View style={styles.box}>
        
         <FlatList
           data={menus}
           keyExtractor={(menu)=> menu.title}
          
         
           renderItem={({item})=>(
               <ListItem
                title={item.title}
                IconComponent={
                    <Icons name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor} />
                }
                ItemSeperatorComponent={ListItemSeperator}
               >
               </ListItem>
               
           )}
         >
         </FlatList>
         
         </View>
         <View style={styles.box}>
         <ListItem
         title="Log Out" 
         IconComponent={<Icons name="logout" backgroundColor='#ffe66d' />} 
         ></ListItem>
         
         </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
       flex:1,
       marginTop:10,

    },
    box:{
       marginVertical:18 ,
       backgroundColor:"#f5f5f5",
     
       
       
    },
  
    
})

export default AccountScreen;