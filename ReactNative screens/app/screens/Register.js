import React, {useState}  from 'react';
import { moduleName } from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import * as Yup from 'yup'
import { Formik } from 'formik';
import AppError from '../components/AppError'

let validationSchema  = Yup.object().shape({
    name : Yup.string().required().label('Name').min(1),
    email : Yup.string().required().email().label('Email'),
    password : Yup.number().required().label('Password')
  });

const Register = () => {
    function authentication(values) {
        if (
          values.email === "priya@gmail.com" &&
          values.password === "1524"
        ) {
          alert(`${values.email}  Login Successfully`);
          console.log(values.name);
          console.log(values.email);
          console.log(values.password);
        } else {
          alert("Enter valid email or password");
        }
      }
//    const [account, setaccount] = useState(name);
    return (
        <Screen style={{padding:15}}>
       
        <Formik 
  initialValues={{name:'',email:'', password:''}}
    //onSubmit={authentication(values)}
    onSubmit={(values) => authentication(values)}
    validationSchema={validationSchema}
  >
    {({handleChange,handleSubmit,errors, setFieldTouched, touched})=>(
      <>
                <AppTextInput
                      icon ='account' 
                      placeholder='Name'
                      onChangeText={handleChange('name')}
                      onBlur={()=>setFieldTouched('name')}
                   // onChangeText={(text)=>setemail(text)}
                 />
                     
                       {touched.name && <AppError errors={errors.name} />}
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

                <AppButton title="Register" 
                  myPress={handleSubmit}
               // onPress={()=>console.log(email,password)} 
                 />
      </>
    )} 
   </Formik>
        </Screen>
    );
}

export default Register;