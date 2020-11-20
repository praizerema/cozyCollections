import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Recipe from "./recipe"
import {faPlusCircle, faMinusCircle} from "@fortawesome/free-solid-svg-icons";

class Cart extends Component{
 //to remove the item completely
 handleRemove = (id)=>{
    this.props.removeItem(id);
}
//to add the quantity
handleAddQuantity = (id)=>{
    this.props.addQuantity(id);
}
//to substruct from the quantity
handleSubtractQuantity = (id)=>{
    this.props.subtractQuantity(id);
}
    render(){
              
        let addedItemes = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <li className="collection-item avatar" key={item.id}>
                       <div className="container row cart-wrap">
                                    <div className="col-lg-4 col-sm-12"> 
                                    <div className="title col-12">{item.name}</div>
                                        <img className="col-12" src={item.img} alt={item.img}/>
              <p className="col-12 mt-3"><b>Price: &#8358;{item.price}</b></p> 

                                    </div>
                                
                                    <div className=" col-lg-6 col-sm-12 mt-4 row">
                                        <div className="col-12">{item.desc}</div>
                                        <div className="col-lg-6 col-sm-9">
                                            <div className="col-12  mb-2"><b>Qty</b></div>
                                            <div className="qty-border col-12 row mx-0">
                                        <div className="col-4 text-center border-right">
                                        <Link to="/cart">  <FontAwesomeIcon icon={faPlusCircle} onClick={()=>{this.handleAddQuantity(item.id)}}  style={{color:" green"}}/></Link>
                                            
                                        </div>
                                        <div className="col-4 border-right text-center"><span> {item.quantity}</span></div>
                                        <div className="col-4 text-center">
                                        <Link to="/cart"> <FontAwesomeIcon icon={faMinusCircle} onClick={()=>{this.handleSubtractQuantity(item.id)}} style= {{color: "red"}}/></Link>
                                        </div>
                                        {/* <div className="add-remove col-5 text-left">
                                            <Link to="/cart"><FontAwesomeIcon icon={faAngleUp} onClick={()=>{this.handleAddQuantity(item)}} style= {{color: "black"}}/></Link>
                                            <Link to="/cart"><FontAwesomeIcon icon={faAngleDown} onClick={()=>{this.handleSubtractQuantity(item)}} style= {{color: "black"}}/></Link>
                                        </div> */}
                                        </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-3 mt-4"> <button className="btn-danger remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>

                                        </div>
                                       
                                    </div>
                                    
                               </div>     
                               </li>                  
                    )
                })
            ):

             (
                 <div>
                 <h4>Your cart is empty</h4>
                <a href="/products" style={{color:"#010101"}}>Go back to shop</a>
                 </div>
               
             )
             if(addedItemes){
                        
            }
       return(
            <div className="container h-100" style={{minHeight: "100vh"}}>
                <div className="cart">
                    <ul className="collection">
                        {addedItemes}
                    </ul>
                </div>  
                
                <Recipe />
                {/* Recipe added */}
            </div>
       )
    }
}

const mapStateToProps = (state)=>{
    console.log("cart:" + state.addedItems)
    return{
        items: state.addedItems
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)

