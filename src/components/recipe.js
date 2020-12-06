import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from "firebase";
import { db } from "../Firebase/firebase"
import SeerbitPay from "react-seerbit";
class Recipe extends Component{
constructor(props){
    super(props);
    this.state={
displayError: false,
public_key: "SBTESTPUBK_p8GqvFSFNCBahSJinczKd9aIPoRUZfda",
amount: this.props.total,
tranref: new Date().getTime(),
customization: {
  theme: {
    border_color: "#000000",
    background_color: "#004C64",
    button_color: "#0084A0",
  },
  payment_method: ["card", "account", "transfer", "wallet"],
  display_fee: true, // true 
  display_type: "embed", //inline
  logo: "logo_url | base64", 
}
    }
}
close = (close) => {
    console.log(close);
  };
  callback = (response) => {
    console.log(response);
  };
    componentWillUnmount() {
    

            // if(this.refs.shipping.checked)
            //     this.props.substractShipping()
    }
    // handleChecked = (e)=>{
    //     if(e.target.checked){
    //         this.props.addShipping();
    //     }
    //     else{
    //         this.props.substractShipping();
    //     }
    // }
    
    handleCheckout=()=>{
        console.log(" you clicked to checkout")
        // if(!this.props.userData){
        //     this.setState({  displayError: true})
        //     setTimeout( this.setState({  displayError: false}), 500)
        // }
        let guid = () => {
            let s4 = () => {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1); 
            }
            //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        }
        let orderid = guid()
        db.collection("order").doc(orderid)
        .set({
            orderid: orderid,
         total:this.props.total,
         orderdate: new Date()
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
      console.log(db)


      db.collection("order items").doc()
      .set({
          orderid: orderid,
          itemName: this.props.addedItems.map(item=> item.title),
          itemid: this.props.addedItems.map(item=> item.id),
          orderdate: new Date(),
          total:this.props.total
          })
          
         
     
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      })
     
    }

    render(){
        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                            {/* <label>
                                <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                                <span>Shipping(+1000&#8358;)</span>
                            </label> */}
                        </li>
                        <li className="collection-item"><b>Total: {this.props.total} &#8358;</b></li>
                    </div>
                    {
                        this.state.displayError &&(
                            <div>Error</div>
                        )
                    }
                    {/* <div className="checkout">
                        <button className=" btn btn-checkout" onClick={this.handleCheckout} disabled={!this.props.userData}>Checkout</button>
                    </div> */}


                    <SeerbitPay
                    disabled={!this.props.userData}
                    onMouseOver={this.handleCheckout}
        className="btn seerbit-btn"
        tranref={this.state.tranref}
        currency={"NGN"}
        description={"test"}
        country={"NG"}
        clientappcode="app1"
        public_key={this.state.public_key}
        callback={this.callback}
        close={this.close}
        amount={this.state.amount}
        tag={"button"}
        full_name={"John Doe"}
        email={"a@b.com"}
        mobile_no={"00000000000"}
        callbackurl={ "http://localhost:3000/"}
        customization={this.state.customization}
        version={"v1"}
      />
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total,
        userData: state.user_data
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)