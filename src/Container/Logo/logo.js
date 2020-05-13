import React, { Component } from 'react';
import './style.css'
class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='conatiner'>
                <div className='box'>
                    <img src={require('../../Cococana Gh-fils/062469eb-7bf4-458d-862f-f9ac8a998c35.jpg')} alt='pic'/>
                </div>
            </div>
         );
    }
}
 
export default Logo;