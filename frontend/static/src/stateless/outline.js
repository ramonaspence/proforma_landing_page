import React, {Component} from 'react';
import '../App.css'

import Main from './main.js';
import Side from './scrollButton.js';
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

                    <div className="col-9 prostores">
                        <Main />
                    </div>

                    <div className="col-3 images">
                        <Side scrollDiv={this.scrollDiv}/>
                    </div>

                </div>

                <div className="row">
                    <Form scrollDiv={this.scrollDiv} />
                </div>

                <div className="row">
                    <Footer />
                </div>
            </div>
        )
    }
}
export default Landing;