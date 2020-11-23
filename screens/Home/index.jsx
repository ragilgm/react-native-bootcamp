import React from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';


function Home(props) {

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
      <SafeAreaView style={styles.container}>
         <View>
            <View style={styles.header}>
               <TouchableOpacity onPress={() => props.navigation.openDrawer()} style={styles.headerTitle}><AntDesign name="bars" size={24} color="white" />
                  
               </TouchableOpacity >
            </View>
         </View>
         <View>
            {props.children}
         </View>
    
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

});


export default Home
