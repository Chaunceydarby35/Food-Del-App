import { useContext } from 'react';
import './Cart.css'
import {StoreContext} from '../../context/StoreContext'



const Cart = () => {

    const {cartItems, food_list, removedFromCart} = useContext(StoreContext);
  
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
       {/* {food_list.map((item, index) => {
        if (cartItems[item._id] >0 ) {
          return (
            <div key='' className='cart-items-title cart-items-item'>
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>${item.price* cartItems[item._id]}</p>
              <p onClick={()=>removedFromCart(item._id)} className='cross'>x</p>
            </div>
          )
        }
       })} */}



      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{0}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>{0}</p>
            </div>
          </div>
        </div>
        <button>Proceed to Checkout</button>
      </div>
      <div className="cart-promocode">
        <div>
          <p>If you have a promo code, Enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder='promo code'/>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart