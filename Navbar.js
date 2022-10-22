import React from 'react'; 
import Cart from './Cart';
const Navbar = (props) => { 
        return (
        <div style={styles.nav}>
         <div style={styles.cartIconContainer}>
             <img style={ styles.cartIcon} src="https://www.fasterjoomla.com/images/extensions/qtc/quick2cart_logo.png" alt="cart-icon" />
             <span style={styles.cartCount}>{props.count}</span>   
         </div>  
        </div>
        );
    }
const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height:70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
  }
  
export default Navbar; //yaha se bhej dia code