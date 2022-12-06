import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
const initialState = {
    data: [],
    render_data: [],
    count: 0,
    status: 'idle',
};
export const getPosts = createAsyncThunk('/posts', async(query)=>{
  console.log(query)
  console.log(query.search.length)
  const posts = JSON.parse(localStorage.getItem("posts") );
//   console.log(typeof posts)
let data  = {}
  if(query.search){
    data = {
      count:  posts.filter((item)=> item.title.slice(0, query.search.length).toLowerCase() == query.search.toLowerCase()).length,
      data: posts.filter((item)=> {
        console.log(item.title.slice(0, query.search.length) == query.search)
       return item.title.slice(0, query.search.length).toLowerCase() == query.search.toLowerCase()
      } 
      ).slice(query.dropdown*(query.page-1), query.page*query.dropdown)
    }
    console.log(data, "data")
  }else if(!query.currentStatus){
    data = {
      count: posts.length,
      data: posts.slice(query.dropdown*(query.page-1), query.page*query.dropdown)
    }
  }else{
    data = {
     count: posts.filter((item)=> item.status == query.currentStatus).length ,
     data: posts.filter((item)=> item.status == query.currentStatus).slice(query.dropdown*(query.page-1), query.page*query.dropdown)
    }
  }
console.log(data)
  return {data, posts}
//   if(posts == null){
//       return []
//   }else{
//     return posts
//   }  
})
export const createPost = createAsyncThunk('/posts/create', async(item)=>{
    console.log(item)
    let posts = [];
    if (localStorage.getItem("posts")) {
      posts = JSON.parse(localStorage.getItem("posts"));
    }
    posts.push(item);
    console.log(posts)
    localStorage.setItem("posts", JSON.stringify(posts));
    return posts
})
export const updatePost = createAsyncThunk('/posts/update', async(item)=>{
  let posts = [];
  if (localStorage.getItem("posts")) {
    posts = JSON.parse(localStorage.getItem("posts"));
  }
  posts[item.index].status = item.status
  localStorage.setItem("posts", JSON.stringify(posts));
  return posts
})
const posts = createSlice({
    name: 'posts',
    initialState,
    extraReducers(builder) {
      builder
        .addCase(getPosts.pending, (state, action) => {
          state.status = 'loading'
        })
        .addCase(getPosts.fulfilled, (state, action ) => {
          state.status = 'succeeded'
          state.data = action.payload.posts
          state.render_data = action.payload.data.data
          state.count = action.payload.data.count
        })
        .addCase(getPosts.rejected, (state, action ) => {
          state.status = 'failed'
          state.error = action.error.message
        })
        .addCase(createPost.fulfilled, (state, action ) => {
            console.log(action, "41");
            state.status = 'idle';
            state.data = action.payload;
        })
        .addCase(updatePost.fulfilled, (state, action ) => {
          state.status = 'idle';
          state.data = action.payload;
      })
      }
  });
export const selectPosts = (state) => state.posts.data
export const reducer = posts.reducer;