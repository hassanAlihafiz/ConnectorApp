import React,{useState,useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,Alert
} from 'react-native';
import themeColor from '../assets/Color/colors';
//import firebase from "../config/firebase"

const Login = ({navigation}) => {
  const [email,setEmail]=useState("")
 
  const[error,setError]=useState("")
const handleChange = (type, text) => {
  if (type === 'email') {
      setEmail(text);
    }
  };

  const ForgotPassword = () => {
      // firebase.auth().sendPasswordResetEmail(email)
      // .then(function (user) {
      //   alert('Please check your email...')
      //   setEmail("")
      // }).catch(function (e) {
      //   console.log(e)
      // })
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center',marginTop:"3%" }}>
        <Text
          style={{ fontSize: 30, fontFamily: 'Segoe UI', fontWeight: 'bold' }}>
          Forget Password
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
          marginTop: '3%',
          width: '100%',
        }}
      />
       <Text
          style={{
            fontSize: 16,
            color: "red",
          fontFamily: 'Segoe UI',
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
     {error}
        </Text>


      <TextInput
value={email}
onChangeText={(text) =>
  handleChange('email', text)
}
placeholder={'Enter Your Email Address'}
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
        onPress={()=>ForgotPassword()}
        >
        <Text
          style={{
            fontSize: 22,
            color: 'white',
            fontFamily: 'Segoe UI',
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          Send
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

      <View style={{flexDirection:"row",justifyContent:"center",width:"100%",marginTop:"5%"}}>
     
      
      <TouchableOpacity style={{left:10,justifyContent:"center"}}
      onPress={()=>navigation.navigate("Login")}
      >
        <Text
          style={{
            fontSize: 18,
            color: themeColor.blue,
            fontFamily: 'Segoe UI',
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
         Log In
        </Text>
      </TouchableOpacity>
      </View>

      <View style={{marginTop:"5%"}}>
      <Image source={require("../assets/Kit_Banner.png")} style={{width:Dimensions.get("window").width*0.9,height:108}}/>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: themeColor.PRIMARY,
    flex: 1,
  },
});
