import React, {Component} from 'react';
import '../App.css'


import prostores from '../static/media/prostore.jpg'
import pc from '../static/media/pc.png'
import icon_1 from '../static/media/icon_1.png'
import icon_2 from '../static/media/icon_2.png'
import icon_3 from '../static/media/icon_3.png'
import icon_4 from '../static/media/icon_4.png'
import icon_5 from '../static/media/icon_5.png'
import icon_6 from '../static/media/icon_6.png'


class Main extends Component {
    render() {
        return(
            <React.Fragment>
                <div className="company col-12">

                    <h3 className="main-heading top-heading">
                    Wonder if an online company store is right for your business? 
                    <br />Get your free checklist and find out
                    </h3>

                    <div className="free-checklist-one">
                        <h4 className="sub-heading">Get Our Free Checklist!</h4>

                            <p className="text">Maybe you've heard some positive things about online stores, but you're not sure if having an
                            online store is right for your business. 
                                <br />
                                <br />
                            Get our Handy checklist, which walks you through five important areas to carefully consider including:
                            </p>
                            
                            <ul>
                                <li className="form-ul">Number of locations</li>
                                <li className="form-ul">Revenue</li>
                                <li className="form-ul">Company growth</li>
                                <li className="form-ul">Brand consistency</li>
                                <li className="form-ul">Labor and workflow costs</li>
                            </ul>

                            <p className='text'>
                                More than a simple "list," we discuss each criteria to give you a clearer context and deeper understanding of how an online company store might affect your business.
                            </p>
                    </div>
                    
                        <img className="prostores-img col-12" src={prostores} alt="" />

                    <h2 className="main-heading">PROFORMA PROSTORES</h2>

                    <h4 className="sub-heading">DON'T JUST TAKE OUR WORD FOR IT, CONSIDER THE COMPANY WE KEEP.</h4>

                    <h6 className="text">We've helped virtually every type of organization in North America</h6>

                    
                    <div className="row col-12">
                        <ul className="bullet col-6">
                            <li className="points text">Education</li>
                            <li className="points text">Entertainment</li>
                            <li className="points text">Government</li>
                            <li className="points text">Healthcare</li>
                            <li className="points text">Hospitality</li>
                            <li className="points text">Manufacturing</li>
                        </ul>

                        <ul className="col-6">
                            <li className="points text">Non-profit</li>
                            <li className="points text">Pharmaceutical</li>
                            <li className="points text">Restaurants</li>
                            <li className="points text">Retail</li>
                            <li className="points text">Technology</li>
                            <li className="points text">Transportation</li>
                            <li className="points text">and more!</li>
                        </ul>
                    </div>

                    <h6 className="text">...and we have the proven ability to help you every step of the way!</h6>

                </div>

                <div className="pc-div col-12">

                    <img className="pc-img" src={pc} alt="" />

                   
                    
                    <h4 className="sub-heading">YOUR NEXT STEP TO LEARNING MORE</h4>
                    <p className="text">We will provide you with a value analysis that will show the bottom line
                    impact our technology platform can deilver for you and your organization</p>

                    <h3 className="red-text">TOGETHER WITH PROFORMA, THE BOTTOM LINE <br /> IS TO IMPROVE YOUR BOTTOM LINE</h3>

                </div>

                <div className="prostores col-12">
                    
                    <button type='button' data-toggle="collapse" data-target="#features" className="features-button sub-heading btn-primary">
                        <i class="fa fa-caret-down" aria-hidden="true"></i> 
                            SEE SOME OF OUR PROVEN FEATURES AND BENEFITS 
                        <i class="fa fa-caret-down" aria-hidden="true"></i>
                    </button>
                    
                    <div id="features" className="features col-12 collapse">
                        
                        <h2 className="main-heading">PROFORMA PROSTORES</h2>
                        <h4 className="sub-heading">MANAGING YOUR ECOMMERCE PROGRAM HAS NEVER BEEN EASIER</h4>
                        <p className="text">We are pleased to introduce our new proprietary technology platform that can help you easily drive bottom line efficiencies and save your organization time, money and resources.</p>


                        <div className="icon-wrap">
                            <img className="icons" src={icon_1} alt="" />
                        </div>
                        <div className="card col-10">
                            <div className="card-body">
                                <h5 className="sub-heading">ASSURE BRAND CONTROL AND INTEGRITY</h5>
                                <p className="text">Your brand is your voice and your image. We help assure that it is consistently and professionally presented across all mediums and locations.</p>
                            </div>
                        </div>

                        <div className="icon-wrap">
                            <img className="icons" src={icon_2} alt="" />
                        </div>
                        <div className="card col-10">
                            <div className="card-body">
                                <h5 className="sub-heading">GET MORE DONE IN LESS TIME</h5>
                                <p className="text">Reduce time spent managing and communicating with multiple suppliers which will drive significant savings.</p>
                            </div>
                        </div>

                        <div className="icon-wrap">
                            <img className="icons" src={icon_3} alt="" />
                        </div>
                        <div className="card col-10">
                            <div className="card-body">
                                <h5 className="sub-heading">STANDARDIZE BRANDED AND PRINTED PRODUCTS THROUGHOUT YOUR ORGANIZATION</h5>
                                <p className="text">Access a breadth of products for your organization such as print products, promotional products, packaging, apparel, uniforms, signage, banners and displays, incentives and awards and valuable personal protective equipment and supplies.</p>
                            </div>
                        </div>

                        <div className="icon-wrap">
                            <img className="icons" src={icon_4} alt="" />
                        </div>
                        <div className="card col-10">
                            <div className="card-body">
                                <h5 className="sub-heading">SIMPLIFY ORDER, FULFILLMENT AND ADMINISTRATIVE PROCESSES WITH OUR CONVENIENT, EASY TO USE TECHNOLOGY PLATFORM</h5>
                                <p className="text">Increase your organizational efficiency with automated process through a technology platform that can be accessed from all devices, including tablets and cellphones.</p>
                            </div>
                        </div>

                        <div className="icon-wrap">
                            <img className="icons" src={icon_5} alt="" />
                        </div>
                        <div className="card col-10">
                            <div className="card-body">
                                <h5 className="sub-heading">ENHANCE YOUR CONTROL WITH ROBUST REPORTING AND VISIBILITY</h5>
                                <p className="text">We give you the robust reporting and visibility you need to manage ordering behavior, including reporting on product spend, orders, usage, inventory and more.</p>
                            </div>
                        </div>

                        <div className="icon-wrap"> 
                            <img className="icons" src={icon_6} alt="" />
                        </div>
                        <div className="card col-10">
                            <div className="card-body">
                                <h5 className="sub-heading">SUPPORT COVID-19 COMPLIANCE AND RISK MITIGATION</h5>
                                <p className="text">Communicate the availability of protective equipment and supplies, provide an easy way to order these items and document their procurement and receipt.</p>
                            </div>
                        </div>
                            <p className="sub-heading">These are just a few of the benefits and cost-savings you and your organization will enjoy with our powerful technology platform.</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Main;