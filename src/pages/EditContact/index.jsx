import React from 'react'
import { useState,useEffect } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { InputText } from '../../components'
import FIrebaseDb from '../../config/firebase/firebase'

const EditContact = (props) => {

   var initialValue = {
      nama: "",
      nomorHp: "",
      alamat:""
   }
   const [biodata, setBiodata] = useState(initialValue)

   useEffect(() => {
      FIrebaseDb.fireDb.collection("kontak").doc(props.route.params.id).get()
         .then(res => { 
            setBiodata(res.data())
         }).catch(err => { 
            Alert.alert("Error",err)
         })
   },[])




   const onChangeText = (name, value) => { 
      setBiodata({...biodata, [name]:value})
   }

   const editKontakHandler = (id) => {
      if (biodata.nama && biodata.nomorHp && biodata.alamat) {
         console.log(biodata);
         const kontak = {
            nama: biodata.nama,
            nomorHp: biodata.nomorHp,
            alamat:biodata.alamat
         }

         FIrebaseDb.fireDb.collection("kontak").doc(id).set(kontak).then(res => { 
            Alert.alert("Sukses", "Kontak berhasil di Edit..!!")
            props.navigation.replace("Home")
         }).catch(err => { 
            Alert.alert("Error",err) 
         })

      } else { 
         Alert.alert("error","Nama, No Hp dan Alamat Wajib Diisi..!!")
      }
   }


   return (
      <View style={styles.pages}>
         <InputText
            label="Nama :"
            placeholder="Masukan Nama "
            onChaneText={onChangeText}
            value={biodata.nama}
            name="nama"
         />

         <InputText
            label="No Hp :"
            placeholder="Masukan No Hp "
            keyboardType="number-pad"
            onChaneText={onChangeText}
            value={biodata.nomorHp}
            name="nomorHp"
         />
         <InputText
            label="Alamat :"
            placeholder="Masukan Alamat "
            isTextArea={true}
            onChaneText={onChangeText}
            value={biodata.alamat}
            name="alamat"
         />
         <TouchableOpacity style={styles.button} onPress={()=>editKontakHandler(props.route.params.id)}>
            <Text style={styles.textButton}>Submit</Text>
         </TouchableOpacity>
      </View>
   )
}

const styles = StyleSheet.create({
   pages: {
      flex: 1,
      padding: 30 
   },
   button: {
      backgroundColor: "black",
      padding: 10,
      borderRadius: 5,
      marginTop: 10,
 
   },
   textButton: {
      color: "white",
      fontSize: 16,
      textAlign:"center"
   }
})

export default EditContact
