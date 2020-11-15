import React from "react";
import {Link} from "react-router-dom";
import {Slide } from 'react-reveal';

export default function Footer() {

    return (
        <footer className="mb-0 pb-0 bottom">
       

            <div className="container ">
                <div className="footer-container row ">

                    <div className="col-lg-6 col-md-4 col-sm-6 col-xs-6">
                        <div className=" footer-link-box pr-5">
                            <div className="mb-3 font-weight-bold">Links</div>
                            <ul className="list-unstyled text-small">
                                <li className="footerlist">
                                    <Link to={"./"}>Latest Trends</Link>
                                </li>
                               
                                <li className="footerlist">
                                    <Link to={"/products"}>Products</Link>
                                </li>
                                <li className="footerlist">
                                    <Link to={"./"}>Fashion Blog</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-4 col-sm-12 col-xs-12">
                        <div className="w-100 footer-link-box1 ">

                            <div div className=" font-weight-bold">
                                Subcribe
                            </div>
                            <div className="input-group-prepend mb-4 pt-3  ">
                                <input type="text" placeholder="Email" className=" footer-input py-4 px-3 form-control"/>
                                <button className="btn  btn-footer-inpbtn" type="button">
                                    {" "}
                                    <img src={`/images/angleRight.svg`}
                                        alt="go"/>
                                </button>
                            </div>
                            <div> {/* By submitting this form, you acknowledge that you have reviewed
              the terms of our Privacy Statement and consent to the use of data
              in accordance there with. */} </div>
                            <div className="mt-4 pt-1">
                                <a href="/">
                                    <img src={`/images/whatsapptransparent.png`}
                                        alt="whatsapp"
                                        width="28"/>
                                </a>
                                <a href="/" className="mx-4">
                                    {" "}
                                    <img src={`/images/instagram.svg`}
                                        alt="instagram"/>
                                </a>
                                <a href="/">
                                    {" "}
                                    <img src={`/images/twitter.svg`}
                                        alt="twitter"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <Slide top> 
                <div className="text-center py-4"
                    style={
                        {borderTop: "1px solid #9c9c9c"}
                }>
                    2020 CozyCollections
                </div>
            </Slide>

            </div>

        </footer>
    );
}
