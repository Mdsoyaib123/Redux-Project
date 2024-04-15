import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getData = createAsyncThunk('dataFaching', async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const result = res.json()
    return result
})
const DataFachingSlice = createSlice({
    name:'DataFaching',
    initialState:{
        user:[],
        isLoading: false,
        error: false,
    },
    extraReducers: (builder) => {
        builder.addCase(getData.pending, (state) => {
            state.isLoading=true
          })
         
          builder.addCase(getData.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLoading = false
          })
        
          builder.addCase(getData.rejected,(state, action) => {
            state.isLoading = false,
            state.error = action.error.message
            })
         
      },
})
export default DataFachingSlice.reducer