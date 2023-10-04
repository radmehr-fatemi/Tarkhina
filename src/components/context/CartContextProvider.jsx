import React, { createContext, useReducer } from 'react';

//function
import { totalCounter } from '../shared/function';

const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    likedItems: [],
    total: 0,
    checkout: false
}

const cartReducer = (state, action) => {
    // console.log( state  )
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
                checkout: false,
                ...totalCounter( state )
            }

        case "REMOVE_ITEM":
            const indexR = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems.splice(indexR, 1)

            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...totalCounter( state )
            }

        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexI].quantity++

            return {
                ...state,
                selectedItems: [...state.selectedItems],
                checkout: false,
                ...totalCounter( state )
            }

        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexD].quantity > 1 ? state.selectedItems[indexD].quantity-- : null
            console.log( state.selectedItems[indexD].quantity )

            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...totalCounter( state )
            }

        case "LIKED_ITEM":
            if (!state.likedItems.find(item => item.id === action.payload.id)) {
                state.likedItems.push({
                    ...action.payload
                })
            } else {
                const indexL = state.likedItems.findIndex( item => item.id === action.payload.id );
                state.likedItems.splice( indexL ,1 )
            }

            return {
                ...state,
                likedItems : [ ...state.likedItems ]
            }

            case "CLEAR_LIKEDITEMS":
                return {
                    ...state,
                    likedItems : []
                }

            return {
                ...state,
                likedItems: [...state.likedItems]
            }

        case "CLEAR":
            return {
                ...state,
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: false
            }

        case "CHECKOUT":
            return {
                ...state,
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: true
            }

            default:
                return state
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