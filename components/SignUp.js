import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import themeColor from '../assets/Color/colors';
// import firebase from "../config/firebase"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const SignUp = ({ navigation }) => {
  const [fName, setFname] = useState('');
  const [lName, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpasswords] = useState('');
  const [error, setError] = useState('');
  const handleChange = (type, text) => {
    if (type === 'fName') {
      setFname(text);
    } else if (type === 'lName') {
      setLname(text);
    } else if (type === 'email') {
      setEmail(text);
      console.log(email);
    } else if (type === 'password') {
      setPassword(text);
    } else if (type === 'cpassword') {
      setCpasswords(text);
    }
  };
const onPressRegister = () => {
   if (fName === '') {
      alert('First name is Required!!!');
    } 
   else   if (lName === '') {
      alert('Last name is Required!!!');
    } 
 else   if (email === '') {
      alert('Email is Required!!!');
    } else if (password === '') {
      alert('Password is Required!!!');
    }
    else if (cpassword === '') {
      alert('Confirm Password is Required!!!');
    }
     else if (email !== '' && password !== '' &&fName !=="" && lName!=="" && cpassword!=="") {
        if(password!==cpassword)
        {
          alert("Password Doesn't Match!!")
        }
        
  // firebase
  //           .auth()
  //           .createUserWithEmailAndPassword(email, password)
  //           .then((response) => {
  //               const uid = response.user.uid
  //               const data = {
  //                   id: uid,
  //                   email,
  //                   fName,
  //                   lName,
  //                   datetime: firebase.firestore.FieldValue.serverTimestamp()
  //               };
  //               const usersRef = firebase.firestore().collection('users')
  //               usersRef
  //                   .doc(uid)
  //                   .set(data)
  //                   .then(() => {
  //                     setFname("")
  //                     setLname("")
  //                     setEmail("")
  //                     setPassword("")
  //                     setCpasswords("")
  //                       alert("Registration Successful")
  //                   })
  //                   .catch((error) => {
  //                       alert(error)
  //                   });
  //           })
  //           .catch((error) => {
  //               alert(error)
  //       });
    
    }
  };

  
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', marginTop: '3%' }}>
        <Text
          style={{ fontSize: 30, fontFamily: 'Segoe UI', fontWeight: 'bold' }}>
          SignUp
        </Text>
      </View>
      <View style={{ alignItems: 'flex-start', marginTop: '5%' }}>
        <Text
          style={{ fontSize: 28, fontFamily: 'Segoe UI', fontWeight: 'bold' }}>
          Join Today
        </Text>
      </View>

      <View
        style={{
          borderColor: 'white',
          borderWidth: 2,
          marginTop: '5%',
          width: '100%',
        }}
      />
    <KeyboardAwareScrollView showsHorizontalScrollIndicator={false}>
      <TextInput
        placeholder={'First Name'}
        placeholderTextColor={themeColor.BLACK}
        style={{
          width: '100%',
          height: 58,
          borderRadius: 30,
          backgroundColor: 'white',
          padding: 10,
          marginTop: '5%',
        }}
        value={fName}
        onChangeText={(text) => handleChange('fName', text)}
      />
      <TextInput
        placeholder={'Last Name'}
        placeholderTextColor={themeColor.BLACK}
        style={{
          width: '100%',
          height: 58,
          borderRadius: 30,
          backgroundColor: 'white',
          padding: 10,
          marginTop: '5%',
        }}
        value={lName}
        onChangeText={(text) => handleChange('lName', text)}
      />
      <TextInput
        placeholder={'Email Address'}
        placeholderTextColor={themeColor.BLACK}
        style={{
          width: '100%',
          height: 58,
          borderRadius: 30,
          backgroundColor: 'white',
          padding: 10,
          marginTop: '5%',
        }}
        value={email}
        onChangeText={(text) => handleChange('email', text)}
      />

      <TextInput
        placeholder={'Password'}
        placeholderTextColor={themeColor.BLACK}
        style={{
          width: '100%',
          height: 58,
          borderRadius: 30,
          backgroundColor: 'white',
          padding: 10,
          marginTop: '5%',
        }}
        value={password}
        onChangeText={(text) => handleChange('password', text)}
      />
      <TextInput
        value={cpassword}
        onChangeText={(text) => handleChange('cpassword', text)}
        placeholder={'Confrim Password'}
        placeholderTextColor={themeColor.BLACK}
        style={{
          width: '100%',
          height: 58,
          borderRadius: 30,
          backgroundColor: 'white',
          padding: 10,
          marginTop: '5%',
        }}
      />
      <TouchableOpacity
        placeholder={'Password'}
        placeholderTextColor={themeColor.BLACK}
        style={{
          width: '100%',
          height: 58,
          borderRadius: 30,
          backgroundColor: themeColor.blue,
          padding: 10,
          marginTop: '5%',
          justifyContent: 'center',
        }}
        onPress={()=>onPressRegister()}
        >
        <Text
          style={{
            fontSize: 22,
            color: 'white',
            fontFamily: 'Segoe UI',
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          Submit
        </Text>
      </TouchableOpacity>
      <View
        style={{
          borderColor: 'white',
          borderWidth: 2,
          marginTop: '5%',
          width: '100%',
        }}
      />

      <TouchableOpacity
        style={{ marginTop: '5%', justifyContent: 'center' }}
        onPress={() => navigation.navigate('About Us')}>
        <Text
          style={{
            fontSize: 18,
            color: themeColor.blue,
            fontFamily: 'Segoe UI',
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          About Us
        </Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: themeColor.PRIMARY,
    flex: 1,
  },
});
