import React, { Component } from 'react'
import { connect } from 'react-redux'
class Recipe extends Component{
constructor(props){
    super(props);
    this.state={
displayError: false
    }
}
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
        if(!this.props.userData){
            this.setState({  displayError: true})
            setTimeout( this.setState({  displayError: false}), 500)
        }
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
                    <div className="checkout">
                        <button className=" btn btn-checkout" onClick={this.handleCheckout} disabled={!this.props.userData}>Checkout</button>
                    </div>
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