import React, { useState } from 'react'
import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native';
export default function Login(props) {
   
   const styles = StyleSheet.create({
     
      button: {
        alignItems: "center",
        backgroundColor: "#fc6f03",
        padding: 10,
        borderRadius: 50,
        paddingLeft: 35,
        paddingRight: 35,
      },
      buttonText: {
        color:"white"
      },
      buttonLogin: {
        marginRight:10,
        alignItems: "center",
        backgroundColor: "#fc6f03",
        padding: 10,
        borderRadius: 50,
        paddingLeft: 50,
        paddingRight: 50,
        color:"white"
      },
    
      container: {
        marginTop:240,
        flex: 1,
        justifyContent: "center",
        alignItems:"center"
      },
      inputView:{
        width:"80%",
        backgroundColor:"grey",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },
      inputText: {
        height:50,
        color:"white"
      },
      buttonWrapper: {
        flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
      },
      title: {
         fontSize: 20,
         fontWeight: "bold",
         marginBottom:10
      }
   });

 

   
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")

  
const registerHandler = () => { 
   props.navigation.navigate("Register")
   }
   
   const loginHandler = () => { 
      props.login(username, password, props.navigation)
      
   }

   return (
      <View style={styles.container}>
         <Text style={styles.title}>Login Page</Text>
            <View style={styles.inputView} >
  
            <TextInput  
            
            placeholder="Username .."
            placeholderTextColor="white"
               style={styles.inputText}    
               onChangeText={text => setUsername(text)}
               defaultValue={username} 
            />
      
        </View>
        <View style={styles.inputView}>
            <TextInput  
                  secureTextEntry={true}
            placeholder="Password .."
            placeholderTextColor="white"
               style={styles.inputText}    
               onChangeText={text => setPassword(text)}
               defaultValue={password}  
            />
  
        </View>
        <View style={styles.buttonWrapper}>
          <View>
          <TouchableOpacity
                  style={styles.buttonLogin}
                  onPress={loginHandler}
        >
          <Text  style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity
           style={styles.button}
        >
                  <Text style={styles.buttonText}
                   onPress={registerHandler}>Register</Text>
        </TouchableOpacity>
        </View>
      </View>
      </View>
  
   );
  
  }

 