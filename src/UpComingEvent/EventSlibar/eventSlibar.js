import React, { Component } from 'react';
import './style.css'
class EventSlibar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='eventSlibar'>
               <div className='showcase'>
                   <div style={{marginBottom: "70px"}} className='box box-box-a'>
                             <div className='product'>
                                 <div className='eventSlibarImg'>
                                     <h3>YAMAHA R6</h3>
                                    <img src={require('../../AllInOne/moto_bike/iIAKe8.jpg')} alt='pic'/>
                                </div>
                                <a href='/orderNow'><button className='btn btn-success'>Contact Seller<input type='submit' placeholder='Email' /></button></a>
                            </div>
                   </div>
                   <div style={{marginBottom: "70px"}} className='box box-box-a'>
                        <div className='product'>
                                <h3>Diamond Watch, Women's</h3>
                                <div className='eventSlibarImg'>
                                    <img src={require('../../AllInOne/watch/673426523785438.jpg')} alt='pic'/>
                                </div>
                                <a href='/orderNow'><button className='btn btn-danger'>Contact Seller<input type='submit' placeholder='Email'/></button></a>
                        </div>
                    </div>
                    <div style={{marginBottom: "70px"}} className='box box-box-a'>
                        <div className='product'>
                                <h3>Nautilus in White Gold Diamond</h3>
                                <div className='eventSlibarImg'>
                                    <img src={require('../../AllInOne/watch/Nautilus in White Gold Diamond & Paved.jpg')} alt='pic'/>
                                </div>
                                <a href='/orderNow'><button className='btn btn-warning'>Contact Seller<input type='submit' placeholder='Email'/></button></a>
                            </div>
                    </div>
                    <div style={{marginBottom: "70px"}} className='box box-box-a'>
                        <div className='product'>
                                <h3>Apple-Macbook-Air-Pro-Retina</h3>
                                <div className='eventSlibarImg'>
                                    <img src={require('../../AllInOne/laptop/Hot-Red-Crystal-Case-For-Apple-Macbook-Air-Pro-Retina-11-12-13-15-Laptop-Cover.webp')} alt='pic'/>
                                </div>
                                <a href='/orderNow'><button className='btn btn-danger'>Contact Seller<input type='submit' placeholder='Email'/></button></a>
                            </div>
                    </div>
                    <div style={{marginBottom: "70px"}} className='box box-box-a'>
                        <div className='product'>
                                <h3>YAMAHA R4 250</h3>
                                <div className='eventSlibarImg'>
                                    <img src={require('../../AllInOne/moto_bike/a4b2734a98e1b5092787be801a58fe93.jpg')} alt='pic'/>
                                </div>
                                <a href='/orderNow'><button className='btn btn-warning'>Contact Seller<input type='submit' placeholder='Email'/></button></a>
                            </div>
                    </div>
                    <div style={{marginBottom: "70px"}} className='box box-box-a'>
                    <div className='product'>
                                <h3>Apple_MacBook_notebook</h3>
                                <div className='eventSlibarImg'>
                                    <img src={require('../../AllInOne/laptop/Apple_MacBook_(white)_notebook.jpg')} alt='pic'/>
                                </div>
                                <a href='/orderNow'><button className='btn btn-primary'>Contact Seller<input type='submit' placeholder='Email'/></button></a>
                            </div>
                    </div>
                    <div style={{marginBottom: "70px"}} className='box box-box-a'>
                        <div className='product'>
                                <h3>Headsets Handfree Wifi Bluetooth</h3>
                                <div className='eventSlibarImg'>
                                    <img src={require('../../AllInOne/hearphones/Headphones And Headsets Handfree Wifi Bluetooth – StuffOnline.Pk.jpg')} alt='pic'/>
                                </div>
                                <a href='/orderNow'><button className='btn btn-warning'>Contact Seller<input type='submit' placeholder='Email'/></button></a>
                        </div>
                    </div>
                    <div style={{marginBottom: "70px"}} className='box box-box-a'>
                    <div className='product'>
                                <h3>iphone-6</h3>
                                <div className='eventSlibarImg'>
                                    <img src={require('../../AllInOne/fresh_on/iphone-6-box-6s.jpg')} alt='pic'/>
                                </div>
                                <a href='/orderNow'><button className='btn btn-warning'>Contact Seller<input type='submit' placeholder='Email'/></button></a>
                            </div>
                    </div>
                    <div style={{marginBottom: "70px"}} className='box box-box-a'>
                    <div className='product'>
                                <h3>PRO_BURNINGRED</h3>
                                <div className='eventSlibarImg'>
                                    <img src={require('../../AllInOne/bike/csm_ROTWILD_RE750_PRO_BURNINGRED_RE750F20P_BGGREY_b63a3dffeb.jpg')} alt='pic'/>
                                </div>
                                <a href='/orderNow'><button className='btn btn-warning'>Contact Seller<input type='submit' placeholder='Email'/></button></a>
                            </div>
                    </div>
               </div>
            </div>
         );
    }
}
 
export default EventSlibar;