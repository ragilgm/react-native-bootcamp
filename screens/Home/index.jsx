import React from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Animated } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';


function Home(props) {
   const logoutHandler = () => {
      props.logout()
   }

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
               <Text style={styles.leftContent} onPress={() => deleteHandler(id)}><AntDesign name="deleteuser" size={24} color="white" style={{marginRight:20}}/>Delete</Text>
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
         renderRightActions={()=>rightActions(item.id)}

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
      <SafeAreaView style={styles.container}>
         <View style={styles.header}>
            <AntDesign name="logout" size={24} color="white" onPress={logoutHandler} />
         </View>
         <FlatList
            data={props.data}
            renderItem={renderItem}
            keyExtractor={data => data.id.toString()}
         />
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({

   header: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      height: 50,
      backgroundColor: "#0a0c6e",
      paddingTop: 15,
      paddingHorizontal: 20

   },
   action: {
      flexDirection: "row",
   },
   headerTitle: { color: "white" },
   container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
   },
   item: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "#42bcf5",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
   },
   leftAction: {
      backgroundColor: "#c42525",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      justifyContent: "center",
      flex:1
   },
   rightContent: {
      backgroundColor: "#139431",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      justifyContent: "center",
      flex:1
   },
   rightText: {
      fontWeight: "bold",
      fontSize: 20,
      padding: 20,
      textAlign: "center",
      color:"white"
   },
   leftContent: {
      fontWeight: "bold",
      fontSize: 20,
      padding: 20,
      textAlign: "center",
      color:"white"
   },
   label: {
      fontSize: 12,
   },
});


export default Home
