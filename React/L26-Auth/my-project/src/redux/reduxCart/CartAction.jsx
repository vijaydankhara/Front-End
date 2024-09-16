import { ADD_TO_CART  ,  REMOVE_TO_CART , EMPTY_CART , CART_TO_WISHLIST , INCREMENT , DECREMENT } from "../Constant";


export function add_cart(data){
    return{
        type:ADD_TO_CART,
        data
    }
}

export function remove_cart(id){
    return{
        type:REMOVE_TO_CART,
        data:{id}
    }
}

export function empty_cart(data){
    return{
        type:EMPTY_CART,
        data
    }
}

export function cart_to_wishlist(data){
    return{
        type:CART_TO_WISHLIST,
        data
    }
}

export function increment(id){
    return{
        type:INCREMENT,
        data : id 
    }
}

export function decrement(id){
    return{
        type:DECREMENT,
        data : id
    }
}