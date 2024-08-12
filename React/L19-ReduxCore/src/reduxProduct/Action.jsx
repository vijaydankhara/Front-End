// import { ADD_TO_CART, ADD_TO_WISHLIST, CART_TO_WISHLIST, DECREMENT, EMPTY_CART, EMPTY_WISHLIST, INCREMENT, PRODUCT_ADD, PRODUCT_ADD_SHOP, PRODUCT_DELETE, PRODUCT_UPDATE, REMOVE_TO_CART, REMOVE_TO_WISHLIST, WISHLIST_TO_CART } from "./Constant";

import { PRODUCT_ADD } from "./Constant"
import { PRODUCT_UPDATE } from "./Constant"
import { PRODUCT_DELETE } from "./Constant"
import { ADD_TO_CART } from "./Constant"
import { PRODUCT_ADD_SHOP } from "./Constant"
import { REMOVE_TO_CART } from "./Constant"
import { EMPTY_CART } from "./Constant"
import { ADD_TO_WISHLIST } from "./Constant"
import { REMOVE_TO_WISHLIST } from "./Constant"
import { EMPTY_WISHLIST } from "./Constant"
import { WISHLIST_TO_CART } from "./Constant"
import { CART_TO_WISHLIST } from "./Constant"
import { INCREMENT } from "./Constant"
import { DECREMENT } from "./Constant"

export const product_add = () => {
    return{
        type:PRODUCT_ADD
    }
}
export const product_update = () => {
    return{
        type:PRODUCT_UPDATE
    }
}
export const product_delete = () => {
    return{
        type:PRODUCT_DELETE
    }
}

export const product_add_shop = () => {
    return{
        type:PRODUCT_ADD_SHOP
    }
}
export const add_to_cart = () => {
    return{
        type:ADD_TO_CART
    }
}
export const remove_to_cart = () => {
    return{
        type:REMOVE_TO_CART
    }
}
export const empty_cart = () => {
    return{
        type:EMPTY_CART
    }
}
export const add_to_wishlist = () => {
    return{
        type:ADD_TO_WISHLIST
    }
}
export const remove_to_wishlist = () => {
    return{
        type:REMOVE_TO_WISHLIST
    }
}
export const empty_wishlist = () => {
    return{
        type:EMPTY_WISHLIST
    }
}
export const wishlist_to_cart = () => {
    return{
        type:WISHLIST_TO_CART
    }
}
export const cart_to_wishlist = () => {
    return{
        type:CART_TO_WISHLIST
    }
}
export const increment = () => {
    return{
        type:INCREMENT
    }
}
export const decrement = () => {
    return{
        type:DECREMENT
    }
}