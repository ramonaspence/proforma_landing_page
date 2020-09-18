import React, {Component} from 'react';
import '../App.css'

import Main from './main.js';
import Side from './side.js';
import Dropdown from './dropdown.js';
import Footer from './footer.js';

class Landing extends Component {
    constructor() {
        super();
    
    this.scrollDiv = React.createRef();
        
}

    render() {
        return(
            <div className="container-fluid main">
                <div className="row">

                    <div className="col-md-6 col-12 prostores">
                        <Main scrollDiv={this.scrollDiv}/>
                    </div>


                    <div className="col-md-6 col-12 side">

                        <Side scrollDiv={this.scrollDiv}/>
                    </div>

                </div>

                <div className="col-12 drop-down">
                        <Dropdown scrollDiv={this.scrollDiv}/>
                </div>

                <div className="row">
                    <Footer />
                </div>
            </div>
        )
    }
}
export default Landing;