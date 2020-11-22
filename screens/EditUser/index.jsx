import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput,SafeAreaView ,StatusBar ,ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

function EditUser(props) {

   const [name, setName] = useState(props.data.name)
   const [username, setUsername] = useState(props.data.username)
   const [email, setEmail] = useState(props.data.email)
   const [password, setPassword] = useState(props.data.password)
   const [street, setStreet] = useState(props.data.address.street)
   const [suite, setSuite] = useState(props.data.address.suite)
   const [city, setCity] = useState(props.data.address.city)
   const [zipcode, setZipcode] = useState(props.data.address.zipcode)


   const changedefaultValue = (e) => { 
      console.log('====================================');
      console.log(e);
      console.log('====================================');
   }

   const backHandler = () => {
      props.home()
   }

   const editDataHandler = () => { 
      console.log(name);
      console.log(username);
      console.log(email);
      console.log(password);
      var dataUser = {
         "name": name,
         "username":username,
         "email": email,
         "password": password,
         "address":  {
            "city": city,
            "street": street,
            "suite": suite,
            "zipcode":zipcode,
          }
      }
      console.log('====================================');
      console.log(dataUser);
      console.log('====================================');
      props.update(props.data.id,dataUser)
   }


   return (
      <SafeAreaView >
         <ScrollView >
         <View style={style.header}>
            <Text style={{ color: "white" }} onPress={backHandler}><AntDesign name="back" size={24} color="white" />Back</Text>
            <Text style={{ color: "white" }} onPress={editDataHandler}><AntDesign name="save" size={24} color="white" />Save</Text>
         </View>
         <View  style={style.container}>
            <Text style={style.titleForm}>Edit User</Text>
            <View style={style.inputView}>
               <TextInput
                  placeholder="name .."
                  placeholderTextColor="white"
                  onChangeText={text => setName(text)}
                  defaultValue={name}
                  style={style.inputText}
               />
            </View>
            <View style={style.inputView}>
               <TextInput
                  placeholder="username .."
                  placeholderTextColor="white"
                  onChangeText={text => setUsername(text)}
                  defaultValue={username}
                  style={style.inputText}
               />
            </View>
            <View style={style.inputView}>
               <TextInput
                  placeholder="email .."
                  placeholderTextColor="white"
                  defaultValue={email}
                  onChangeText={text => setEmail(text)}
                  style={style.inputText}
               />
            </View>
            <View style={style.inputView}>
               <TextInput
                  placeholder="password .."
                  placeholderTextColor="white"
                  defaultValue={password}
                  onChangeText={text => setPassword(text)}
                  style={style.inputText}
               />
            </View>
            <Text style={style.titleForm}>Address</Text>
            <View style={style.inputView}>
               <TextInput
                  placeholder="street .."
                  placeholderTextColor="white"
                  defaultValue={street}
                  onChangeText={text => setStreet(text)}
                  style={style.inputText}
               />
            </View>
            <View style={style.inputView}>
               <TextInput
                  placeholder="suite .."
                  placeholderTextColor="white"
                  defaultValue={suite}
                  onChangeText={text => setSuite(text)}
                  style={style.inputText}
               />
            </View>
            <View style={style.inputView}>
               <TextInput
                  placeholder="city .."
                  placeholderTextColor="white"
                  defaultValue={city}
                  onChangeText={text => setCity(text)}
                  style={style.inputText}
               />
            </View>
            <View style={style.inputView}>
               <TextInput
                  placeholder="zipcode .."
                  placeholderTextColor="white"
                  defaultValue={zipcode}
                  onChangeText={text => setZipcode(text)}
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
export default EditUser
