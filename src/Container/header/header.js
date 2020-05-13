import React, { Component } from 'react';
import './style.css'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='nav'>
                <div className='main-nav'>
                    <ul>
                        <li><a href='/contact'><img src={require('../../Cococana Gh-fils/icons8-contacts-20.png')} alt='pic'/>Contact</a></li>
                        <li><a href='/about'><img src={require('../../Cococana Gh-fils/icons8-join-20.png')} alt='pic'/>About</a></li>
                    </ul>
                </div>
                <div className='main-nav'>
                    <ul>
                        <li><a href='https://www.youtube.com/channel/UCzabJMoGKMc6nruSt_Frd6A'><img src={require('../../Cococana Gh-fils/iconfinder_youtube_circle_color_107167.png')} alt='pic'/>Youtube</a></li>
                        <li><a href='https://www.facebook.com/395521900491481?referrer=whatsapp'><img src={require('../../Cococana Gh-fils/iconfinder_facebook_circle_color_107175 (1).png')} alt='pic'/>Facebook</a></li>
                        <li><a href='https://https://www.instagram.com/kaazy_cococana/'><img src={require('../../Cococana Gh-fils/iconfinder_Instagram_1298747.png')} alt='pic'/>Instagram</a></li>
                        <li><a href='https://twitter.com/kaazy_cococana1?s=09'><img src={require('../../Cococana Gh-fils/iconfinder_twitter_circle_color_107170.png')} alt='pic'/>Twitter</a></li>
                        <li><a href='https://chat.whatsapp.com/6UMpifXWHVH4BdlyanUMcZ'><img src={require('../../Cococana Gh-fils/iconfinder_whatsapp_986960.png')} alt='pic'/>Whatsapp</a></li>
                    </ul>
                </div>
            </div>
         );
    }
}
 
export default Header;