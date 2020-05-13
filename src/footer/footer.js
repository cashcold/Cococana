import React from 'react'
import './style.css'

class Footer extends React.Component{
    render(){
        return(
            <div className='footer'>
                <div className='container'>
                    <div className='subsc'>
                        <h2><span className='styleText'>SUBSCRIBE & FOLLOW</span> TO GET UPDATE FROM <span className='styleName'>COCOCANA-GH</span></h2>
                    </div>
                   
                    <div className='linkup'>
                        <div className='link-icons'>
                            <a href='https://www.facebook.com/395521900491481?referrer=whatsapp'><img src={require('../Cococana Gh-fils/iconfinder_facebook_circle_color_107175 (1).png')} alt='pic'/></a>
                            <a href='https://www.instagram.com/kaazy_cococana/'><img src={require('../Cococana Gh-fils/iconfinder_Instagram_1298747.png')} alt='pic'/></a>
                            <a href='https://mobile.twitter.com/Kaazy_cococana'><img src={require('../Cococana Gh-fils/iconfinder_twitter_circle_color_107170.png')} alt='pic'/></a>
                            <a href='https://www.youtube.com/channel/UCzabJMoGKMc6nruSt_Frd6A'><img src={require('../Cococana Gh-fils/iconfinder_youtube_circle_color_107167.png')} alt='pic'/></a>
                            <a href='https://chat.whatsapp.com/6UMpifXWHVH4BdlyanUMcZ'><img src={require('../Cococana Gh-fils/iconfinder_whatsapp_986960.png')} alt='pic'/></a>
                        </div>
                        <div className='link-input'>
                            <button className='btn btn-success'><input placeholder='Email'/></button>
                            <a href='/subscribe'><button className='btn btn-warning'>SUBSCRIBE NOW</button></a>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='Link-Up-msg-style'>
                        <div className='textMe'>
                        <p><h3 style={{color: "white"}}>CHECK MARKET </h3>
                            <ul>
                                <li>347067- Hit In Best BUY ( 1500$ ) </li>
                                <li>571642- Hit In Home Depot ( 1000$ ) </li>
                                <li>571642- Hit In Walmart ( 2k ) </li>
                                <li>414700- Hit In Target (1k) </li>
                                <li>414720- Hit In CVS ( 900$ )  </li>
                                <li>414709- Hit In Walmart ( 2k )  </li>
                                <li>546638- Hit In CVS ( 900$ ) </li>
                                <li>546636- Hit In Target (1k)  </li>
                                <li>546616- Hit In Target (1k) </li>
                                <li>601100- Hit In Walmart ( 2k ) </li>
                            </ul>
                        </p>
                        </div>
                        <div className='textMe'>
                        <h3 style={{color: "white"}}>ONLINE TOPUP</h3>
                            <ul>
                                <li><span>BITCOIN TOPUP</span></li>
                                <li><span>PAYPAL TOPUP</span></li>
                                <li><span>CASH APP</span></li>
                                <li><span>SKRILL TRANSFER</span></li>
                                <li><span>WORLD REMIT TRANSFER </span></li>
                            </ul>
                        </div>
                        <div className='textMe'>
                        <h3 style={{color: "white"}}>PREMIUM ACCOUNT(UNLIMITED)</h3>
                        <ul>
                            <li><span>Pay Dating Site</span></li>
                            <li><span>Unlimited Netflix Account</span></li>
                            <li><span>Amazon Sellers Acc</span></li>
                            <li><span>Unlimited Internet Bundle</span></li>
                            <li><span>Unlimited DSTV Breakdown</span></li>
                            <li><span>Disney</span></li>
                            <li><span>Pay Apps</span></li>
                        </ul>
                        </div>
                     </div>
                     
                </div>
                <div className='container'>
                    <div className='Link-Up-msg'>
                    </div>
                </div>
                <div className='container'>
                <br/>
                    <div className='Link-Up-msg-grup'>
                        <div className='product-A'>
                            <h5>SHOPPING RATES IN UK</h5>
                            <p>- Uk (Visa,Master) = 10$ per 1 
                                <br/>
                                - Uk (Amex,Dis) = 15$ per 1 
                                <br/>
                                - Uk Bin 15$ , UK Dob 20$ 
                                <br/>
                                - Uk fullz info = 30$ per 1
                             </p>
                        </div>
                        <div className='product-A'>
                        <h5>SHOPPING RATES IN CANADA</h5>
                            <p>-  Ca (Visa,Master) = 15$ per 1 
                                <br/>
                                - Ca (Amex,Dis) = 20$ per 1  
                                <br/>
                                - Ca Bin 15$ , CA Dob 20$
                                <br/>
                                - Ca fullz info = 30$ per 1
                             </p>
                        </div>
                        <div className='product-A'>
                        <h5>SHOPPING RATES IN AUSTRIAL</h5>
                            <p>- Au (Visa,Master) = 15$ per 1 
                                <br/>
                                - Au (Amex,Dis) = 20$ per 1  
                                <br/>
                                - Au Bin 17$ , AU Dob 25$
                                <br/>
                                - Au fullz info = 30$ per 1 
                             </p>
                        </div>
                        <div className='product-A'>
                        <h5>SHOPPING RATES IN FRANCE</h5>
                            <p>- Fr (Visa,Master) = 20$ per 1
                                <br/>
                                - Fr (Amex,Dis) = 23$ per 1  
                                <br/>
                                - Fr Bin 25$ , AU Dob 30$
                                <br/>
                                - Fr fullz info = 40$ per 1 
                             </p>
                        </div>
                    </div>
                </div>  
                <div className='footerMsg'>
                    <p>&copy; COPYRIGHT KAAZY MUSIC || DEVELOP BY JUNGLE CASHCOLD || PRIVACY POLICY || TERMS OF USE || AD CHOICES || COOKIE POLICY || COOKIE SETTINGS</p>
                </div>
            </div>
        )
    }
}

export default Footer;