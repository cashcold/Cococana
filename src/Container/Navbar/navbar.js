import React, { Component } from 'react';
import './style.css'
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='navbar'>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/music'>Music</a></li>
                    <li><a href='/videos'>Videos</a></li>
                    <li><a href='/event'>Upcoming Event</a></li>
                    <li><a href='/picture'>Pictures</a></li>
                </ul>
            </div>
         );
    }
}
 
export default Navbar;