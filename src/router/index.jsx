import React from 'react'
import { AddContact, HomeScreen, Detail, EditContact, Login, Register } from '../pages'
import { connect } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

const Router = (props) => {

   console.log('====================================');
   console.log(props.userLogin);
   console.log(props.isLogin);
   console.log('====================================');

   return (
      <Stack.Navigator>
         {props.userLogin === "" && props.isLogin === false ?
            <>
               <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
               <Stack.Screen name="Register" component={Register} />
            </>
            :
            <>
               <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
               <Stack.Screen name="AddContact" component={AddContact} />
               <Stack.Screen name="EditContact" component={EditContact} />
               <Stack.Screen name="Detail" component={Detail} />
            </>}

      </Stack.Navigator>
   )
}

const mapStateToProps = (state) => ({
   userLogin: state.AuthReducer.user,
   isLogin: state.AuthReducer.isLogin,
})

const mapDispatchToProps = (dispatch) => ({
   loginUser: (user) => dispatch({ type: "LOGIN", payload: user, isLogin: true }),
})


export default connect(mapStateToProps, mapDispatchToProps)(Router);
