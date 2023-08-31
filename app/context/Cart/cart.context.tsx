'use client'

import React, { PropsWithChildren, useMemo, useReducer, createContext, useContext } from "react";
import { Product } from "@prisma/client";
import { SafeProduct, CartTypes } from "@/app/types";

let cartFromLocalstorageAsString

if (typeof window !== 'undefined') {
  // Perform localStorage action
  cartFromLocalstorageAsString = localStorage.getItem('nike-cart')
}



// export interface State {
//     items: SafeProduct[]
//     isEmpty: boolean;
//     totalItems: number;
//     total: number;
// }


let initialState: CartTypes

if (cartFromLocalstorageAsString) {
  const cartFromLocalstorage: CartTypes = JSON.parse(cartFromLocalstorageAsString)

  if (cartFromLocalstorage) {
    initialState = {
      ...cartFromLocalstorage
    };
  }

} else {
  initialState = {
    items: [],
    isEmpty: true,
    totalItems: 0,
    total: 0,
  };
}

// let initialState: State = {
//   items: [],
//   isEmpty: true,
//   totalItems: 0,
//   total: 0,
// };


type Action =
  | { type: "ADD_TO_CART"; item: SafeProduct }
  | { type: "REMOVE_FROM_CART"; id: SafeProduct['ID'] }
  | { type: "UPDATE_ITEM_IN_CART"; id: SafeProduct['ID']; item: SafeProduct }
  | { type: "GET_CART" }
  | { type: "RESET_CART" };

export const CartContext = createContext<CartTypes | any>(initialState!);

CartContext.displayName = 'CartContext'
let updatedCart = undefined
function CartReducer(state: CartTypes, action: Action){
    switch (action.type) {
        case "ADD_TO_CART": {
          updatedCart = {
            ...state,
            items: [...state.items, action.item],
            isEmpty: false,
            totalItems: state.totalItems + 1,
            total: action.item.salePrice ? (state.total + action.item.salePrice) : (state.total + action.item.price)
          };

          localStorage.setItem('nike-cart', JSON.stringify(updatedCart))

          return updatedCart;
        }
        case "REMOVE_FROM_CART": {
          const filterdItemsArr = state.items.filter((item: SafeProduct) => {
            return item.ID !== action.id
          })

          const deletingItem: SafeProduct = state.items.filter((item: SafeProduct) => {
            return item.ID === action.id
          })[0]

          updatedCart = {
            ...state,
            items: filterdItemsArr,
            isEmpty: filterdItemsArr.length > 0 ? false : true,
            totalItems: state.totalItems - 1,
            total: deletingItem.salePrice ? (state.total - deletingItem.salePrice) : (state.total - deletingItem.price)
          };

          localStorage.setItem('nike-cart', JSON.stringify(updatedCart))

          return updatedCart;
        }
        case "UPDATE_ITEM_IN_CART": {
          let filterdItemsArr = state.items.filter((item: SafeProduct) => {
            return item.ID !== action.id
          })

          filterdItemsArr.push(action.item)

          updatedCart = {
            ...state,
            items: filterdItemsArr,
            isEmpty: filterdItemsArr.length > 0 ? false : true,
            totalItems: state.totalItems - 1
          };

          localStorage.setItem('nike-cart', JSON.stringify(updatedCart))

          return updatedCart;
        }
        case "GET_CART": {
          return {
            ...state,
          };
        }
        case "RESET_CART": {
          return {
            ...state,
            items: [],
            isEmpty: true,
            totalItems: 0,
            total: 0,
          };
        }
    }

}

export const CartProvider: React.FC<PropsWithChildren> = (props) => {
    const [state, dispatch] = useReducer(CartReducer, initialState);


    const addItemToCart = (item: SafeProduct) =>
        dispatch({ type: "ADD_TO_CART", item });
    const removeItemFromCart = (id: SafeProduct["ID"]) =>
        dispatch({ type: "REMOVE_FROM_CART", id });
    const updateItemInCart = (id: SafeProduct["ID"], item: SafeProduct) =>
        dispatch({ type: "UPDATE_ITEM_IN_CART", id, item });
    const getCart = () =>
        dispatch({ type: "GET_CART" });
    const resetCart = () =>
        dispatch({ type: "RESET_CART" });

    const value = useMemo(() => ({
        ...state,
        addItemToCart,
        removeItemFromCart,
        resetCart,
        getCart
    }), [state])

    return <CartContext.Provider value={value} {...props} />
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
      throw new Error(`useUI must be used within a UIProvider`);
    }
    return context;
};