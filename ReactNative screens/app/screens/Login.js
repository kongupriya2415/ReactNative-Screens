import React, {useState} from 'react';
import { Button, Image, StyleSheet, View , Text} from 'react-native';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import * as Yup from 'yup'
import { Formik } from 'formik';
import AppText from '../components/AppText';
import AppError from '../components/AppError'


let validationSchema  = Yup.object().shape({
    email : Yup.string().required().email().label('Email'),
    password : Yup.number().required().label('Password')
  });

const Login = () => {
  function authentication(values) {
    if (
      values.email === "priya@gmail.com" &&
      values.password === "1524"
    ) {
      alert(`${values.email}  Login Successfully`);
      console.log(values.email);
      console.log(values.password);
    } else {
      alert("Enter valid email or password");
    }
  }
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    return (
        <Screen style={styles.container}>
      
        <Image  style={styles.image} resizeMode='contain' source= {require('../../assets/download.jpg')}></Image>
       
  <Formik 
  initialValues={{email:'',password:''}}
    //onSubmit={authentication(values)}
    onSubmit={(values) => authentication(values)}
    validationSchema={validationSchema}
  >
    {({handleChange,handleSubmit,errors, setFieldTouched, touched})=>(
      <>
                <AppTextInput
                      icon ='email' 
                      placeholder='Email'
                      onChangeText={handleChange('email')}
                      onBlur={()=>setFieldTouched('email')}
                   // onChangeText={(text)=>setemail(text)}
                 />
                     
                       {touched.email && <AppError errors={errors.email} />}
                
                <AppTextInput
                     icon ='lock' 
                     placeholder='Password'
                     secureTextEntry={true}
                     keyboard='numeric'
                     onChangeText={handleChange('password')}
                     onBlur={()=>setFieldTouched('password')}
                  // onChangeText={(text)=>setpassword(text)}
                 />
                        
                        {touched.password && <AppError errors={errors.password} />}

                <AppButton title="LOGIN" 
        
                  myPress={handleSubmit}
               // onPress={()=>console.log(email,password)} 
                 />
      </>
    )} 
   </Formik>
</Screen>
      ) }

export default Login;

const styles = StyleSheet.create({
    container:{
      justifyContent:'center',
      alignItems:'center',
      marginTop:30,
      padding:25
    },
    image:{
        height:130,
        width:130,
        justifyContent:'center',
        marginBottom:30
    },
 
})
