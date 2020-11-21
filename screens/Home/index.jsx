import React from 'react'
import { View,Text,TouchableOpacity} from 'react-native'

function Home(props) {
   const logoutHandler = () => { 
      props.logout()
   }
   return (
      <View>
         <Text>Selamat Datang kembali {props.data.username}</Text>
         <View>
          <TouchableOpacity
                  onPress={logoutHandler}
        >
          <Text >logout</Text>
        </TouchableOpacity>
        </View>
      </View>
   )
}

export default Home
