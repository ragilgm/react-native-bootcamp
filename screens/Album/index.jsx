import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import UserServices from '../../services/UserServices'

function Album(props) {

   const [render, setRender] = useState(false)
   const [album, setAlbum] = useState([])


   useEffect(() => {
      UserServices.getAlbumByUser(props.userId)
         .then(res => {
            console.log(res.data);
            setAlbum(res.data)
         })

   }, [render])


   const photoHandler = (id) => { 

      props.photo(id)
   }

   const Item = ({ item }) => (
      <View style={styles.item}  >
         <View >
            <Text onPress={()=>photoHandler(item.id)} style={styles.label}>{item.title}</Text>
         </View>
      </View>
   );

   
const renderItem = ({ item }) => (
   <Item item={item} />
);



   
   return (
      <SafeAreaView style={styles.container}>
         <View style={styles.header}>
            <Text style={{ color: "white" }} onPress={props.back}><AntDesign name="back" size={24} color="white" />Back</Text>
            <Text style={{ color: "white", marginTop:7,marginRight:40 }}>Albums</Text>
            <Text style={{ color: "white" }}></Text>
         </View>
         <FlatList
            data={album}
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

export default Album
