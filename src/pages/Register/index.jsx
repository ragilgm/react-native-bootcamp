import React from 'react'
import {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import { InputText } from '../../components'
import FIrebaseDb from '../../config/firebase/firebase'

const Register = (props) => {

   var initialValue = {
      email: "",
      password:""
   }
   const [register, setRegister] = useState(initialValue)

   const onChangeText = (name, value) => { 
      setRegister({...register, [name]:value})
   }

   const registerHandler = () => { 
      if (register.email && register.password) {
           const user = {
            email: register.email,
            password:register.password
         }
         FIrebaseDb.createfirebaseUser(user).then(res => { 
            Alert.alert("Sukses", "Registrasi Berhasil")
            props.navigation.replace("Login")
         }).catch(err => { 
           console.log(err);
         })
      } else { 
         Alert.alert("Error", "Fullname, Username dan Password tidak boleh kosong..!!")
      }
   }

   return (
      <View style={styles.page}>
         <View style={styles.inputContainer}>
            <InputText
               label="Email"
               placeholder="Input email ..."
               value={register.email}
               onChaneText={onChangeText}
               name="email"
            />
            <InputText
               label="password"
               placeholder="Input password ..."
               value={register.password}
               onChaneText={onChangeText}
               name="password"
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
