const initialState = []

const dataReducer = (state = initialState, action) => {
   console.log(action);
   switch (action.type) {
       case "GET-DATA":
           state = action.payload
           return {
               kontak: state
           }
       default:
           return initialState
   }
}

export default dataReducer