import React, {useState, useEffect}from 'react';
import { StyleSheet, View, Platform, Dimensions, ImageBackground, Switch, Text } from 'react-native';
import TextInputs from '../components/TextInput';
import Screen from '../components/Screen';
import AppPicker from '../components/AppPicker';
import AppButton from '../components/AppButton';
import { Formik } from 'formik';
import * as yup from 'yup'
import AppError from '../components/AppError'
import ImageInputList from '../components/ImageInputList'
import * as Location from 'expo-location';
import * as ImagePicker from 'expo-image-picker';



const catogories = [
  { label: "Furniture", value: 1, backgroundColor:"#fc5c65",icon:"floor-lamp" },
  { label: "Clothing", value: 2, backgroundColor:"#2bcbba",icon:"shoe-heel"  },
  { label: "Camera", value: 3, backgroundColor:"#fed330",icon:"camera" },
  { label: "Cars", value: 4, backgroundColor:"#fd9644",icon:"car" },
  { label: "Games", value: 5, backgroundColor:"#26de81",icon:"football" },
  { label: "Sports", value: 6, backgroundColor:"#45aaf2",icon:"cricket" },
  { label: "Movies & Music", value: 7, backgroundColor:"#4b7bec",icon:"headphones" },
  
];


let validationSchema  = yup.object().shape({
    title : yup.string().required().label('Title').min(1),
    price : yup.number().required().label('Price').max(1000),
    images : yup.array().min(1, 'atleast 1 image')
  });




//ListEditing screen function  

export default function ListEditingScreen() {


//for location

 
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  let loc = 'Analizing..';
  if (location) {
    loc = JSON.stringify(location);
  } else if (errorMsg) {
    loc = errorMsg
  }
  console.log(loc)



//List edit screen on submit button function
const handleClick=(values)=>{
  let data = values.category
  // console.log(data['description'],values['price'])
  console.log(values)
}


return (
<Screen style={styles.container}>
  
<Formik 
     initialValues={{title:'',price:'', description:'', images:[]}}
     // onSubmit={(values) =>console.log(values)}
     onSubmit={(values) => handleClick(values)}
     validationSchema={validationSchema}
>

  {({handleChange,handleSubmit,errors, setFieldTouched, touched, values, setFieldValue})=>(
      <>
        <ImageInputList
             images={values['images']}
             onAddImage={(uri)=>setFieldValue('images', [...values['images'],uri])}
             onRemoveImage={(uri)=>setFieldValue('images',values['images'].filter(imageuri=>imageuri !== uri))}
        />

    

        <TextInputs 
           placeholder='Title' 
           onChangeText={handleChange('title')}
           onBlur={()=>setFieldTouched('title')} 
        />
         {touched.title && <AppError errors={errors.title} />}

        <TextInputs 
          placeholder='Price'  
          onChangeText={handleChange('price')}
          onBlur={()=>setFieldTouched('price')} 
          keyboardType='numeric'
          width='100%'
        />
          {touched.price && <AppError errors={errors.price} />}

        <AppPicker
          icon='apps' 
          title='categories'
          //selectedItem={catogory}
          selectedItem={values['category']}
          onSelected={(item)=>setFieldValue('category', item)}
          //onSelected={(item)=>setcatogory(item)}
          items={catogories}
          numColumns={3}
        />

        <TextInputs 
          placeholder='Description' 
          onChangeText={handleChange('description')}
          onBlur={()=>setFieldTouched('description')}
        />
          {touched.description && <AppError errors={errors.description} />}

        <AppButton 
         title='post' 
         myPress={handleSubmit}
         
 />

     </> 
    )}
   </Formik>
  </Screen>
 );
}


  


    
   
//styles for components
const styles = StyleSheet.create({
 container:{
   flex:1,
   padding:8,
   justifyContent:"flex-start",
   alignItems:"center",
   width:"100%"
 } ,
 paragraph: {
  fontSize: 15,
  textAlign: 'center',
 }
});


