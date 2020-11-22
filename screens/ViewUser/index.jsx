import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
function ViewUser(props) {

   console.log(props.data);

   const backHandler = () => {
      props.home()
   }

   return (
      <SafeAreaView >
         <ScrollView >
            <View style={style.header}>
               <Text style={{ color: "white" }} onPress={backHandler}><AntDesign name="back" size={24} color="white" />Back</Text>
            </View>
            <View style={style.container}>
               <View>
                  <View style={style.body}>
                  <Text style={style.title}>User Detail</Text>
                     <View>
                        <Text>Fullname : {props.data.name} </Text>
                        <Text>Username : {props.data.username}</Text>
                        <Text>Email : {props.data.email}</Text>
                        <Text>Password : {props.data.password}</Text>
                     </View>
                     <Text style={style.title}>Address</Text>
                     <View>
                        <Text>Street : {props.data.address.street}</Text>
                        <Text>Suite : {props.data.address.suite}</Text>
                        <Text>City : {props.data.address.city}</Text>
                        <Text>Zipcode : {props.data.address.zipcode}</Text>
                     </View>
                  </View>
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
   body: {
      backgroundColor: "#2955f2",
      marginHorizontal: 20,
      padding: 30,
      marginTop: 20,
      borderRadius:20
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
      marginTop: StatusBar.currentHeight || 0,
   },

   title: {
      fontSize: 15,
      marginTop: 10,
      marginBottom: 20,
      textAlign:'center'
   }

})

export default ViewUser
