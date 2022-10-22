import React from 'react'; 
import App from './App';

import CartItem from './CartItem';
const Cart = (props)  =>  {
       const {products} = props;
       const arr = [1,2,3,4,5]
       return (
           <div className="cart"> 
              { products.map((product) => {
                  return (
                           <
                               CartItem 
                               product={product} 
                               key={product.id}
                               onIncreaseQuantity={props.onIncreaseQuantity}
                               onDecreaseQuantity={props.onDecreaseQuantity}
                               onDeleteProduct={props.onDeleteProduct}
                               /> )//passed all product array as props
              })
              }
              </div>
       ); 
   }



export default Cart; //yaha se bhej dia code