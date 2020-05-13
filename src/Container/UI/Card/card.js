import React, { Component } from 'react';
import './style.css'
class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='cards'{...this.props}>
                {this.props.children}
            </div>
         );
    }
}
 
export default Cards;