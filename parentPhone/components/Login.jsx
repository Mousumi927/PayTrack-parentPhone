import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Alert,
  TouchableOpacity, ImageBackground
} from "react-native";
import React, { useState } from "react";
import { auth } from "../config/firebase.js";
import { signInWithEmailAndPassword } from "../config/firebase.js";
import Constants from "expo-constants";


const Login = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
  const handleLogin = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        Alert.alert("Login Successful!");
        navigation.navigate('Tabs');

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(errorMessage);
      });
  };

  return (
    <View style={styles.root}><ImageBackground source={require("../images/wave-haikei.png")}>
      <Image source={require("../images/logo.png")} style={styles.img} />
      <Text style={styles.text}>EMAIL</Text>
      <TextInput style={styles.input} onChangeText={setEmail} />
      <Text style={styles.text}>PASSWORD</Text>

      <TextInput
        secureTextEntry={true}
        style={styles.input}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.btn} onPress={handleLogin}>
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 17,
            fontWeight: "bold",
            paddingTop: 15,
          }}
        >
          Log In
        </Text>
      </TouchableOpacity></ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  root: {
    backgroundColor:"white",
    display: "flex",
    width: "100%",
    height: "100%",
  },
  text: {
    marginLeft: 30,
    color: "grey",
  },
  input: {
    height: 40,
    borderBottomWidth: 0.5,
    // marginTop:10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 15,
  },
  img: {
    marginTop: 20,
    marginLeft: "25%",
    width: "50%",
    marginBottom: 20
  },
  btn: {
    // borderWidth: .5,
    borderRadius: 30,
    width: "70%",
    marginLeft: "15%",
    marginTop: 20,
    height: 55,
    backgroundColor: "#0066FF",
  },
});


