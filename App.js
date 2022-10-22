import React from 'react';
import './App.css';
import CartItem from './CartItem';
import Cart from './Cart'; 
import Navbar from './Navbar'; 

class App extends React.Component {
  constructor() {
    super(); 
    this.state = {
        products : [
            {
                price: 15999,
                title: 'Phone',
                qty: 1,
                img: 'https://n1.sdlcdn.com/imgs/g/9/8/Nokia-Silver-White-6-32GB-SDL500478082-2-afc1c.jpeg',
                id:1
            },
            {
                price: 250,
                title: 'KeyChain',
                qty: 2,
                img: 'https://th.bing.com/th/id/R995d4bdb3ffaca2a9f5e96598bcf0c38?rik=d%2ffXi9jdoqzhHQ&riu=http%3a%2f%2fassets3.mirraw.com%2fimages%2f1703960%2fVolkswagen_Keychain_zoom.jpg%3f1454056545&ehk=tuhmmUvIqemr5TneEEpiqfuuz6zvSoamSWVSLRJWcXY%3d&risl=&pid=ImgRaw',
                id:2
            },
            {
                price: 150,
                title: 'Cover',
                qty: 4,
                img: 'https://th.bing.com/th/id/OIP.8Lb-iYV5DdDURb1xUDGe0AHaHa?pid=ImgDet&rs=1',
                id:3
            }
        ]
    }
    // this.increaseQuantity=this.increaseQuantity.bind(this);
    // this.testing();
  }
  handleDecreaseQuantity = (product) => {
    const {products} = this.state;
    const index= products.indexOf(product);
    products[index].qty -=1;
    this.setState({
        products:products
    })
    console.log('hey please decrease qty of', product);
  }
  handleIncreaseQuantity = (product) => {
    const {products} = this.state;
    const index= products.indexOf(product);
    products[index].qty +=1;
    this.setState({
        products:products
    })
    console.log('hey please increase qty of', product);
  }
  handleDeleteProduct = (id) => {
    const {products} = this.state;
    const items = products.filter((item) => item.id!==id);  //return products not matching with the given ID
   this.setState({
       products:items
   })
  }
  
  getCartCount = () => {
    const {products} = this.state;
    let count =0;
     
    products.forEach((product) => {
      count+= product.qty;
    })
    return count;
  }
  getCartTotal = () => {
    const {products} = this.state;

    let CartTotal=0;
    products.map((product) => {
    CartTotal= CartTotal + product.qty * product.price
    })
    return CartTotal;
  }
  render () {
   const {products} = this.state;
  return (
    <div className="App">
      
      <Navbar count={this.getCartCount()} /> 
      <Cart 
      products={products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteProduct={this.handleDeleteProduct}
 />
 <div> TOTAL: {this.getCartTotal()} </div>
    </div>
    
  );
 }
 }

export default App;
