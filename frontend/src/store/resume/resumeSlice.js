import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {
        addUserDetails : (state, action) =>{
            state.basicDetails = action.payload;
        },
        addUserEducation : (state, action) =>{
            state.education = action.payload;
        },
        addUserSkills : (state, action) =>{
            state.skills = action.payload;
        },
        addUserProfile : (state, action) =>{
            state.profile = action.payload;
        }
    }
})

export const {addUserDetails, addUserEducation, addUserSkills, addUserProfile} = userSlice.actions
export default userSlice.reducer