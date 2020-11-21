import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native';
import { Login, Register,Home} from './screens'
export default function App() {


  var dataUser={
      fullname:"",
      username: "",
      password: "",
    }
  
  const [user, setUser] = useState([dataUser])
  const [page, setPage] = useState("LOGIN")
  
  const homePage = (param) => {
    setUser(param)
    setPage("HOME")    
    }
    const registerPage = () => { 
    setPage("REGISTER")    
    }
  
  const registerHandler = (u) => { 
    console.log("U ", u);
    console.log("user ",user);
    setUser([...user, u])

  
    setPage("LOGIN")   
  }

    const loginPage = () => { 
    setPage("LOGIN")    
    }

  const RenderPage = () => { 
    switch (page) {
      case "LOGIN":
        return <Login home={homePage} data={user} register={registerPage}/>
      case "REGISTER":
        return <Register login={loginPage} register={registerHandler}/>
      case "HOME":
        return <Home data={user} logout={loginPage}/>
     
      default:
        break;
    }
  }




  return (
    <>
      {RenderPage()}
    </>

  );
}
