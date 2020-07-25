import React, {Component} from 'react';
import '../App.css'
import axios from 'axios';

import pdf from '../static/media/questionnaire.pdf'

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
            <div ref={this.props.scrollDiv} className="col-12 form-block">
                <div className="form-box col-7">
                    <h2 className="sub-heading">Get Our Free Checklist!</h2>

                        <p className="text">Maybe you've heard some positive things about online stores, but you're not sure if having an
                        online store is right for your business. 
                        <br />
                        <br />
                        Get our Handy checklist, which walks you through five important areas to carefully consider including:
                        </p>
                        
                        <ul>
                            <li>Number of locations</li>
                            <li>Revenue</li>
                            <li>Company growth</li>
                            <li>Brand consistency</li>
                            <li>Labor and workflow costs</li>
                        </ul>

                        <p className='text'>
                            More than a simple "list," we discuss each criteria to give you a clearer context and deeper understanding of how an online company store might affect your buesiness.
                            <br />
                            <br />
                            Fill out the form to get your checklist!
                        </p>

                </div>
                <div className="form-box-2 col-5">
                    <form className="form col-12" action={pdf} target="_blank" type='submit'>
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

                        <button onClick={this.onClick} className="download btn">Download Free Checklist</button>

                    </form>
                </div>
            </div>

        )
    }
}
export default Form;