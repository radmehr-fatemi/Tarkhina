import React, { createContext, useReducer } from 'react';

const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    likedItems: [],
    total: 0,
    checkout: false
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                checkout: false
            }

        case "REMOVE_ITEM":
            const indexR = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems.splice(indexR, 1)

            return {
                ...state,
                selectedItems: [...state.selectedItems]
            }

        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexI].quantity++

            return {
                ...state,
                selectedItems: [...state.selectedItems],
                checkout: false
            }

        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexD].quantity--

            return {
                ...state,
                selectedItems: [...state.selectedItems]
            }

        case "LIKED_ITEM":
            if (!state.likedItems.find(item => item.id === action.payload.id)) {
                state.likedItems.push({
                    ...action.payload
                })
            }

            return {
                ...state,
                likedItems: [...state.likedItems]
            }

        case "CLEAR":
            return {
                selectedItems: [],
                itemsCounter: 0,
                likedItems: [],
                total: 0,
                checkout: false
            }

        case "CHECKOUT":
            return {
                selectedItems: [],
                itemsCounter: 0,
                likedItems: [],
                total: 0,
                checkout: true
            }
    }
}

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;