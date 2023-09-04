import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {id: '1', title:'Learning Redux Toolkit', content:'i love redux.'},
    {id: '2', title:'Learning Redux Slices...', content:'i love slice.'},
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
            state.push(action.payload)
        }, 
        prepare(title, content, userId) { 
            return {
            payload: {
            id: nanoid(),
            title,
            content, 
            userId
            }
            }
        }
    }
    }

})

export const selectAllPosts = (state) => state.posts;
export const {postAdded} = postsSlice.actions
export default postsSlice.reducer