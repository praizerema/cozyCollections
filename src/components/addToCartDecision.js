import React from "react"
import {Link} from "react-router-dom"
const AddToCartDecision =(props) =>{
    return(
         <div className="decisionContainer">
             <div>
             Your Item has been added to cart successfully

             </div>
        <div className="linksContainer">
          <Link className="linksBtn" to="/cart">View Cart</Link>
            <Link className="linksBtn" to="/products" onClick={props.onClickContinue}>Continue</Link>
        </div>
    </div>
    )
   
}
export default AddToCartDecision