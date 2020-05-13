import React, { Component } from 'react';
import './style.css'
import Cards from '../../Container/UI/Card/card';
class VideoSlibar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='videoSlibar'>
                <div className='wrapper'>
                    <div className='boxes'>
                        <div className='box box-box-a'>
                            <Cards>
                                <div className='checkOut'>
                                <div className='checkIn'>
                                    <h2>    </h2>
                                </div>
                                <div className='check'>
                                    <span>Beat Maker</span>
                                    <div className='phone-img'>
                                        <img src={require('../../Cococana Gh-fils/87476281_2941458425874457_285126085459312640_n.jpg')} alt=''/>
                                        <a href='/orderNow'><button className='btn btn-warning'>Contact KOPOW<input type='submit' placeholder='Email'/></button></a>
                                    </div>
                                </div>
                            </div>
                            </Cards>
                        </div>
                    </div>
                        <div className='box box-box-a'>
                            <Cards>
                                <div className='checkOut'>
                            <div className='checkIn'>
                                <h2>Avalable Product</h2>
                            </div>
                            <div className='check'>
                                <span>iphone x</span>
                                <div className='phone-img'>
                                    <img src={require('../../AllInOne/fresh_on/iphonexdc-Cover-l8uufh59rr68jaaqhgvht9ld34-20190514131033.Medi_.jpeg')} alt=''/>
                                    <a href='/orderNow'><button className='btn btn-success'>Contact Seller<input type='submit' placeholder='Email'/></button></a>
                                </div>
                             </div>
                        </div>
                            </Cards>
                    </div>
                    <div className='box box-box-a'>
                            <Cards>
                                <div className='checkOut'>
                                <div className='checkIn'>
                                    <h2>Shop Online</h2>
                                </div>
                                <div className='check'>
                                    <span>Apply Express Credit Card for Free</span>
                                    <div className='phone-img'>
                                        <img src={require('../../AllInOne/img/m-star-bazaar.jpg')} alt=''/>
                                        <a href='/orderNow'><button className='btn btn-primary'>Contact <input type='submit' placeholder='Email'/></button></a>
                                    </div>
                                </div>
                                 </div>
                            </Cards>
                    </div>
                    <div className='box box-box-a'>
                            <Cards><div className='checkOut'>
                            <div className='checkIn'>
                            </div>
                            <div className='check'>
                                <span>Mac MacBook Pro Air Apple Notebook,</span>
                                <div className='phone-img'>
                                    <img src={require('../../AllInOne/laptop/SOUNDANCE Aluminum Laptop Stand for Desk Compatible with Mac MacBook Pro Air Apple Notebook, Po ....jpg')} alt=''/>
                                    <a href='/orderNow'><button className='btn btn-danger'>Contact Seller<input type='submit' placeholder='Email'/></button></a>
                                </div>
                             </div>
                        </div>
                        </Cards>
                    </div>
                    <div className='box box-box-a'>
                            <Cards>
                            <div className='checkOut'>
                            <div className='checkIn'>
                                <h2>Avalable Product</h2>
                            </div>
                            <div className='check'>
                                <span>MORFBOARD Skate & Scoot Combo Set, Chartreuse</span>
                                <div className='phone-img'>
                                    <img src={require('../../AllInOne/skate/MORFBOARD Skate & Scoot Combo Set, Chartreuse.jpg')} alt=''/>
                                    <a href='/orderNow'><button className='btn btn-success'>Contact Seller<input type='submit' placeholder='Email'/></button></a>
                                </div>
                             </div>
                        </div>
                        </Cards>
                    </div>
                    <div className='box box-box-a'>
                            <Cards>
                            <div className='checkOut'>
                            <div className='checkIn'>
                                <h2>Avalable Product</h2>
                            </div>
                            <div className='check'>
                                <span>YAHAMA YZF-R1 Rental </span>
                                <div className='phone-img'>
                                    <img src={require('../../AllInOne/moto_bike/YZF-R1 Rental.jpg')} alt=''/>
                                    <a href='/orderNow'><button className='btn btn-warning'>Contact Seller<input type='submit' placeholder='Email'/></button></a>
                                </div>
                             </div>
                        </div>
                        </Cards>
                    </div>
                    <div className='box box-box-a'>
                            <Cards>
                            <div className='checkOut'>
                            <div className='checkIn'>
                                <h2>Avalable Product</h2>
                            </div>
                            <div className='check'>
                                <span>iphone-6s-grey</span>
                                <div className='phone-img'>
                                    <img src={require('../../AllInOne/fresh_on/160414153408_postadsuk.com-brand-new-iphone-6s-space-grey-128-gb-up-for-swap-swap-shop.jpg')} alt=''/>
                                    <a href='/orderNow'><button className='btn btn-warning'>Contact Seller<input type='submit' placeholder='Email'/></button></a>
                                </div>
                             </div>
                        </div>
                        </Cards>
                    </div>
                    <div className='box box-box-a'>
                            <Cards>
                            <div className='checkOut'>
                            <div className='checkIn'>
                                <h2>Avalable Product</h2>
                            </div>
                            <div className='check'>
                                <span>Tempish Chronos 3x125mm </span>
                                <div className='phone-img'>
                                    <img src={require('../../AllInOne/skate/Tempish Chronos 3x125mm.jpg')} alt=''/>
                                    <a href='/orderNow'><button className='btn btn-warning'>Contact Seller<input type='submit' placeholder='Email'/></button></a>
                                </div>
                             </div>
                        </div>
                        </Cards>
                    </div>
                    <div className='box box-box-a'>
                            <Cards>
                            <div className='checkOut'>
                            <div className='checkIn'>
                                <h2>Avalable Product</h2>
                            </div>
                            <div className='check'>
                                <span>[36% OFF] Luxury Fashion Man's And Woman's Diamond Wedding Ring </span>
                                <div className='phone-img'>
                                    <img src={require('../../AllInOne/watch/Diamond-ring.jpg')} alt=''/>
                                    <a href='/orderNow'><button className='btn btn-warning'>Contact Seller<input type='submit' placeholder='Email'/></button></a>
                                </div>
                             </div>
                        </div>
                        </Cards>
                    </div>
                    <div className='box box-box-a'>
                            <Cards>
                            <div className='checkOut'>
                            <div className='checkIn'>
                                <h2>Avalable Product</h2>
                            </div>
                            <div className='check'>
                                <span>Bluetooth Headphones</span>
                                <div className='phone-img'>
                                    <img src={require('../../AllInOne/hearphones/[NEWEST 2019] Bluetooth Headphones.png')} alt=''/>
                                    <a href='/orderNow'><button className='btn btn-warning'>Contact Seller<input type='submit' placeholder='Email'/></button></a>
                                </div>
                             </div>
                        </div>
                        </Cards>
                    </div>
                    <div className='box box-box-a'>
                            <Cards>
                                 <div className='checkOut'>
                            <div className='checkIn'>
                                <h2>Avalable Product</h2>
                            </div>
                            <div className='check'>
                                <span>sub-buzz</span>
                                <div className='phone-img'>
                                    <img src={require('../../AllInOne/skate/FR FR1 80 Yellow 2019.jpg')} alt=''/>
                                    <img src={require('../../AllInOne/bike/sub-buzz-22514-1530549651-1.jpg')} alt=''/>
                                    <a href='/orderNow'><button className='btn btn-warning'>Contact Seller<input type='submit' placeholder='Email'/></button></a>
                                </div>
                             </div>
                        </div>
                        </Cards>
                    </div>
                    <div className='box box-box-a'>
                            <Cards>
                            <div className='checkOut'>
                            <div className='checkIn'>
                                <h2>Avalable Product</h2>
                            </div>
                            <div className='check'>
                                <span>iFlash USA AF 700 Wireless Bluetooth Foldable LED Lighting Headphones SD Card Slot FM Radio (Blue) WiFi Hands-Free Calling for iPhone, Samsung,Android ...</span>
                                <div className='phone-img'>
                                    <img src={require('../../AllInOne/hearphones/iFlash USA AF 700 Wireless Bluetooth Foldable LED Lighting Headphones SD Card Slot FM Radio (Blue) WiFi Hands-Free Calling for iPhone, Samsung,Android ....jpg')} alt=''/>
                                    <a href='/orderNow'><button className='btn btn-warning'>Contact Seller<input type='submit' placeholder='Email'/></button></a>
                                </div>
                             </div>
                        </div>
                        </Cards>
                    </div>
                    <div className='box box-box-a'>
                            <Cards>
                            <div className='checkOut'>
                            <div className='checkIn'>
                                <h2>Avalable Product</h2>
                            </div>
                            <div className='check'>
                                <span>Honda R1</span>
                                <div className='phone-img'>
                                    <img src={require('../../AllInOne/moto_bike/71jk5jZAoPL._SL1440_.jpg')} alt=''/>
                                    <a href='/orderNow'><button className='btn btn-warning'>Contact Seller<input type='submit' placeholder='Email'/></button></a>
                                </div>
                             </div>
                        </div>
                        </Cards>
                    </div>
                    <div className='box box-box-a'>
                            <Cards>
                            <div className='checkOut'>
                            <div className='checkIn'>
                                <h2>Avalable Product</h2>
                            </div>
                            <div className='check'>
                                <span>Women Luxury Diamond Bling</span>
                                <div className='phone-img'>
                                    <img src={require('../../AllInOne/watch/Women Fashion Luxury Diamond Bling from Dear Deer Fashion.webp')} alt=''/>
                                    <a href='/orderNow'><button className='btn btn-warning'>Contact Seller<input type='submit' placeholder='Email'/></button></a>
                                </div>
                             </div>
                        </div>
                        </Cards>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default VideoSlibar;