import React, { Component } from 'react';
import Cards from '../UI/Card/card';
import Logo from '../Logo/logo';
import Navbar from '../Navbar/navbar';
class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='wrapper'>
                <div className='showcase'>
                    <Cards>
                        <Logo/>
                        <Navbar/>
                    </Cards>
                </div>
            </div>
         );
    }
}
 
export default Hero;