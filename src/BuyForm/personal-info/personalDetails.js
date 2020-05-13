import React from 'react'
import './style.css'
class PersonalDetails extends React.Component{
    constructor(){
        super()
    }
    next = (event)=>{
        event.preventDefault()
        this.props.next()
    }
    render(){
        const Values = this.props;
        return(
            <div className='personal-details'>
                <div className='container'>
                    <div className='personal'>
                        <div className='mersonalMsg'>
                            <h4>Thank You for interested </h4>
                        </div>
                        <div className='form'>
                            <h1>Personal Details</h1>
                            <br/>
                            <form>
                                <table>
                                    <tr>
                                        <td><label>First Name:</label></td>
                                        <td><input placeholder='firstName' name='firstName'
                                         onChange={this.props.handleChange('firstName')} 
                                         defaultValue={Values.firstName}/></td>
                                    </tr>
                                    <tr>
                                        <td><label>Last Name:</label></td>
                                        <td><input placeholder='lastName' name='lastName'
                                        onChange={this.props.handleChange('lastName')} 
                                        defaultValue={Values.lastName}/></td>
                                    </tr>
                                    <tr>
                                        <td><label>Phone:</label></td>
                                        <td><input placeholder='phone' name='phone'
                                        onChange={this.props.handleChange('phone')} 
                                        defaultValue={Values.phone}/></td>
                                    </tr>
                                    <tr>
                                        <td><label>Email:</label></td>
                                        <td><input placeholder='email' name='email'
                                        onChange={this.props.handleChange('email')} 
                                        defaultValue={Values.email}/></td>
                                    </tr>
                                    <tr>
                                    <td></td>
                                        <td><button className='btn btn-warning' onClick={this.next}>Next</button></td>
                                    </tr>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PersonalDetails;