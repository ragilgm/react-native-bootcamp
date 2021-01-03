import React from 'react'
import {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import { InputText } from '../../components'
import { UserRef} from '../../config/firebase'

const Register = (props) => {

   var initialValue = {
      fullname: "",
      username: "",
      password:""
   }
   const [register, setRegister] = useState(initialValue)

   const onChangeText = (name, value) => { 
      setRegister({...register, [name]:value})
   }

   const registerHandler = () => { 
      if (register.fullname && register.username && register.password) {
           const user = {
            fullname: register.fullname,
            username: register.username,
            password:register.password
         }
         UserRef.add(user).then(res => { 
            Alert.alert("Sukses", "Registrasi Berhasil")
            props.navigation.replace("Login")
         }).catch(err => { 
            Alert.alert("Error", err)
         })
      } else { 
         Alert.alert("Error", "Fullname, Username dan Password tidak boleh kosong..!!")
      }
   }

   return (
      <View style={styles.page}>
         <View style={styles.inputContainer}>
            <InputText
               label="Fullname"
               placeholder="Input Fullname ..."
               value={register.fullname}
               onChaneText={onChangeText}
               name="fullname"
            />
            <InputText
               label="Username"
               placeholder="Input Username ..."
               value={register.username}
               onChaneText={onChangeText}
               name="username"
            />
            <InputText
               label="Password"
               placeholder="Input Password ..."
               value={register.password}
               onChaneText={onChangeText}
               name="password"
               isPassword={true}
            />
            <TouchableOpacity style={styles.buttonContainer}
               onPress={registerHandler}   
            >
               <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>

         </View>

      </View>
   )
}

export default Register

const styles = StyleSheet.create({
   pages: {
      flex: 1,
      margin: 30,
      padding: 30
   },
   inputContainer: {
      marginHorizontal: 30,
     marginTop:30
   },
   label: {
      fontSize: 16,
      fontWeight: "bold",
      marginTop: 15,
      marginBottom: -15
   },
   buttonContainer: {
      marginTop: 15,
      backgroundColor: "black",
      padding: 10,
      borderRadius: 5
   },
   buttonText: {
      fontSize: 16,
      fontWeight: "bold",
      color: "white",
      textAlign: "center"
   },
})
