import React, {Component} from 'react';
import '../App.css'

import Main from './main.js';
import Side from './side.js';
import Form from '../stateful/form';
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

                    <div className="col-lg-6 col-12 prostores">
                        <Main scrollDiv={this.scrollDiv}/>
                    </div>

                    <div className="col-lg-6 col-12 side">
                        <Side scrollDiv={this.scrollDiv}/>
                    </div>

                </div>

                <div className="row">
                    <Footer />
                </div>
            </div>
        )
    }
}
export default Landing;