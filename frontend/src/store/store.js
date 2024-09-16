import {configureStore} from "@reduxjs/toolkit"
import  userSlice  from "./resume/resumeSlice"

export const store= configureStore({
    reducer: {
        user: userSlice
    }
})