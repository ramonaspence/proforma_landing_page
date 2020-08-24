import React, {Component} from 'react';
import '../App.css';

import icon_1 from '../static/media/icon_1.png'
import icon_2 from '../static/media/icon_2.png'
import icon_3 from '../static/media/icon_3.png'
import icon_4 from '../static/media/icon_4.png'
import icon_5 from '../static/media/icon_5.png'
import icon_6 from '../static/media/icon_6.png'


class Dropdown extends Component {
    render() {
        return(
            <React.Fragment>
            {/* <div className="col-12 d-flex justify-content-start"> */}
                <div className="prostores col-12">
                    <div className="drop-buttons col-12">   
                        <button type='button' data-toggle="collapse" data-target="#features" className="features-button sub-heading btn-primary">
                            <i className="fa fa-caret-down" aria-hidden="true"></i> 
                                SEE SOME OF OUR PROVEN FEATURES AND BENEFITS 
                            <i className="fa fa-caret-down" aria-hidden="true"></i>
                        </button>
                        
                        <button onClick={() => {
                            this.props.scrollDiv.current.scrollIntoView({
                                behavior: 'smooth'}
                                );
                            }
                        } 
                            className='target-button'>
                                Click here to get your handy Checklist!
                        </button>
                    </div> 
                    <div id="features" className="features col-10 collapse">
                        
                        <h2 className="main-heading">PROFORMA PROSTORES</h2>
                        <h4 className="sub-heading">MANAGING YOUR ECOMMERCE PROGRAM HAS NEVER BEEN EASIER</h4>
                        <p className="text">We are pleased to introduce our new proprietary technology platform that can help you easily drive bottom line efficiencies and save your organization time, money and resources.</p>

                        
                        <div className="dropdown-content">

                            <div className="icon-wrap">
                                <img className="icons" src={icon_1} alt="" />
                            </div>
                            <div className="card col-12">
                                <div className="feature-items">
                                    <h5 className="sub-heading">ASSURE BRAND CONTROL AND INTEGRITY</h5>
                                    <p className="text">Your brand is your voice and your image. We help assure that it is consistently and professionally presented across all mediums and locations.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="dropdown-content">

                            <div className="icon-wrap">
                                <img className="icons" src={icon_2} alt="" />
                            </div>
                            <div className="card col-10">
                                <div className="feature-items">
                                    <h5 className="sub-heading">GET MORE DONE IN LESS TIME</h5>
                                    <p className="text">Reduce time spent managing and communicating with multiple suppliers which will drive significant savings.</p>
                                </div>
                            </div>
                        </div>

                        
                        <div className="dropdown-content">

                            <div className="icon-wrap">
                                <img className="icons" src={icon_3} alt="" />
                            </div>
                            
                            <div className="card col-10">
                                <div className="feature-items">
                                    <h5 className="sub-heading">STANDARDIZE BRANDED AND PRINTED PRODUCTS THROUGHOUT YOUR ORGANIZATION</h5>
                                    <p className="text">Access a breadth of products for your organization such as print products, promotional products, packaging, apparel, uniforms, signage, banners and displays, incentives and awards and valuable personal protective equipment and supplies.</p>
                                </div>
                            </div>
                        </div>

                        <div className="dropdown-content">

                            <div className="icon-wrap">
                                <img className="icons" src={icon_4} alt="" />
                            </div>
                            <div className="card col-10">
                                <div className="feature-items">
                                    <h5 className="sub-heading">SIMPLIFY ORDER, FULFILLMENT AND ADMINISTRATIVE PROCESSES WITH OUR CONVENIENT, EASY TO USE TECHNOLOGY PLATFORM</h5>
                                    <p className="text">Increase your organizational efficiency with automated process through a technology platform that can be accessed from all devices, including tablets and cellphones.</p>
                                </div>
                            </div>
                        </div>

                        <div className="dropdown-content">
                            <div className="icon-wrap">
                                <img className="icons" src={icon_5} alt="" />
                            </div>
                            <div className="card col-10">
                                <div className="feature-items">
                                    <h5 className="sub-heading">ENHANCE YOUR CONTROL WITH ROBUST REPORTING AND VISIBILITY</h5>
                                    <p className="text">We give you the robust reporting and visibility you need to manage ordering behavior, including reporting on product spend, orders, usage, inventory and more.</p>
                                </div>
                            </div>
                        </div>

                        <div className="dropdown-content">
                            <div className="icon-wrap"> 
                                <img className="icons" src={icon_6} alt="" />
                            </div>
                            <div className="card col-10">
                                <div className="feature-items">
                                    <h5 className="sub-heading">SUPPORT COVID-19 COMPLIANCE AND RISK MITIGATION</h5>
                                    <p className="text">Communicate the availability of protective equipment and supplies, provide an easy way to order these items and document their procurement and receipt.</p>
                                </div>
                            </div>
                        </div>
                            <p className="sub-heading">These are just a few of the benefits and cost-savings you and your organization will enjoy with our powerful technology platform.</p>
                    </div>
                </div>


            {/* <div className="col">
            
            </div> */}
         {/* </div> */}
         </React.Fragment>
        )
    }
}
export default Dropdown