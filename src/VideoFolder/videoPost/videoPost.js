import React, { Component } from 'react';
import './style.css'
class VideoPost extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='videoPost'>
                <div className='wrapper'>
                    <div className='boxes'>
                        <div style={{marginBottom: "50px"}} className='box box-box-a'>
                            <div className='musicList'>
                                <div className='music-chat'>
                                    <div className='musicText'>
                                        <h4>COCOCANA FT. STAY JAY _ WHY U DO ME DAT(Official Video)</h4>
                                        <p>(PROD. BY PREZDOE)</p>
                                        </div>
                                        </div>
                                        <div className='download-info styleText' >
                                            <h5>Cococana FT. STAY JAY  </h5>
                                        </div>
                                        <div className='song-info-chat'>
                                            <span>Must Watch</span>
                                        </div>
                                        <div className='song-download'>
                                        <button><video src={require('../../songs/Cococana Ft. Stay J - Why You Do Me That (Prod. By Prezdoe).mp4')}  controls/></button>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div style={{marginBottom: "50px"}} className='box box-box-a'>
                            <div className='musicList'>
                            <div className='music-chat'>
                                <div className='musicText'>
                                    <h4>kbs_dabikestar___B3Ssktvn-yH___</h4>
                                </div>
                            </div>
                            <div className='song-info-chat'>
                                <span>Must Watch</span>
                            </div>
                            <div className='song-download'>
                                <button><video style={{width: "500px", height: "500px"}} src={require('../../shaibu/kbs_dabikestar___B3Ssktvn-yH___.mp4')}  controls/></button>
                            </div>
                            </div>
                        </div>
                        <div style={{marginBottom: "50px"}} className='box box-box-a'>
                            <div className='musicList'>
                            <div className='music-chat'>
                                <div className='musicText'>
                                    <h4>Shaibu with Kwesi Arthur on Accra Tema motor way </h4>
                                </div>
                            </div>
                            <div className='song-info-chat'>
                                <span>Must Watch</span>
                            </div>
                            <div className='song-download'>
                                <button><video style={{width: "500px", height: "500px"}}  src={require('../../shaibu/shaibu11___Br5vCHElqlI___.mp4')}  controls/></button>
                            </div>
                                </div>
                        </div>
                        <div style={{marginBottom: "50px"}} className='box box-box-a'>
                            <div className='musicList'>
                            <div className='music-chat'>
                                <div className='musicText'>
                                    <h4>kbs_dabikestar___B-PyEcBHa6U___ </h4>
                                </div>
                            </div>
                            <div className='song-info-chat'>
                                <span>Must Watch</span>
                            </div>
                            <div className='song-download'>
                                <button><video  style={{width: "500px", height: "500px"}}  src={require('../../shaibu/kbs_dabikestar___B-PyEcBHa6U___.mp4')}  controls/></button>
                            </div>
                            </div>
                            </div>
                        </div>
                        <div style={{marginBottom: "50px"}} className='box box-box-a'>
                            <div className='musicList'>
                            <div className='music-chat'>
                                <div className='musicText'>
                                    <h4>shaibu11___B14vxDtnpVn___ </h4>
                                </div>
                            </div>
                            <div className='song-info-chat'>
                                <span>Must Watch</span>
                            </div>
                            <div className='song-download'>
                                <button><video style={{width: "500px", height: "500px"}} src={require('../../shaibu/shaibu11___B14vxDtnpVn___.mp4')}  controls/></button>
                            </div>
                            </div>
                        </div>
                        <div style={{marginBottom: "50px"}} className='box box-box-a'>
                            <div className='musicList'>
                            <div className='music-chat'>
                                <div className='musicText'>
                                    <h4>kbs_dabikestar___B-XuJ2onFCe___ </h4>
                                </div>
                            </div>
                            <div className='song-info-chat'>
                                <span>Must Watch</span>
                            </div>
                            <div className='song-download'>
                                <button><video style={{width: "500px", height: "500px"}} src={require('../../shaibu/kbs_dabikestar___B-XuJ2onFCe___.mp4')}  controls/></button>
                            </div>
                            </div>
                        </div>
                        
                        <div style={{marginBottom: "50px"}} className='box box-box-a'>
                        <div className='musicList'>
                        <div className='music-chat'>
                            <div className='musicText'>
                                <h4>skbs_dabikestar___B4b9-E4HTWw___</h4>
                            </div>
                        </div>
                        <div className='song-info-chat'>
                            <span>Must Watch</span>
                        </div>
                        <div className='song-download'>
                            <button><video style={{width: "500px", height: "500px"}} src={require('../../shaibu/kbs_dabikestar___B4b9-E4HTWw___.mp4')}  controls/></button>
                        </div>
                </div>
                        </div>
                </div>
         );
    }
}
 
export default VideoPost;