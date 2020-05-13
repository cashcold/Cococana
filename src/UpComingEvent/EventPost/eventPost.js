import React, { Component } from 'react';
import './style.css'
class EventPost extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='eventPost'>
                <div className='top-container'>
                    <div style={{marginBottom: "80px"}} className='box box-box-a'>
                        <div className='blog'>
                            <h3>ENTERTAINMENT EXTRA</h3>
                            <br/>
                                <div className='blogImg'>
                                    <img style={{width: "500px",height: "500px"}} src={require('../../Cococana Gh-fils/89780480_2963244750362491_5576090409001549824_o.jpg')} alt='pic'/>
                                </div>
                            <h3>HOST: KWEKU SACKEY(DR SAKI)</h3>
                        </div>
                     </div>
                     <div style={{marginBottom: "80px"}}  className='box box-box-a'>
                        <div className='blog'>
                                <h3>HOUSE FEVER</h3>
                                <br/>
                                <div className='blogImg'>
                                    <img style={{width: "500px",height: "500px"}}  src={require('../../Cococana Gh-fils/89547140_2952151348138498_7390658978541207552_o.jpg')} alt='pic'/>
                                </div>
                                <h3>HOST: DR SPICE</h3>
                        </div>
                    </div>
                    <div style={{marginBottom: "80px"}}  className='box box-box-a'>
                        <div className='blog'>
                                <h3>DARLING TOP 30 <br/>Count Down</h3>
                                <br/>
                                <div className='blogImg'>
                                    <img style={{width: "500px",height: "500px"}}  src={require('../../Cococana Gh-fils/89671735_2951594444860855_933500022115270656_o.jpg')} alt='pic'/>
                                </div>
                                <h3>HOST: Guest with CanndyMann</h3>
                        </div>
                     </div>
                     <div style={{marginBottom: "80px"}}  className='box box-box-a'>
                        <div className='blog'>
                                <h3>YEWEAAA BEACH PARTY</h3>
                                <br/>
                                <div className='blogImg'>
                                    <img style={{width: "500px",height: "500px"}} src={require('../../Cococana Gh-fils/45555553256345436e5375353.jpg')} alt='pic'/>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default EventPost;