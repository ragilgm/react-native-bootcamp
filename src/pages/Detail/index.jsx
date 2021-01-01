import React from 'react'
import { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { KontakRef } from '../../config/firebase'

const Detail = (props) => {

   const [kontakId, setKontakId] = useState("")


   const getDataById = (id) => { 
      return KontakRef.doc(id).get()
   }

   useEffect(() => { 
      getDataById(props.route.params.id).then((res) => { 
         console.log('====================================');
         console.log(res.data());
         console.log('====================================');
         setKontakId(res.data())
      }).catch(err=> alert(err))
   },[])

   return (
      <View style={styles.pages}>
         <Text>Nama :</Text>
         <Text style={styles.text}>{kontakId.nama}</Text>
         <Text>Nomor Hp :</Text>
         <Text style={styles.text}>{kontakId.nomorHp}</Text>
         <Text>Alamat :</Text>
         <Text style={styles.text}>{kontakId.alamat}</Text>
      </View>
   )
}

export default Detail

const styles = StyleSheet.create({
   pages: {
      padding: 30,
      margin: 30,
      backgroundColor: "white",
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height:2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      borderRadius:5
   },
   text: {
      fontSize:16,
      fontWeight: "bold",
      marginBottom:10
   }
})
