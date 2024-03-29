import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions';
import $ from "jquery";
import {Fade} from 'react-reveal';
import AddToCartDecision from './addToCartDecision';


class Products extends Component{
constructor(props){
    super(props);
    this.state={

    }
}
    handleClick = (id)=>{
        this.props.addToCart(id);
        this.setState({showAddCartDecision: true})
    }
    componentDidMount(){
        $(".add-to-cart").hide()
        $(".showbtn").hover(function(){
            $(this).find(".add-to-cart").show()
        },
        function(){
            $(this).find(".add-to-cart").hide()
        }
        )
        
    }
    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="col-lg-3 col-md-4 col-sm-12 "  key={item.id}>
                                    <div className="showbtn text-center"><div><img src={item.img} alt="" width="100%"/></div>
                                   <div className="font-weight-bold font-13 mt-2">{item.title}</div>
                                   <div><span> <b>&#8358;{item.price}</b> </span></div>
                                   
                                   <Fade bottom top>  <button className="add-to-cart" style={{}} onClick={()=>{this.handleClick(item.id)}}>ADD TO CART</button></Fade>  
                                   </div>
                                   
                                   </div> 
            )
        })
        return(
            <div className= "container py-5 h-100 w-100" style={{marginTop: "90px"}}>
                {/* <h3 className="text-center pb-3">Enjoy your shopping</h3> */}
                <div className=" row ">
                    {itemList}
                </div>
                {
                  this.state.showAddCartDecision &&(
                    <div className="  row mt-5 showView"> 
                      <span className="close text-right"
                                onClick={
                                    e => this.setState({showAddCartDecision: false})
                            }>
                                    &#10005;
                            </span>
                        <div className="viewBody">
                           
                            <AddToCartDecision onClickContinue={e => this.setState({showAddCartDecision: false})}/>

                        </div>
                    </div>
                  )
                }
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        items: state.items
         }
    }
    const mapDispatchToProps= (dispatch)=>{
    
        return{
            addToCart: (id)=>{dispatch(addToCart(id))}
        }
    }
    export default connect(mapStateToProps, mapDispatchToProps)(Products)