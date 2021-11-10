import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface Cprops{
    count:number
}
const initialState:Cprops={
    count:0
}
const countSlice = createSlice({
    name: 'count',
    initialState:initialState ,
    reducers: {
       getCount:(state)=>{
           state.count=state.count + 1
       }
        
    },
   

});

export const {getCount} = countSlice.actions;
export default countSlice.reducer;