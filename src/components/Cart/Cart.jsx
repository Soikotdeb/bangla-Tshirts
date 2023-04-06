import React from 'react';
import "./Cart.css"

const Cart = ({cart,handleRemoveFromCart }) => {
   
    //1=conditional rendering 
let message;
if(cart.length === 0){
   message = <p>please add some products</p>
}
else{
    message=<div>
        <p>Thanks added a products</p>
        <p><small>please add more products</small></p>
    </div>
}

    return (
        <div>
            {/* apply conditional css  */}
            <h3 className={cart.length===1?'orange': 'cyan'}>order summary: {cart.length} </h3>
            {/* 2=conditional rendering with ternary operator   */}
            {cart.length > 2 ? <span className='condition-css'> you can Buy 4 products  now 20%off our shop</span> : <span>Sorry you are not Buy 4 products</span>}

                {/* 1= conditional rendering  */}
            <h4>{message}</h4>

            {
                cart.map(tshirt=><p key={tshirt._id}
                >{tshirt.name}
                <button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button> </p>)
            }


            {/* 3= conditional rendering  */}
            {/* {
                cart.length===2 && <p>wow you added 2 products</p>
            } */}

            {/* 4= conditional rendering  */}
            {/* {
            cart.length === 3 || <p>you not added 3 products</p>
            } */}
        </div>
    );
};

export default Cart;



/**
 * conditional  rendering type you can use any 1 type
 * 1.use if else to set a  variable that will contain an element , components 
 *2. ternary operator : condition ? 'for true' : 'false'
 *3. logical $$ (if the condition is true the next thing will be displayed)
 *4. logical || ( if th condition false than the next things displayed )
 * **/ 

/**
 * Conditional css class
 * use ternary
 * use ternary inside template string
 * **/  