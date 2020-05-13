import React, { Component } from 'react';
import './style.css'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='home'>
                <div className='conatiner homeImg'>
                    <img  src={require('../../Cococana Gh-fils/92455264_3012939105393055_4182029073662345216_o.jpg')}alt='pic'/>
                    <img  src={require('../../Cococana Gh-fils/80989758_2802912839729017_5481064755793756160_n.jpg')}alt='pic'/>
                    <img  src={require('../../Cococana Gh-fils/81280295_2802913229728978_4255931850075144192_n.jpg')}alt='pic'/>
                    <img  src={require('../../Cococana Gh-fils/87663408_2928829207137379_1760721276059516928_o.jpg')}alt='pic'/>
                    <img  src={require('../../Cococana Gh-fils/86496977_2899018643451769_8269398081733132288_o.jpg')}alt='pic'/>
                </div>
            </div>
         );
    }
}
 
export default Home;