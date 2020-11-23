import React, { useState} from 'react'
import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native';
export default function Register(props) {
   
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
        marginTop:100,
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
   


   const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const loginhandler = () => { 
      props.navigation.navigate("Login")
   }
  const registerHandler = () => { 
    if (
      name === "" ||
      username === "" ||
      email === "" ||
      password === ""
    ) { 
      alert("All Input Required...!!")
      return
    }
   var dataUser= {
    "name": name,
    "username": username,
     "email": email,
    "password":password,
    "address": {
      "street": "",
      "suite": "",
      "city": "",
      "zipcode": "",
      "geo": {
        "lat": "",
        "lng": ""
      }
    },
    "phone": "",
    "website": "",
    "company": {
      "name": "",
      "catchPhrase": "",
      "bs": ""
    }
  }
      props.register(dataUser,props.navigation)
  }
  
   return (
      <View style={styles.container}>
         <Text style={styles.title}>Register Page</Text>
            <View style={styles.inputView} >
  
          <TextInput  
            placeholder="name .."
               placeholderTextColor="white"
               onChangeText={text => setName(text)}
               defaultValue={name}  
              style={styles.inputText}         
            />
      
        </View>
            <View style={styles.inputView} >
  
          <TextInput  
            placeholder="username .."
               placeholderTextColor="white"
               onChangeText={text => setUsername(text)}
               defaultValue={username}  
              style={styles.inputText}         
            />
      
        </View>
            <View style={styles.inputView} >
  
          <TextInput  
            placeholder="Email .."
               placeholderTextColor="white"
               onChangeText={text => setEmail(text)}
               defaultValue={email}  
              style={styles.inputText}         
            />
      
        </View>
        <View style={styles.inputView}>
         <TextInput  
           secureTextEntry={true}
            placeholder="password .."
               placeholderTextColor="white"
               onChangeText={text => setPassword(text)}
               defaultValue={password}  
              style={styles.inputText}         
            />
  
        </View>
        <View style={styles.buttonWrapper}>
          <View>
          <TouchableOpacity
                  style={styles.buttonLogin}
                  onPress={loginhandler}
        >
          <Text  style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity
                  style={styles.button}
                  onPress={registerHandler}
        >
              <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        </View>
      </View>
      </View>
  
   );
  
  }

 