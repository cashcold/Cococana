import React from 'react'
import './style.css'
class ShipmentDetails extends React.Component{
    next = (event)=>{
        event.preventDefault()
        this.props.next()
    }
    prev = (event)=>{
        event.preventDefault()
        this.props.prev()
    }
    render(){
        const Values = this.props
        return(
            <div className='personal-details'>
                <div className='container'>
                    <div className='personal'>
                        <div className='mersonalMsg'>
                            <h4>Few step away<br/>
                            Provide Valid information</h4>
                        </div>
                        <div className='form'>
                            <h1>Address Details</h1>
                            <br/>
                            <form>
                                <table>
                                    <tr>
                                        <td><label>City:</label></td>
                                        <td><input placeholder='city' name='city'
                                        onChange={this.props.handleChange('city')} 
                                        defaultValue={Values.city}/></td>
                                    </tr>
                                    <tr>
                                        <td><label>Address Line 1:</label></td>
                                        <td><input placeholder='address Line 1' name='addressLine_1'
                                        onChange={this.props.handleChange('addressLine_1')} 
                                        defaultValue={Values.addressLine_1}/></td>
                                    </tr>
                                    <tr>
                                        <td><label>Address Line 2:</label></td>
                                        <td><input placeholder='addressLine 2' name='addressLine_2'
                                        onChange={this.props.handleChange('addressLine_2')} 
                                        defaultValue={Values.addressLine_2}/></td>
                                    </tr>
                                    <tr>
                                        <td><label>Near?:</label></td>
                                        <td><input placeholder='eg. school,church etc' name='near'
                                        onChange={this.props.handleChange('near')} 
                                        defaultValue={Values.near}/></td>
                                    </tr>
                                    <tr>
                                    <td><button className='btn btn-warning' onClick={this.prev}>Back</button></td>
                                        <td><button className='btn btn-success' onClick={this.next}>Next</button></td>
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

export default ShipmentDetails;