import React from 'react'
import './style.css'
class ComfirmDetails extends React.Component{
    next = (event)=>{
        event.preventDefault()
        this.props.next()
    }
    prev = (event)=>{
        event.preventDefault()
        this.props.prev()
    }
    render(){
        const {Values : {firstName,lastName,phone,email,city,addressLine_1,addressLine_2}} = this.props;
        return(
            <div className='personal-details'>
                <div className='container'>
                    <div className='personal'>
                        <div className='mersonalMsg'>
                            <h4>Few step away<br/>
                            Provide Valid information</h4>
                        </div>
                        <div className='form'>
                            <h1>comfirm Details</h1>
                            <br/>
                            <form>
                                <table>
                                    <tr>
                                        <td ><span>First Name:</span></td>
                                        <td><span>{firstName}</span></td>
                                    </tr>
                                    <tr>
                                        <td ><span>Last Name:</span></td>
                                        <td><span>{ lastName}</span></td>
                                    </tr>
                                    <tr>
                                        <td><span>Phone Name:</span></td>
                                        <td><span>{phone}</span></td>
                                    </tr>
                                    <tr>
                                        <td><span>Email: </span></td>
                                        <td><span>{email}</span></td>
                                    </tr>
                                    <tr>
                                        <td><span>City:</span></td>
                                        <td><span>{city}</span></td>
                                    </tr>
                                    <tr>
                                        <td><span>Address Line 1:</span></td>
                                        <td><span>{addressLine_1}</span></td>
                                    </tr>
                                    <tr>
                                        <td><span>Address Line 2: </span></td>
                                        <td><span>{addressLine_2}</span></td>
                                    </tr>
                                    <tr>
                                    <td><button className='btn btn-warning' onClick={this.prev}>Back</button></td>
                                        <td><button className='btn btn-success' onClick={this.next}>Comfirm</button></td>
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

export default ComfirmDetails;