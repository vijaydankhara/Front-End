import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove_cart, empty_cart } from "../redux/reduxCart/CartAction";

const Cart = () => {
  const data1 = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  console.log("cartData", data1);

  return (
    <div className="container mx-5">
      <div>
        <button onClick={() => dispatch(empty_cart())} className="btn ml-5">
          Empty Cart
        </button>
      </div>

      <div className="flex justify-center items-center h-lvh text-center">
        {data1.length > 0 ? (
          <table className="table-fixed w-[800px]">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Remove Cart</th>
              </tr>
            </thead>
            <tbody>
              {data1.map((item) => {
                return (
                  <tr className="border" key={item.id}>
                    <td>
                      <img
                        src={item.image}
                        alt="cartimage"
                        className="h-auto w-28"
                      />
                    </td>
                    <td className="">
                      <h2 className="text-wrap w-28 mx-auto">{item.title}</h2>
                    </td>
                    <td>
                      <p>${item.price}</p>
                    </td>
                    <td>
                      <button
                        onClick={() => dispatch(remove_cart(item.id))}
                        className="btn"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className="container m-2 empty-cart-message">
            <h2 className="text-wrap">Your Cart is Empty</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
