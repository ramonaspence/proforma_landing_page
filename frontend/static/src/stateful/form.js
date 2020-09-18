import React, {Component} from 'react';
import '../App.css'
import axios from 'axios';

import pdf from '../static/media/checklist.pdf'

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const BASE_URL = process.env.REACT_APP_BASE_URL
const TOKEN = process.env.REACT_APP_AUTH_TOKEN



class Form extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
    }

    onClick(e) {
        let formData = new FormData();
        formData.append('first_name', this.state.first_name)
        formData.append('last_name', this.state.last_name)
        formData.append('email', this.state.email)
        formData.append('company', this.state.company)
        formData.append('locations', this.state.locations)

        axios.post(`${BASE_URL}/api/v1/contacts/`, formData, {
            headers: {
                'Authorization': `Token ${TOKEN}`,
            }
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }


    render() {
        return(
            <div ref={this.props.scrollDiv} className="form-block col-12">

                {/* <div className="form-box-2 col-12"> */}
                    <form className="form" action={pdf} target="_blank" type='submit'>
                        <h5 className="main-heading">The Reward of Streamlining Processes: <br />
                            Reduced Labor and Marketing Costs
                        </h5>

                        <label htmlFor="first_name">First Name</label>
                        <input required={true} onChange={this.onChange} className="form-control" type="text" name="first_name" id="first_name" />

                        <label htmlFor="last_name">Last Name</label>
                        <input required={true} onChange={this.onChange} className="form-control" type="text" name="last_name" id="last_name" />

                        <label htmlFor="email">Email Address</label>
                        <input required={true} onChange={this.onChange} className="form-control" type="text" name="email" id="email" />

                        <label htmlFor="company">Company Name</label>
                        <input required={true} onChange={this.onChange} className="form-control" type="text" name="company" id="email" />

                        <label htmlFor="locations">Number of Locations</label>
                        <input required={true} onChange={this.onChange} className="form-control" type="number" name="locations" id="locations" />

                        <button onClick={this.onClick} className="download btn"><i className="fa fa-play"></i>Download Free Checklist</button>

                        <h5 className="main-heading">TOGETHER WITH PROFORMA, THE BOTTOM LINE IS TO IMPROVE YOUR BOTTOM LINE</h5>

                    </form>
                </div>
            // </div>

        )
    }
}
export default Form;