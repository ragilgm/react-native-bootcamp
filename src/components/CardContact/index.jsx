import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const CardContact = ({id, kontak, navigation,removeKontak }) => {


   return (
      <TouchableOpacity style={styles.container}
         onPress={() => navigation.navigate("Detail", { id: id })}>
         <View>
            <Text style={styles.nama}>{kontak.nama}</Text>
          <Text style={styles.noHp}>No Hp : {kontak.nomorHp}</Text>
         </View>
         <View style={styles.icon}>
            <FontAwesomeIcon icon={faEdit} color={"green"} size={20} style={styles.iconItem}
               onPress={()=> navigation.navigate("EditContact", {id:id })}/>
            <FontAwesomeIcon icon={faTrash} color={"red"} size={20} style={styles.iconItem}
               onPress={() => {removeKontak(id)}}/>
         </View>
      </TouchableOpacity>
   )
}
 
export default CardContact

const styles = StyleSheet.create({
   container: {
      margin:10,
      flexDirection: "row",
      padding: 15,
      backgroundColor: "white",
      borderRadius: 5,
      marginBottom: 20,
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height:2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation:5
   },
   nama: {
      fontSize: 16,
      fontWeight:"bold"
   },
   noHp: {
      fontSize: 12,
      color:"grey"
   },
   icon: {
      flexDirection: "row",
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
     
   },
   iconItem: {
      marginRight:5
   }
})
