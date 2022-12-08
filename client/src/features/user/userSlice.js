import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    userData: null,
    loading: false,
    errorMessage: '',
    loggedIn: false
}

//Generated, pending, fulfilled and rejected action types
export const fetchUser = createAsyncThunk("user/fetchUser", () => {
    return (   
        fetch('/me')
        .then(response => response.json())
    )
})


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        createUser: (state, action) => {
            state.userData = action.payload
            state.loggedIn = true
        },
        logoutUser: (state) => {
            state.userData = null
            state.loggedIn = false
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchUser.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false
            state.errorMessage = ''
            state.userData = action.payload
        })
        builder.addCase(fetchUser.rejected,(state, action) => {
            state.loading = false
            state.errorMessage = action.error.message
        })
    }
})

export default userSlice.reducer
export const { createUser, logoutUser } = userSlice.actions