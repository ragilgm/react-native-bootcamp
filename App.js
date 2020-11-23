import React, {useState,useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {Home,Login,Users,Register,Album} from './screens'
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import UserServices from './services/UserServices'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { log } from 'react-native-reanimated';

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor:'#3277a8'
  },
  headerText: {
    marginTop: 25,
    marginRight: "auto",
    marginLeft:10,
    textAlign:'center'
  }
})

const Drawer = createDrawerNavigator();



export default function App() {
  const [users, setUsers] = useState([])
  const [isLogin, setIsLogin] = useState(false)
  const [currentUser, setCurrentUser] = useState("")

  useEffect(() => {
    UserServices.getUsers()
      .then(res => { 
        for (let i = 0; i < res.data.length; i++) {
          res.data[i].password = "user"
        }
        setUsers(res.data) 
      })
  },[])

  // function ==================================================

  const registerHandler = (u,navigation) => { 
    console.log(u);
    var id = users[users.length-1].id+1;
    u.id = id
    setUsers([...users, u])
    alert("Register Successfull")
    navigation.navigate('Login')
  }
  
  const loginHandler = (username, password, navigation) => { 
    const checkLogin = users.filter(data => data.username === username && data.password === password)
    if (checkLogin.length !== 0) {
      alert("Login Successfull")
      setIsLogin(true)
      setCurrentUser(checkLogin[0])
    } else { 
      alert("Login Failed")
      navigation.navigate("Login")
    }
  }

  // function ==================================================


  // mapping ===================================================
  const HomePage = ({navigation}) => { 
  return (
    <Home navigation={navigation}>
      <Users user={currentUser}/>
    </Home>)
}
  
const AlbumPage = ({navigation}) => { 
  return (
    <Home navigation={navigation}>
      <Album userId={currentUser.id}/>
    </Home>)
}
const PhotoPage = ({navigation}) => { 
  return (
    <Home navigation={navigation}>
      <Users users={currentUser} />
    </Home>)
}
  
  const RegisterPage = ({ navigation }) => { 
    return (<Register navigation={navigation} register={registerHandler}/>)
  }
  
  const LoginPage = ({ navigation }) => { 
    return (
      <Login users={users} navigation={navigation} login={loginHandler}/>
    )
  }
  // mapping ===================================================

  return (
    <NavigationContainer>
      {!isLogin ?
       <Drawer.Navigator initialRouteName="Login">
       <Drawer.Screen name="Login" component={LoginPage}  />
       <Drawer.Screen name="Register" component={RegisterPage}  />
     </Drawer.Navigator>
        :
        <Drawer.Navigator  initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomePage}  />
        <Drawer.Screen name="Albums" component={AlbumPage} />
        <Drawer.Screen name="Photos" component={PhotoPage} />
        <Drawer.Screen name="Logout" component={PhotoPage} />
      </Drawer.Navigator>
      }
    </NavigationContainer>
  );
}
