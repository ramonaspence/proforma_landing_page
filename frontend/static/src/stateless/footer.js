import React, {Component} from 'react';
import '../App.css'

import proforma_logo from '../static/media/proforma_logo.png'

class Footer extends Component {

// Rhino.Info@Proforma.com
// Toll Free:  1-877-337-3347

// Know your sales person?
// Steve.Spence@Proforma.com or x501
// Don.Oswalt@Proforma.com or x510


    render() {
        return(
            <div className="col-12 footer">

                <div className="footer-logo col-4">
                    <img className="logo" src={proforma_logo} alt="" />
                </div>

                <div className="contact-info col-8">

                    <div className="contact-left col">
                        <h6 className="footer-text">Rhino.Info@Proforma.com</h6><br />
                        <h6 className="footer-text">Toll Free: 1-877-337-3347</h6>
                    </div>

                    <div className="contact-right col">
                        <h6 className="footer-text">Know your sales person?</h6>
                        <h6 className="footer-text">Steve.Spence@Proforma.com or x501</h6>
                        <h6 className="footer-text">Don.Oswalt@Proforma.com or x510</h6>
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;