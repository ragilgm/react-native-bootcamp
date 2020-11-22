import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

function ResetPassword(props) {


   const [password, setPassword] = useState("")
   const [reenterPassword, setReenterPassword] = useState("")
  
   const backHandler = () => {
      props.home()
   }

   const editDataHandler = () => {

      if (password !== reenterPassword) { 
         alert("Password Not Match..!! Please Try Again!")
         return
      }

      var resetPassword = {
         "password": password,
         
      }
      props.update(props.data.id, resetPassword)
   }


   return (
      <SafeAreaView >
         <ScrollView >
            <View style={style.header}>
               <Text style={{ color: "white" }} onPress={backHandler}><AntDesign name="back" size={24} color="white" />Back</Text>
               <Text style={{ color: "white" }} onPress={editDataHandler}><AntDesign name="save" size={24} color="white" />Save</Text>
            </View>
            <View style={style.container}>
               <Text style={style.titleForm}>Reset Password</Text>


               <View style={style.inputView}>
                  <TextInput
                     secureTextEntry={true}
                     placeholder="password .."
                     placeholderTextColor="white"
                     defaultValue={password}
                     onChangeText={text => setPassword(text)}
                     style={style.inputText}
                  />
               </View>
               <Text style={style.titleForm}>Re Enter Password</Text>
               <View style={style.inputView}>
                  <TextInput
                     secureTextEntry={true}
                     placeholder="Re Enter Password .."
                     placeholderTextColor="white"
                     defaultValue={reenterPassword}
                     onChangeText={text => setReenterPassword(text)}
                     style={style.inputText}
                  />
               </View>
            </View >
         </ScrollView>
      </SafeAreaView>
   )
}


const style = StyleSheet.create({
   container: {
      flex: 1,
      marginTop: 20
   },
   inputText: {
      height: 50,
      color: "white"
   },
   header: {
      marginTop: 20,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      height: 50,
      backgroundColor: "#0a0c6e",
      paddingTop: 15,
      paddingHorizontal: 20

   },
   container: {
      flex: 1,
      alignItems: "center",
      marginTop: StatusBar.currentHeight || 0,
   },
   inputView: {
      width: "80%",
      backgroundColor: "#9ee0ff",
      borderRadius: 5,
      height: 50,
      marginBottom: 20,
      justifyContent: "center",
      padding: 20
   },
   titleForm: {
      fontSize: 15,
      marginTop: 5,
      marginBottom: 10
   }

})
export default ResetPassword
