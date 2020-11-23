import React from 'react'
import { View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';


function Users(props) {

   console.log(props.users)

   const viewHandler = (id) => {
      props.viewUser(id);
   }

   const deleteHandler = (id) => {
      props.delete(id)
   }

   const resetPasswordHandler = (id) => {
      props.resetPassword(id)
   }

   const albumHandler = (id) => {
      props.album(id)
   }

   const LeftActions = (id) => {
      return (
         <View style={styles.leftAction}>
            <View >
               <Text style={styles.leftContent} onPress={() => deleteHandler(id)}><AntDesign name="deleteuser" size={24} color="white" style={{ marginRight: 20 }} />Delete</Text>
            </View>

         </View>
      )
   }
   const rightActions = (id) => {
      return (
         <View style={styles.rightContent}>
            <View >
               <Text style={styles.rightText} onPress={() => resetPasswordHandler(id)}>
                  <AntDesign name="lock1" size={24} color="white" />Reset Password</Text>
            </View>

         </View>
      )
   }

   const Item = ({ item }) => (
      <Swipeable
         renderLeftActions={() => LeftActions(item.id)}
         onSwipeableLeftOpen={() => deleteHandler(item.id)}
         renderRightActions={() => rightActions(item.id)}

      >
         <View style={styles.item}>
            <View >
               <Text style={styles.label}>{item.name}</Text>
               <Text style={styles.label}>{item.username}</Text>
               <Text style={styles.label}>{item.email}</Text>
            </View>
            <View style={styles.action}>
               <Ionicons name="md-albums" size={24} style={{ margin: 5 }} onPress={() => albumHandler(item.id)} color="black" />
               <AntDesign name="eyeo" size={24} color="black" style={{ margin: 5 }} onPress={() => viewHandler(item.id)} />
            </View>
         </View>
      </Swipeable>
   );

   const renderItem = ({ item }) => (
      <Item item={item} />
   );


   return (
      <View style={styles.container}>
         <Text style={styles.h1}>Welcome Back {props.user.name}....!!</Text>
         <Text>Have a Nice Day... :)</Text>
      </View>
   )
}

const styles = StyleSheet.create({

   container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      marginTop: StatusBar.currentHeight || 0,
   },
   h1: {
      fontSize: 20,
      fontWeight: "600",
      marginTop: 100,
      marginBottom:10
   }

});


export default Users
