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
// import firebase from "../config/firebase"

const Login = ({navigation}) => {
  const [email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[error,setError]=useState("")
useEffect(()=>{
   let user = firebase.auth().currentUser;
    if (user != null) {
      navigation.navigate("Home")
    } else {
      return;
    }
})
  const handleChange = (type, text) => {
    if (type === 'email') {
      setEmail(text);
      console.log(email)
    } else if (type === 'password') {
      setPassword(text);
    }
  };

  const onPressLogin = () => {
    if (email === '') {
      setError('Email is Required!!!');
    } else if (password === '') {
      setError('Password is Required!!!');
    } else if (email !== '' && password !== '') {
    setError("")
    // firebase
    // .auth()
    // .signInWithEmailAndPassword(email, password)
    // .then((response) => {
    //     const uid = response.user.uid
    //     const usersRef = firebase.firestore().collection('users')
    //     usersRef
    //         .doc(uid)
    //         .get()
    //         .then(firestoreDocument => {
    //             if (!firestoreDocument.exists) {
    //                 setError("User does not exist anymore.")
    //                 return;
    //             }
    //             setEmail("")
    //             setPassword("")
    //             const user = firestoreDocument.data()
    //             navigation.navigate('Home', {user})
    //         })
    //         .catch(error => {
    //             setError(error)
    //         });
    // })
    // .catch(error => {
    //     alert(error)
    // })
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center',marginTop:"3%" }}>
        <Text
          style={{ fontSize: 30, fontFamily: 'Segoe UI', fontWeight: 'bold' }}>
          Login
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
      />

      <TextInput
value={password}
onChangeText={(text) =>
  handleChange('password', text)
}
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
        onPress={()=>onPressLogin()}
        >
        <Text
          style={{
            fontSize: 22,
            color: 'white',
            fontFamily: 'Segoe UI',
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          Log In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{justifyContent:"center"}}
   onPress={()=>navigation.navigate("ForgotPassword")}
      >
        <Text
          style={{
            fontSize: 18,
            color: themeColor.blue,
            fontFamily: 'Segoe UI',
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
        Forgot Password
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
      <Text
          style={{
            fontSize: 20,
            color: themeColor.BLACK,
            fontFamily: 'Segoe UI',
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          Need An Account? 
        </Text>
      
      <TouchableOpacity style={{left:10,justifyContent:"center"}}
      onPress={()=>navigation.navigate("SignUp")}
      >
        <Text
          style={{
            fontSize: 18,
            color: themeColor.blue,
            fontFamily: 'Segoe UI',
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
         Sign Up Now
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
