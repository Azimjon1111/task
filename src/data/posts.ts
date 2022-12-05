import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const initialState = {
    data: [],
    status: 'idle',
};
export const getPosts = createAsyncThunk('/posts', async(query: any)=>{
  const posts = localStorage.getItem("posts")
//   console.log(typeof posts)
  return JSON.parse(posts as string)
//   if(posts == null){
//       return []
//   }else{
//     return posts
//   }
})
export const createPost = createAsyncThunk('/posts/create', async(item: any)=>{
    console.log(item)
    let posts = [];
    if (localStorage.getItem("posts")) {
      posts = JSON.parse(localStorage.getItem("posts") as string);
    }
    posts.push(item);
    console.log(posts)
    localStorage.setItem("posts", JSON.stringify(posts));
    return posts
})
const posts = createSlice({
    name: 'posts',
    initialState,
    extraReducers(builder) {
      builder
        .addCase(getPosts.pending, (state: any, action: any) => {
          state.status = 'loading'
        })
        .addCase(getPosts.fulfilled, (state: any, action:  any) => {
          state.status = 'succeeded'
          state.data = action.payload
        })
        .addCase(getPosts.rejected, (state: any, action:  any) => {
          state.status = 'failed'
          state.error = action.error.message
        })
        .addCase(createPost.fulfilled, (state: any, action:  any) => {
            console.log(action, "41");
            state.status = 'idle';
            state.data = action.payload;
        })
      }
  });
export const selectPosts = (state: any) => state.posts.data
export const reducer = posts.reducer;