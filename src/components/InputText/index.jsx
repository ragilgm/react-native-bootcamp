import React from 'react'
import { TextInput, Text, StyleSheet } from 'react-native'

const InputText = ({ label, placeholder, keyboardType, isTextArea, onChaneText, value, name }) => {
   if (isTextArea) {
      return (
         <>
            <Text style={styles.label}>{label} </Text>
            <TextInput
               multiline={true}
               numberOfLines={4}
               style={styles.textInputArea}
               placeholder={placeholder}
               keyboardType={keyboardType}
               onChangeText={(text)=>onChaneText(name, text)}
               value={value}
            />
         </>
      )
   } else {

      return (
         <>
            <Text style={styles.label}>{label} </Text>
            <TextInput
               style={styles.textInput}
               placeholder={placeholder}
               keyboardType={keyboardType}
               onChangeText={(text)=>onChaneText(name, text)}
               value={value}
            />
         </>
      )
   }
}

const styles = StyleSheet.create({
   label: {
      fontSize: 16,
      marginBottom: 5
   },
   textInput: {
      borderWidth: 1,
      borderColor: "grey",
      padding: 5,
      borderRadius: 5,
      marginBottom: 10

   },
   textInputArea: {
      textAlignVertical:"top",
      borderWidth: 1,
      borderColor: "grey",
      padding: 5,
      borderRadius: 5,
      marginBottom: 10

   }
})

export default InputText
