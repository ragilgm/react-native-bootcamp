import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity,ScrollView  } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import UserServices from '../../services/UserServices'

function Album(props) {

   const [render, setRender] = useState(false)
   const [album, setAlbum] = useState([])


   useEffect(() => {
      alert(props.userId)
      UserServices.getAlbumByUser(props.userId)
         .then(res => {
            console.log(res.data);
            setAlbum(res.data)
         })

   }, [render])


   const photoHandler = (id) => {
   }



   return (
      <SafeAreaView style={styles.container}>
   
            {album.map(a =>
               <View key={a.id} style={styles.item}>
                  <Text style={styles.label}>{a.title}</Text>
               </View>)}

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
   scrollView: {
      backgroundColor: 'pink',
      marginHorizontal: 20,
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
      backgroundColor: "red",
      display: "flex",
      // flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "#42bcf5",
      padding: 50,
      marginVertical: 8,
      marginHorizontal: 16,
   },
   label: {
      fontSize: 12,
      textAlign: "center"
   },
});

export default Album