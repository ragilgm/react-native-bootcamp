const initialState = {
   isLogin: false,
   user: "",
}

const authReducer = (state = initialState, action) => {
   console.log(action);
   switch (action.type) {
       case "LOGIN":
           state.isLogin=action.isLogin
           state.user = action.payload
           return {
               user: state.user,
               isLogin: state.isLogin,
           }
       case "LOGOUT":
          state.user=action.payload
           state.isLogin=action.isLogin
           return {
               user: state.user,
               isLogin:state.isLogin
           }

       default:
           return state
   }
}

export default authReducer