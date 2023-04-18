import { createSlice } from "@reduxjs/toolkit";


interface User {
   id: string,
   email: string,
   firstName: string,
   lastName: string,
}

const initialState: User = {
   id: "",
   email: "",
   firstName: "",
   lastName: ""
}

const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      updateProfile: (state, action) => {
         state = action.payload
      },
      clearProfile: () => {
         return initialState
      }
   }
})

export const {  } = userSlice.actions
export default userSlice.reducer