import shoping from "../../../../assets/shopping-cart.png";

function Cart(){

    const styleCart={
      paddingTop:5
    }
      return <span className="float-end" style={styleCart}><img src= {shoping} alt="cart"  width="35" height="35" /></span> 
  
  
  }
  
  export default Cart;