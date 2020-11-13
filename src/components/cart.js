import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleUp, faAngleDown} from "@fortawesome/free-solid-svg-icons";
import Recipe from "./recipe"
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
                                    <div className="item-img "> 
                                        <img src={item.img} alt={item.img} className=""/>
                                    </div>
                                
                                    <div className="item-desc row">
                                        <span className="title col-12">{item.title}</span>
                                        <p className="col-12">{item.desc}</p>
                                        <p className="col-12"><b>Price: {item.price}&#8358;</b></p> 
                                        <p className="col-6">
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                        <div className="add-remove col-6">
                                            <Link to="/cart"><FontAwesomeIcon icon={faAngleUp} onClick={()=>{this.handleAddQuantity(item.id)}} style= {{color: "black"}}/></Link>
                                            <Link to="/cart"><FontAwesomeIcon icon={faAngleDown} onClick={()=>{this.handleSubtractQuantity(item.id)}} style= {{color: "black"}}/></Link>
                                        </div>
                                        <button className="btn-danger remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                                    </div>
                                    
                               </li>                        
                    )
                })
            ):

             (
                 <div>
                 <p>Nothing has been added to cart</p>
                <a href="/products" style={{color:"#010101"}}>Go back to shop</a>
                 </div>
               
             )
       return(
            <div className="container" style={{height: "100vh"}}>
                <div className="cart">
                    <h5>You have ordered:</h5>
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
    return{
        items: state.addedItems
        //addedItems: state.addedItems
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

