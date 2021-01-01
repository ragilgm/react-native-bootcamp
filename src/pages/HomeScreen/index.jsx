import React from 'react'
import { useState, useEffect } from 'react'
import { ScrollView,View, Text, StyleSheet,Alert } from 'react-native'
import { KontakRef } from '../../config/firebase'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {CardContact} from '../../components'
import { faPlus } from '@fortawesome/free-solid-svg-icons'



const HomeScreen = (props) => {

   const [kontak, setKontak] = useState([])

   const fetchData=() => { 
      KontakRef.onSnapshot(querySnapshot => {
         var data = []
         querySnapshot.forEach((doc) => {
            var id = doc.id
            data.push({...doc.data(),id:doc.id})
         })
         setKontak(data)
      })
   }

   useEffect(() => {
      fetchData();
   }, [])

   const removeKontak = (id) => { 
      Alert.alert(
         'Info',
         'Apakah anda yakin ingin menghapus kontak ini?',
         [
           {
             text: 'Cancel',
             onPress: () => console.log('Cancel Pressed'),
             style: 'cancel'
           },
            {
               text: 'OK', onPress: () =>
                  
                  KontakRef.doc(id).delete().then((res) => { 
                     Alert.alert("Sukses", "Kontak berhasil di hapus..!!")
                     fetchData();
                  })
            }
         ],
         { cancelable: false }
       );
   }

   return (
      <View style={styles.page}>

         <View style={styles.header}>
            <Text style={styles.headerTitle}>Daftar Kontak</Text>
            <View style={styles.line}/>
         </View>

         <ScrollView showsVerticalScrollIndicator={false} style={styles.listKontak}>
            {kontak.length === 0 ?
               <>
                  <Text>Daftar Kontak Kosong</Text>
               </>
               :
               <>
                  {kontak.map((con) => 
                     <CardContact kontak={con} key={con.id} id={con.id} navigation={props.navigation} removeKontak={removeKontak}/>
                  )}
               </>
            }

         </ScrollView>

         <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.addButton} onPress={() => props.navigation.navigate('AddContact')}>
               <FontAwesomeIcon icon={faPlus}/>
            </TouchableOpacity>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   page: {
      flex: 1,
   },
   header: {
      paddingHorizontal: 30,
      paddingTop: 30,
   },
   headerTitle: {
      fontSize: 20,
      fontWeight:'bold'
   },
   line: {
      borderWidth: 1,
      marginTop:10
   },
   listKontak: {
      marginHorizontal: 30,
      marginTop: 20,
      zIndex: 0,
   },
   buttonWrapper: {
      flex: 1,
      position: "absolute",
      bottom: 0,
      right: 0,
      margin: 20
   },
   addButton: {
      padding: 20,
      backgroundColor: 'lightblue',
      borderRadius: 30,
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height:2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      zIndex:1
   }
})


export default HomeScreen
