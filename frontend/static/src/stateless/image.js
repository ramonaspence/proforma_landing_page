import React, {Component} from 'react';
import '../App.css';

import pc from '../static/media/pc.png'


class Image extends Component {
    render() {
        return(
            <div className="pc-img-div">
                <img className="pc-img" src={pc} alt="" />
                </div>
        )
    }
}
export default Image;