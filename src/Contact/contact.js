import React, { Component } from 'react';
import './style.css'
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='contact'>
                <div className='container'>
                    <div className='contact-info'>
                        <h1>Contact Me</h1>
                        <hr/>
                         <br/>
                        <h4>Phone Number: 0205878119 </h4>
                        <hr/>
                        <h4>Phone Line: +233(0)249889410 </h4>
                        <hr/>
                        <h4>Facebook: cococana gh </h4>
                        <hr/>
                        <h4>instagram: kaazy_cococana</h4>
                        <hr/>
                        <br/>
                        <h4>Email Address: Kaazymusic@gmail.com</h4>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Contact;