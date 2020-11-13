import React, { Component } from 'react';
import { connect } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel'

import { addToCart } from './actions/cartActions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import bgImage from "../assests/images/modelsimg/sincerely.jpg"
import abtImg from "../assests/images/modelsimg/heather-ford-5gkYsrH_ebY-unsplash (2).jpg"
import imgSlideOne from "../assests/images/modelsimg/edited.jpg"
import imgSlideTwo from "../assests/images/modelsimg/stil-D4jRahaUaIc-unsplash.jpg"
import imgSlideThree from "../assests/images/modelsimg/nordwood-themes-Nv4QHkTVEaI-unsplash1.jpg"
import imgSlideFour from "../assests/images/modelsimg/mike-montgomery-mXkafXEgOlk-unsplash.jpg"

import $ from "jquery";
import {Fade, Zoom,Flip,Slide } from 'react-reveal';
class Home extends Component{

    handleClick = (id)=>{
      console.log(id)
        this.props.addToCart(id);
    }
componentDidMount(){
    $(".add-to-cart").hide()
    // $.grep(this.props.items, function(e){ return e.id === key; })
    $(".showbtn").hover(function(){
        $(this).find(".add-to-cart").show()
    },
    function(){
        $(this).find(".add-to-cart").hide()
    }
    )
    
}
   itemFocus=(key)=>{
     $(this).find(".add-to-cart").animate({ top: '90px'})

   }
    
    

    render(){

        var newArrivals=this.props.items.slice(4, 8)
//         let itemList = this.props.items.map(item=>{
//             return(
//                 <div className="col-sm-3 pb-4">
//             <div className="card" key={item.id}>
//                 <div className= "card-image">
//                     <img src={item.img} className="itemImg" alt={item.title}/>
//                     <span className="card-title mt-2 mx-2">{item.title}</span>
                   
//                 </div>
//                 <div className="card-content mx-2">
// <p>{item.desc}</p>
// <span> <b>Price: &#8358;{item.price}</b> </span>
// <span to= "/" className="btn-floating px-5 pl-5" onClick={()=>{this.handleClick(item.id)}}><FontAwesomeIcon icon={faPlusCircle} style={{color:" rgb(182, 24, 129)"}}/></span>
//                 </div>
//             </div></div>
//             )
//         })
        return(
            <div className= "container-fluid homePage px-0 w-100">
                <div className="firstImg" >
                    {/* <img src={bgImage} alt="" width="100%" height="400" style={{objectFit: "cover"}}/> */}
                    <div className=" font-weight-bold px-5 bg-txt"> <Flip left> <div className="font-36" > Cozy collections </div> <div className="font-24" >We've Got All Your Fashion Needs Covered.</div></Flip></div>
                </div>
                <div className="container">
                    <div className="row mx-0" style={{ backgroundColor:"#fff", borderBottom:"1px solid #EBE7E7", padding:"50px 0"}}>
<div className="col-lg-4 text-center col-sm-12 noRborder mb-5" style={{borderRight: "1px solid #EBE7E7"}}><div className="font-24">Latest Collections</div><div className="font-16">We got you covered on the latest fashion trend</div></div>
<div className="col-lg-4 text-center col-sm-12 noRborder mb-5" style={{borderRight: "1px solid #EBE7E7"}}><div className="font-24">Support 24/7</div><div className="font-16">Holla at us on our social media platforms</div></div>
<div className="col-lg-4 text-center col-sm-12 mb-5"><div className="font-24">Affordable</div><div className="font-16">We sell at very affordable prices and offer discount based on your order</div></div>

                    </div>
                    <div className="mt-5 mb-5">
                        <div className="text-center font-36 font-weight-bold mb-3">New Arrivals</div>
                        <div className="text-center mb-5 font-16">Check out some of our new arrivals, no doubt<br/>  they will look really nice on you</div>
                        <div className="row  mx-0 px-0">
                            
                            {newArrivals.map(item =>(
                                
                                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-5"  key={item.id} id={item.id} onMouseOver={()=>{this.itemFocus(item.id)}}>
                                    <div className="showbtn text-center " style={{minHeight: "320px"}}><div><img src={item.img} alt="" width="100%"/></div>
                                    <div className="font-weight-bold font-13 mt-2">{item.title}</div>

                                   <div><span> <b>&#8358;{item.price}</b> </span></div>
                                   
                               <Fade top>  <button className="add-to-cart" style={{}} onClick={()=>{this.handleClick(item.id)}}>ADD TO CART</button></Fade>  
                                   </div>
                                   
                                   </div> 
                                   ))
                               
                            }
                        </div>
                    </div>
                    
                    <div className="row mx-0 my-5 pt-5 px-0">
                        <div className="col-lg-6 col-sm-12" style={{width: "100%", height:"500px" }}>
                        <Slide bottom>
                        <Carousel controls= {false}>
  <Carousel.Item interval={200}>
    <img
      className="d-block w-100"
      src={abtImg}
      alt="First slide"
      height= "400"

    />
    
  </Carousel.Item>
  <Carousel.Item interval={200}>
    <img
      className="d-block w-100"
      src={imgSlideOne}
      alt="Third slide"
      height= "400"

    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imgSlideTwo}
      alt="Third slide"
      height= "400"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imgSlideThree}
      alt="Third slide"
      height= "400"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imgSlideFour}
      alt="Third slide"
      height= "400"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bgImage}
      alt="Third slide"
      height= "400"
    />
  </Carousel.Item>
