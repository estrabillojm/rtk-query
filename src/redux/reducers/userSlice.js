import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    counter: 0,
    users: []
}

export const fetchUsers = createAsyncThunk(
    'user/fetchUsers',
    async (payload, thunkAPI) => {
        return await axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => res.data)
    }
)

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        increment: (state) => {
            state.counter += 1
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload
        })
    }

})

export const { increment } = userSlice.actions
export default userSlice.reducer