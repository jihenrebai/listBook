import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import reprtSlice, { logInsert } from "./reprtSlice";
export const getBooks = createAsyncThunk('book/getBooks', async (_, thunkAPI) => {
      const{rejectWithValue}=thunkAPI
    try {
        const res = await fetch('http://localhost:3005/books')
        const data = await res.json();
        return data
      
    } catch (error) {

        return rejectWithValue(error.message) 
        
    }
    
}   
)
export const insertBook = createAsyncThunk('book/insertBook', async (bookData, thunkAPI) => {
    const { rejectWithValue, getState,dispatch } = thunkAPI;
    try {
        bookData.username=getState().auth.name
        const res = await fetch('http://localhost:3005/books', {
            method: 'POST',
            body: JSON.stringify(bookData),
            headers: {
                'Content-type': 'application/json ; charset=UTF-8',
            }
        })
        const data = await res.json()
        dispatch(logInsert({ name: 'insertbook', state: 'success' }))
        dispatch(deleteBook({id:5}))
        return data;
        
    } catch (error) {
        rejectWithValue(error.message);
        dispatch(logInsert({name:'insertbook',state:'failed'}))
    }
})
export const deleteBook = createAsyncThunk('book/deleteBook', async(item, thunkAPI)=> {
    const { rejectWithValue } = thunkAPI;
    try {
       
        const res = await fetch(`http://localhost:3005/books/${item.id}`, {
            method: 'DELETE',
           
            headers: {
                'Content-type': 'application/json ; charset=UTF-8',
            }
        })
        return item;
        
    } catch (error) {
        rejectWithValue(error.message);
    }
            
})
const bookSlice = createSlice({
    name: 'book',
    initialState: { books: [] , isLoading:false,error:null},
    extraReducers: (builder) => {
        //get books
        builder.addCase(getBooks.pending, (state, action) => {
            state.isLoading=true
        state.error=null
        })
        builder.addCase(getBooks.fulfilled, (state, action) => {
            state.isLoading=false
            state.books=action.payload
        })
        builder.addCase(getBooks.rejected, (state, action) => {
            state.isLoading = false
            state.error=action.payload
          
        })   
        //insert books
        builder.addCase(insertBook.pending, (state, action) => {
            state.isLoading = true;
            state.error=null
        })
        builder.addCase(insertBook.fulfilled, (state, action) => {
            state.isLoading=false
            state.books.push(action.payload)
        })
        builder.addCase(insertBook.rejected, (state, action) => {
            state.isLoading = false
            state.error=action.payload
          
        }) 
        //DeleteBook
        builder.addCase(deleteBook.pending, (state, action) => {
            state.isLoading = true;
            state.error=null
        })
        builder.addCase(deleteBook.fulfilled, (state, action) => {
            state.isLoading = false
            state.books=state.books.filter((el)=>el.id!==action.payload)
            
        })
        builder.addCase(deleteBook.rejected, (state, action) => {
            state.isLoading = false
            state.error=action.payload
          
        }) 
       
    },
})
export default bookSlice.reducer;