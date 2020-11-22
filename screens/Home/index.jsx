import React from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

function Home(props) {
   const logoutHandler = () => {
      props.logout()
   }

   const editUserHandler = (id) => {
      props.editUser(id)
   }

   const viewHandler = (id) => { 
      props.viewUser(id);
   }

   const deleteHandler = (id) => { 
      props.delete(id)
   }

   const Item = ({ item }) => (
      <View style={styles.item}>
         <View >
            <Text style={styles.label}>{item.name}</Text>
            <Text style={styles.label}>{item.username}</Text>
            <Text style={styles.label}>{item.email}</Text>
         </View>
         <View style={styles.action}>
            <AntDesign name="eyeo" size={24} color="black" onPress={()=>viewHandler(item.id)} />
            <AntDesign name="edit" size={20} color="black" style={{ margin: 5 }} onPress={()=>editUserHandler(item.id)}/>
            <AntDesign name="delete" size={20} color="black" style={{ margin: 5 }} onPress={()=>deleteHandler(item.id)}/>

         </View>
      </View>
   );

   const renderItem = ({ item }) => (
      <Item item={item} />
   );


   return (
      <SafeAreaView style={styles.container}>
         <View style={styles.header}>
            <AntDesign name="logout" size={24} color="white" onPress={ logoutHandler}/>
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
   label: {
      fontSize: 12,
   },
});


export default Home
