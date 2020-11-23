import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import UserServices from '../../services/UserServices'

function Photo(props) {

   const [render, setRender] = useState(false)
   const [album, setAlbum] = useState([])
   const [page, setPage] = useState(1)
   const [refresh, setRefresh] = useState(false)

   useEffect(() => {
      console.log('====================================');
      console.log(props.albumId);
      console.log('====================================');
      getPhotos(props.albumId, page,true)

   }, [render])


   const getPhotos = (albumId, page, isRefresh) => {
      setRefresh(true)
      setPage(page)
      UserServices.getPhotoByAlbum(albumId, page)
         .then(res => {

            console.log(res.data);
            
            // check refresh atau loadmore
            if (isRefresh) {
               setAlbum(res.data)
            } else {
               setAlbum([...album, res.data])
            }

         }).catch(err => {
            alert(err)
         }).finally(() => { 
            setRefresh(false)
         })
   }

   // method on refresh
   const onRefresh = () => {
      getPhotos(props.albumId, 1,true)
      
    }
   
     // method loadmore
   const loadMore = () => {
      getPhotos(props.albumId, page+1, false)
         
   }
   

   const Item = ({ item }) => (
      <View style={styles.item}>
         <Image
            source={{ uri: item.url }}
            style={{width:160, height:160, backgroundColor:"red"}}
         ></Image>
      </View>
   );
   
   const renderItem = ({ item }) => (
      <Item item={item} />
   );
   
   

   return (
      <SafeAreaView style={styles.container}>
         <View style={styles.header}>
            <Text style={{ color: "white" }} onPress={props.back}><AntDesign name="back" size={24} color="white" />Back</Text>
            <Text style={{ color: "white", marginTop:7,marginRight:40 }}>Photos</Text>
            <Text style={{ color: "white" }}></Text>
         </View>
         <FlatList
            data={album}
            renderItem={renderItem}
            keyExtractor={(data)=> data.id}
            onRefresh={onRefresh}
            refreshing={refresh}
            onEndReached={loadMore}
            numColumns={2}
            onEndReachedThreshold={0.5}
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
   imageItem: {
      backgroundColor: "red",
      width: "50%",
      height:100
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
      justifyContent: "center",
      paddingTop:30,
      marginVertical: 8,
      marginHorizontal: 8,
      alignItems:"stretch"
   },
   label: {
      fontSize: 12,
   },
});

export default Photo
