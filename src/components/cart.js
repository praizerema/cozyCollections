import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem,addQuantity,subtractQuantity, addUserData} from './actions/cartActions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Recipe from "./recipe"
import {faPlusCircle, faMinusCircle} from "@fortawesome/free-solid-svg-icons";
let errorMessage
let errorTitle
class Cart extends Component{
    constructor(props){
        super(props);
        this.state={
            first_name:"",
            last_name:"",
            email:"",
            address:"",
            phone_no: "",
            process: false,
            displayError: false,
            userData: {}
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
handleInput=(e)=>{
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value
      
    });
    // errorMessage=""
    this.setState({displayError: false})

}
// handlePhone=(e)=>{
// e.target.value.replace(/[^0-9]/g, '')
 
//     this.setState({
//  phone_no: e.target.value
//     });
// }
addCustomerDetail = async(e,   first_name,
    last_name,
    email,
    address,
    phone_no,) =>{
        e.preventDefault();
    if(first_name.length < 2){
        // console.log("wrong first anme")
        // alert("Enter First name") 
        this.setState({displayError: true})
        errorTitle= "Invalid Input"

        errorMessage="Enter First name"
    }
    else if(last_name.length < 2){
        // console.log("wrong last anme") 
        // alert("Enter Last name")
        this.setState({displayError: true})

        errorTitle= "Invalid Input"
        errorMessage="Enter Last Name"


    }
    else if (
        !/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
          email
        )
      ){
        // alert( "Enter email")
        this.setState({displayError: true})
        errorTitle= "Invalid Input"

        errorMessage="Enter Email "

      }
   
    else if (!/\d{10,20}/.test(phone_no)){

        // console.log("wrong first anme") 
        // alert( "Enter PhoneNo")
        this.setState({displayError: true})
        errorTitle= "Invalid Input"
        errorMessage="Enter Phone Number"
    }
    else if(address.length < 15){
        // console.log("wrong first anme") 
        // alert( "Enter Address")
        this.setState({displayError: true})
        errorTitle= "Invalid Input"

        errorMessage="Enter Address"
    }
    else{
        const params = {
            data: {
                "firstName": first_name,
                "lastName": last_name,
                "email": email,
                "phoneNo": phone_no,
                "address": address
            }
        };
// this.setState({userData: params})
this.props.addUserData(params)
    }
}
    render(){
        const {
            first_name,
            last_name,
            email,
            address,
            phone_no,
          } = this.state;
              console.log(first_name)
        let addedItemes = 
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
            )
let cartContent= <div className="h-100 px-5 text-center" style={{ marginTop: "100px"}}><h1>Your Cart is Empty.</h1></div>
if(this.props.items.length >0){
    cartContent= <div className=" row " style={{marginTop: "20px"}}>
    <div className="cart col-lg-8 col-md-6 col-sm-12">
        <ul className="collection">
            {addedItemes}
        </ul>
    </div>  
    <div className="col-lg-4 col-md-6 col-sm-12">
        {this.state.displayError &&(
            <div className=" errorWrap text-center p-3 my-3" >
                <div className="font-weight-bold font-15 mb-2">{errorTitle}</div>
               <div className="font-13">{errorMessage}</div> 
                </div>

        )}
        <div className="customerInfoFormContainer">
            <form action="post"
            onSubmit={e => {
                e.preventDefault();
                this.setState({ process: true });
                this.addCustomerDetail(
                  e,
                  first_name,
                   last_name,
                   email,
                   address,
                   phone_no,
                );
              }}
            >
                <div className="font-weight-bold text-center mb-4">Kindly fill in your details before proceeding to checkout</div>
                <div className="form-group">
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" name="first_name" className="form-control" value={first_name} onChange={this.handleInput}/>
                </div>
                <div className="form-group">
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" name="last_name" className="form-control" value={last_name} onChange={this.handleInput}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" className="form-control" value={email} onChange={this.handleInput}/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone_no">Phone Number</label>
                    <input type="tel" name="phone_no" className="form-control"  value={phone_no} onChange={this.handleInput}/>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" className="form-control" value={address} onChange={this.handleInput}/>
                </div>
                <div><button className="btn btn-formSubmit" type="submit" >Submit</button></div>
            </form>
        </div>
    </div>

    {/* Recipe added */}
    <Recipe />
  
</div>
}
        
       return(
           <div className="container h-100" style={{minHeight: "100vh", marginTop: "90px"}}>
               <div className="font-weight-bold font-26">Cart</div>
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

// const mapDispatchToProps = (dispatch)=>{
//     return{
//         removeItem: (id)=>{dispatch(removeItem(id))},
//         addQuantity: (id)=>{dispatch(addQuantity(id))},
//         subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
//     }
// }
export default connect(mapStateToProps, {removeItem, addQuantity, subtractQuantity, addUserData})(Cart)

