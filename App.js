import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { Login, Register,Home,ResetPassword,ViewUser,Album,Photo } from './screens'
import UsersServices from './services/UserServices'
import { Alert} from'react-native'

export default function App() {

  const [render, setRender] = useState(false)
    const [currentUser, setCurrentUser] = useState("")
    const [userId, setUserId] = useState("")
    const [user, setUser] = useState([])
    const [albumId, setAlbumId] = useState("")
  

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

  const updatePasswordHandler = (id,password) => { 
    
    var dataUser = user;
    
    for (let i = 0; i < dataUser.length; i++) {
      const element = user[i];
      if (element.id === id) { 
        element.password = password.password
        alert("Reset Password Successfull, Please Login Again.!")
        break;
      }
    }
    alert(id)
    alert(password.password)
    setUser(dataUser)
    console.log(dataUser);
    setPage("LOGIN")

  }


    const loginPage = () => { 
    setPage("LOGIN")    
    }

  const logoutHandler = () => { 
    setPage("LOGIN")    
  }
    
  const PhotoHandler = (id) => { 
        setAlbumId(id)
        setPage("PHOTO")
    }
    const AlbumHandler = (id) => { 
        setUserId(id)
        setPage("ALBUM")
    }


  const resetPasswordHandler = (id) => { 
    console.log(id);
    var curent = user.filter(u => u.id === id);
    console.log(curent);
    console.log(curent.username);
      setCurrentUser(curent[0])
    setPage("RESET-PASSWORD")
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
                              break;
                            }
                            
                          alert("called")
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
            return <Home data={user} logout={logoutHandler} resetPassword={resetPasswordHandler} viewUser={viewUserHandler} delete={deleteHandler} album={AlbumHandler}/>
      case "RESET-PASSWORD":
        return <ResetPassword home={homePage} data={currentUser} update={updatePasswordHandler}/>      
      case "VIEW":
        return <ViewUser home={homePage} data={currentUser}/>      
      case "ALBUM":
            return <Album back={homePage} userId={userId} photo={PhotoHandler}/>      
      case "PHOTO":
            return <Photo back={homePage} albumId={albumId} />      
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
