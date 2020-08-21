import React, {Component} from 'react';
import '../App.css'

import Dropdown from './dropdown'

import prostores from '../static/media/prostore.jpg'
import pc from '../static/media/pc.png'



class Main extends Component {
    constructor(props) {
        super(props);


    }
    render() {
        return(
            <React.Fragment>
                <div className="company col-12">

                    <h3 className="main-heading top-heading">
                    Wonder if an online company store is right for your business? 
                    <br /><br />Get your free checklist and find out
                    </h3>

                    <div className="free-checklist-one">
                        <h2 className="sub-heading">Get Our Free Checklist!</h2>

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

                <div className="pc-div col">

                    <h4 className="sub-heading">YOUR NEXT STEP TO LEARNING MORE</h4>
                    <p className="text">We will provide you with a value analysis that will show the bottom line
                    impact our technology platform can deilver for you and your organization</p>

                    <h3 className="red-text">TOGETHER WITH PROFORMA, THE BOTTOM LINE <br /> IS TO IMPROVE YOUR BOTTOM LINE</h3>
                    
                    
                </div>
                
                <div className="col-12 drop-down">
                    <Dropdown scrollDiv={this.props.scrollDiv}/>
                </div>
               
            </React.Fragment>
        )
    }
}
export default Main;