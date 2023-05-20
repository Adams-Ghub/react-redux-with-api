import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: [],
    isLoading: false,
    error: undefined
}

export const getAllUsers = createAsyncThunk(
    'users/getUsers',
    async (_, thunkAPI) => {
        try {
           const response = await fetch('https://randomuser.me/api/?results=5') 
           const data = await response.json()
           const users = data.results.map(user=>user.name)
           return users
           
        } catch (error) {
            return thunkAPI.rejectWithValue("Error!!! Something went wrong")
        }
    }
)

const userSlice = createSlice(
    {
        name: 'users',
        initialState,
        reducers: {

        },
        extraReducers: (builder) => {
            builder.addCase(getAllUsers.pending, (state) => {
                state.isLoading = true;
            }).addCase(getAllUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = action.payload
            }).addCase(getAllUsers.rejected, (state) => {
                state.isLoading = false;
                state.error = "Error!!! Couldn't fetch users"
            })
        }
    }
)


export default userSlice.reducer