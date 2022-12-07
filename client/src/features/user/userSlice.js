import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    userData: {},
    loading: false,
    errorMessage: '',
}

//Generated, pending, fulfilled and rejected action types
export const fetchUser = createAsyncThunk("user/fetchUser", () => {    
    fetch('/me')
    .then(response => response.json())
    .then(data => data)
})

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchUser.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false
            state.userData = action.payload
            state.error = ''
        })
        builder.addCase(fetchUser.rejected,(state, action) => {
            state.loading = false
            state.userData = {}
            state.error = action.error.message
        })
    }
})

export default userSlice.reducer