import { createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
    name : "cart",
    initialState : [],
    reducers : {
        addItem : (state, action)=>{
            state.items.push(action.payload)
        },
        removeItem : (state) =>{
            state.items.pop();
        },
        clearCart : (state)=>{
            state.items = []
        }
    }
})

export {cartReducer, addItem, removeItem, clearCart}