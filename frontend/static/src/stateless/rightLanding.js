import React, {Component} from 'react'
import '../App.css'

class RightLanding extends Component {

    render() {
        return(
            <React.Fragment>
            <div className="boxes">
                <div className="box-1"></div>
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="box-3"></div>
                <div className="box-4">
                <button onClick={() => {
                    this.props.scrollDiv.current.scrollIntoView({ 
                    behavior: 'smooth' });
                    }} 
                        className='target-button'>Click here to get a free Questionnaire!
                    </button>
                </div>

            </div>
            </React.Fragment>
        )
    }
}
export default RightLanding