import React from 'react'; 
import Cart from './Cart';
const CartItem = (props) => {
    
    const {price, title, qty} =props.product;
        const { 
            product, 
            onIncreaseQuantity, 
            onDecreaseQuantity,
            onDeleteProduct  
            } =  props;

        return (
        <div className ="cart-item">
        <div className="left-block">
                <img style={styles.image} src={product.img} />
            </div>
            <div className="right-block">
                <div style={{fontSize:25}}>{title}</div>
                <div style={ { color:'gray' } }>Rs. {price}</div>
                <div>Qty: {qty}</div>
                <div className="cart-item-actions">
                        {/*Buttons*/}
                        <img 
                          alt="increase" 
                          className="action-icons" 
                          src="https://www.flaticon.com/svg/vstatic/svg/1828/1828926.svg?token=exp=1615564550~hmac=5a4af7b5cf4d513b784834c1688b666b" 
                          onClick={() => onIncreaseQuantity(product)} 
                         />
                        <img 
                           alt="decrease" 
                           className="action-icons" 
                           src="https://www.flaticon.com/svg/vstatic/svg/1828/1828906.svg?token=exp=1615564577~hmac=74e6b2d4359c4542db5c59173ebfb978" 
                           onClick={() => onDecreaseQuantity(product)}
                           />
                        <img 
                           alt="trash" 
                           className="action-icons" 
                           src="https://www.flaticon.com/svg/vstatic/svg/2602/2602735.svg?token=exp=1615564619~hmac=92b5c32fcfefa05dd7b758fade721544"
                           onClick={() => onDeleteProduct(product.id)}
                           />
                    
                </div>
            </div>
        </div>
        );
    }

const styles={ //mera obj
 image: { // obj ko properties dedi
     height: 110,
     width: 110,
     borderRadius:4
 }
}
export default CartItem; //yaha se bhej dia code