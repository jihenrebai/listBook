import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
    name: "auth",
    initialState: { isLoggedIn: false, name: "Jihen rebai" },
    reducers: {
        logOut: (state) => {
            state.isLoggedIn = !state.isLoggedIn;
           
        },
    },
})
export const { logOut } = authSlice.actions;
export default authSlice.reducer;