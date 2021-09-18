// //import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, SafeAreaView,Platform,StatusBar, View,Button} from 'react-native';
// import AccountScreen from './app/screens/AccountScreen';
// import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
// import ListingScreens from './app/screens/ListingScreens';
// import ViewImageScreen from './app/screens/ViewImageScreen';
// import WelcomeScreen from './app/screens/WelcomeScreen';
// import Register from './app/screens/Register';
// import Login from './app/screens/Login';
// import ListEditingScreen from './app/screens/ListEditingScreen';
// import Card from './app/components/Card';
// import MessageScreen from './app/screens/MessageScreen';



// export default function App() {
//   return (

//     //1. <WelcomeScreen />          ok
//     //2. <ViewImageScreen />        ok
//     //3. <MessageScreen />          image hide
//     //4. <ListingDetailsScreen />   ok
//     //5. <AccountScreen />          ok
//     //6. <ListingScreens />         ok
//     //7. <Register />               ok
//     //8. <Login />                  ok
//     //9. <ListEditingScreen />      ok
  

//     // <Card title="Red jacket for sale!"
//     // subtitle="$100"
//     // image={require("./assets/jacket.jpg")} />


//     <SafeAreaView style={styles.container}>
//     <ListEditingScreen />
//     </SafeAreaView>
//   );
// }








// const styles = StyleSheet.create({
//     container:{
//       flex:1,
      
    
     
      
//      padding: Platform.OS==='android'?StatusBar.currentHeight : 0,
//     padding: Platform.OS==='android'?0:50
//     },
  
    
 
// });


//List editing input list
// // import React, {useEffect, useState} from 'react';
// // import * as ImagePicker from 'expo-image-picker';
// // //import * as Permissions from 'expo-permissions';
// // import { Button, Image, StyleSheet, Alert } from 'react-native';
// // import Screen from './app/components/Screen';
// // import ImageInput2 from './app/components/ImageInput2';
// // import AppButton from  './app/components/AppButton'
// // import ImageInputList from './app/components/ImageInputList';

// // export default function App(){

  
// //   //state for select image
// //   const [imageUri, setimageUri] = useState();
// //   console.log('working')
// //   const [imageuris,setImageuris]=useState([]);

// //   function handleAdd(uri){
// //     setImageuris([...imageuris,uri])
// //   }
  
// //   function handleRemove(uri){
// //     setImageuris(imageuris.filter(imageuri=>imageuri !== uri));
// //   }
// //   //function for select image
// //   const selectImage=async()=>{
// //     try{
// //       const result= await ImagePicker.launchImageLibraryAsync()
// //       if(!result.cancelled)
// //        setimageUri(result.uri)
// //     }catch(error){
// //       console.log('error')
// //     }
// //   }


// //   const requestPermission=async()=>{
// //     //Permissions.askAsync(Permissions.MEDIA_LIBRARY)
// //     const result = await ImagePicker.requestCameraPermissionsAsync
// //     // if (!result.granted)
// //     // alert('must accept this');
// //   }
 
// //   useEffect(()=>{
// //     requestPermission();
    
// //   }, [])


// //   return <Screen>
 
// //   {/*<Button title='select Image'  onPress={selectImage} ></Button>*/}
// //   {/*<AppButton title='select Image'  onPress={selectImage} />*/}
// //   {/* <ImageInput2 onPress={handlePress} image={imageUri}>
// //   <Image style={{height:10, width:10, borderRadius:25}} source={{uri:imageUri}}></Image>
// //  </ImageInput2>
// //  <Image style={{height:100, width:100,borderRadius:25, marginLeft:150}} source={{uri:imageUri}}></Image>*/}
// //  <ImageInputList images={imageuris} onAddImage={(uri)=>handleAdd(uri)} onRemoveImage={(uri)=>handleRemove(uri)} />
// //   </Screen>
// // }



//Navigation
import React from 'react';
import Screen from './app/components/Screen';
import {Button, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer, useNavigation} from '@react-navigation/native'
import Link from './app/components/Link';



const product=({navigation,route})=>(
  <Screen>
  <Text>Product page {route.params.id} </Text>
 {/*<Button title='Go to product detail page' onPress={()=>navigation.goBack('productDetails')}></Button> */}
<Link />
  </Screen>
)
const productDetails=({navigation})=>(
  <Screen style={{ backgroundColor:"pink"}}>
  <Text> PRODUCT DETAILS</Text>
  <Button title='Go to product page' onPress={()=>navigation.push('product',{id:100})}></Button>
  </Screen>
)
// push create new instance
// const Link=()=>{
//  const navigation=useNavigation();
//  return(
//   <Button title='click to product' onPress={()=>navigation.navigate('product')}></Button> 
//  )
// }

const Stack= createStackNavigator()

const StackNavigator = () =>(

  <Stack.Navigator initialRouteName='productDetails'>
  <Stack.Screen name='product Details' component={productDetails}></Stack.Screen>
  <Stack.Screen name='product' component={product}></Stack.Screen>
  </Stack.Navigator>

)

export default function App(){
  return(

    <NavigationContainer>
    <StackNavigator />
    </NavigationContainer>
 
  )
  }


