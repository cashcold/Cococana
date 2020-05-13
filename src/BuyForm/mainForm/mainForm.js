import React from 'react'
import PersonalDetails from '../personal-info/personalDetails'
import ShipmentDetails from '../shipment/shipmentDetails/shipmentDetails'
import ComfirmDetails from '../comfirm/comfirm'
import Success from '../success/success'
class MainForm extends React.Component{
    constructor(){
        super()
        this.state = {
            step: 1,
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            City: '',
            addressLine_1: '',
            addressLine_2: '',
            Near_location: ''
        }
        this.next = this.next.bind(this)
        this.prev = this.prev.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    next = (event)=>{
        const{step} = this.state;
        this.setState({
            step: step + 1
        })
    }
    prev = (event)=>{
        const{step} = this.state;
        this.setState({
            step: step - 1
        })
    }
    handleChange =input => (event)=>{
        event.preventDefault()
        this.setState({[input]: event.target.value})
    }
    render(){
        const{step}= this.state;
        const {firstName,lastName,phone,city,email,addressLine_1,addressLine_2} = this.state;
        const Values = {firstName,lastName,phone,city,email,addressLine_1,addressLine_2}

        switch(step){
            case 1:
                return <PersonalDetails next={this.next} prev={this.prev} handleChange={this.handleChange} Values={Values}/>
            case 2:
                return <ShipmentDetails  next={this.next} prev={this.prev} handleChange={this.handleChange} Values={Values}/>
            case 3:
               return < ComfirmDetails  next={this.next} prev={this.prev} handleChange={this.handleChange} Values={Values}/>
            case 4:
                return <Success next={this.next} prev={this.prev} handleChange={this.handleChange} Values={Values}/>
        }
    }

}

export default MainForm