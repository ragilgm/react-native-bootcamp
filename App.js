import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { Login, Register,Home,EditUser,ViewUser } from './screens'
import UsersServices from './services/UserServices'
import { Alert} from'react-native'

export default function App() {

  const [render, setRender] = useState(false)
  const [currentUser, setCurrentUser] = useState("")
  const [user, setUser] = useState([])
  

  useEffect(() => { 
    UsersServices.getUsers()
        .then(res => { 
          console.log("feching");
        for (let i = 0; i < res.data.length; i++) {
          res.data[i].password = "user"
        }
        setUser(res.data)
        console.log(res.data);
      })
  },[render])

  const [page, setPage] = useState("LOGIN")
  
  const homePage = (param) => {
    setPage("HOME")    
    }
    const registerPage = () => { 
    setPage("REGISTER")    
    }
  
  const registerHandler = (u) => { 
      console.log(u);
      var id = user[user.length-1].id+1;
      u.id = id
      setUser([...user, u])
      Alert.alert("Register Successfull")
    setPage("LOGIN")   
  }

  const updateUserHandler = (id,u) => { 
      const updateUser = user;
      console.log(u);
      for (let i = 0; i < updateUser.length; i++) {
          const element = updateUser[i];
          if (element.id === id) { 
            element.name = u.name
            element.username = u.username
            element.email = u.email
            element.password = u.password
            element.address.city = u.address.city
            element.address.street = u.address.street
            element.address.suite = u.address.suite
            element.address.zipcode = u.address.zipcode
          }
      }
      Alert.alert("Update User Successfull")
      setUser(updateUser);
      setPage("HOME")
  }

    const loginPage = () => { 
    setPage("LOGIN")    
    }

  const logoutHandler = () => { 
    setPage("LOGIN")    
  }

  const EditUserHandler = (id) => { 
    console.log(id);
    var curent = user.filter(u => u.id === id);
    console.log(curent);
    console.log(curent.username);
      setCurrentUser(curent[0])
    setPage("EDIT")
  }
  
    const viewUserHandler = (id) => { 
        var curent = user.filter(u => u.id === id);
        setCurrentUser(curent[0])
        setPage("VIEW")
    }

    const deleteHandler = (id) => { 
        Alert.alert(
            "Confirm",
            "are you sure you want to delete this data?",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
                {
                    text: "OK", onPress: () => { 
                        console.log(id);
                        for (let i = 0; i < user.length; i++) {
                            const element = user[i];
                            if (element.id === id) { 
                                user.splice(i, 1)
                                Alert.alert("Delete Successfull")
                            }
                        }

                } }
            ],
            { cancelable: false }
          );
      
    
        
    }
  
  const RenderPage = () => { 
    switch (page) {
      case "LOGIN":
        return <Login home={homePage} data={user} register={registerPage} />
      case "REGISTER":
        return <Register login={loginPage} register={registerHandler} />
      case "HOME":
            return <Home data={user} logout={logoutHandler} editUser={EditUserHandler} viewUser={viewUserHandler} delete={deleteHandler}/>
      case "EDIT":
        return <EditUser home={homePage} data={currentUser} update={updateUserHandler}/>      
      case "VIEW":
        return <ViewUser home={homePage} data={currentUser}/>      
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
