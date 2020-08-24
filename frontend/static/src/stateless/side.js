import React, {Component} from 'react'
import '../App.css'

import Form from '../stateful/form.js'
import Image from './image.js'

class Side extends Component {

    render() {
        return(
            <React.Fragment>
            <div className="col-12">
                <Form scrollDiv={this.props.scrollDiv}/>
            </div>
            <div className="col-12">
                <Image />
            </div>
            <div className="col-12">
          
            </div>
            </React.Fragment>
        )
    }
}
export default Side