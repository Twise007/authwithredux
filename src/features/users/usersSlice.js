import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '1', name:'john doe'},
    {id: '2', name:'emma joe'},
    {id: '3', name:'sam linus'},
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer