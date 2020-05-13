import React, { Component } from 'react';
import './style.css'
import VideoPost from '../videoPost/videoPost';
import VideoSlibar from '../videoSlibar/videoSlibar';
class Videos extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='music'>
                <div className='wrapper'>
                    <div className='container'>
                        <VideoPost/>
                        <VideoSlibar/>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Videos;