</Carousel>
                            </Slide>
                        </div>
                        <div className="col-lg-6 col-sm-12 mb-5">
                        <Slide right>
                            <div className="font-26 font-weight-bold aboutTitle" >
Cozy collections is the modern fashion accessories market</div>
<div className="font-16 aboutCoz " >At Cozy collections, your fashion sense is our concern. We are dealers of all kinds of clothing and other fashion assesories including shoes, bags, wrist watches, necklaces...
   <br/> Our goods are well sorted, of good quality and very affordable.
     </div>
     </Slide>
                        </div>

                    </div>
                    <div>
                        <div className="text-center font-36 font-weight-bold mb-3">Recently Ordered Items</div>
                        <div className="text-center mb-5 font-16">Here are a few of our recently ordered goods<br/> </div>
                        <div className="row  mx-0 px-0">
                            {newArrivals.map(item =>(
                                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-5"  key={item.id} id={item.id} onMouseOver={()=>{this.itemFocus(item.id)}}>
                                    <div className="showbtn text-center"><div><img src={item.img} alt="" width="100%"/></div>
                                    <div className="font-weight-bold font-13 mt-2">{item.title}</div>

                                   <div><span> <b>&#8358;{item.price}</b> </span></div>
                                   
                                   <Fade top>  <button className="add-to-cart" style={{}} onClick={()=>{this.handleClick(item.id)}}>ADD TO CART</button></Fade>  

                                   </div>
                                   
                                   </div> 
                                   ))
                               
                            }
                        </div>
                    </div>
                    <div className="row  mx-0 px-0 mt-5 pt-5">
                        <div className="col-lg-4 "><Fade left><div className="bg-shoes"><div className="font-weight-bold font-16 px-5 text-right" style={{position:"relative", top:"10px"}}>Shoes</div></div></Fade></div>
                        <div className="col-lg-4 "><Zoom><div className="bg-bags"><div className="font-weight-bold font-16 px-5 text-right" style={{position:"relative", top:"10px"}}>Bags</div></div></Zoom></div>
                        <div className="col-lg-4 "><Fade right><div className="bg-watch"> <div className="font-weight-bold font-16 px-5 text-right" style={{position:"relative", top:"10px"}}>Watches</div></div></Fade></div>

                    </div>
    
              
                </div>
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
    export default connect(mapStateToProps, mapDispatchToProps)(Home)