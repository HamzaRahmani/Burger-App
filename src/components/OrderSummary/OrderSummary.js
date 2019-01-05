import React from 'react'

import Aux from '../../hoc/Aux';
import Button from '../../components/Inter/Button/Button';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey=>{
            return (
                <li key={igKey}>
                    <span style={{textTransform:'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>);
        });

   return(
       <Aux>
           <h3>Your Order</h3>
           <p>A delicious buger with the following ingredients:</p>
           <ul>
               {ingredientSummary}
           </ul>
           <p><strong>Total Price:{props.price.toFixed(2)}</strong> </p>
           <p>Continue ot Checkout?</p>
           <Button btnType="Danger" clicked={props.CancelP}>CANCEL</Button>
           <Button btnType="Success" clicked={props.ContinueP}>CONTINUE</Button>

       </Aux>
   )
  
}

export default OrderSummary
