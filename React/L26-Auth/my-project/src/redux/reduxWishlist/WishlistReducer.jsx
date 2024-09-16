import {
  ADD_TO_WISHLIST,
  REMOVE_TO_WISHLIST,
  EMPTY_WISHLIST,
  WISHLIST_TO_CART,
} from "../Constant";

const WishlistReducer = (wishdata = [], action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      console.log("wishlistdata", action);
      return [action.wishdata, ...wishdata];

    case REMOVE_TO_WISHLIST:
      console.log("removeTowishlistData", action);
      return wishdata.filter((item) => item.id !== action.wishdata.id);

    case EMPTY_WISHLIST:
      console.log("empty Wishlist", action);
      return [];

    case WISHLIST_TO_CART:
      return {};

    default:
      return wishdata;
  }
};

export default WishlistReducer;
