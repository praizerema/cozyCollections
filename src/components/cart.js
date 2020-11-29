import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Recipe from "./recipe"
import {faPlusCircle, faMinusCircle} from "@fortawesome/free-solid-svg-icons";

class Cart extends Component{
    constructor(props){
        super(props);
        this.state={
            first_name:"",
            last_name:"",
            email:"",
            address:"",
            phone_no: ""

        }
    }
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
let cartContent= <div className="h-100 px-5" style={{marginTop:"100px", minHeight: "80vh"}}><h1>You have not added any item to cart.</h1></div>
if(this.props.items.length >0){
    cartContent= <div className="container row h-100" style={{minHeight: "100vh", marginTop: "90px"}}>
    <div className="cart col-8">
        <ul className="collection">
            {addedItemes}
        </ul>
          <Recipe />
    </div>  
    <div className="col-4 fixed">
        <div className="customerInfoFormContainer">
            <form action="">
                <div className="font-weight-bold text-center mb-4">Kindly fill in your details before proceeding to checkout</div>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" className="form-control" value={this.state.first_name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" className="form-control" value={this.state.last_name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" className="form-control" value={this.state.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNo">Phone Number</label>
                    <input type="text" name="phoneNo" className="form-control" value={this.state.phone_no}/>
                </div>
                <div className="form-group">
                    <label htmlFor="deliveryLocation">Address</label>
                    <input type="text" name="deliveryLocation" className="form-control" value={this.state.address}/>
                </div>
                <div><button className="btn">Submit</button></div>
            </form>
        </div>
    </div>
  
    {/* Recipe added */}
</div>
}
        
       return(
           <div className="h-100">
               {cartContent}
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

