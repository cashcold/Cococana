import React, { Component } from 'react';
import './style.css'
import MusicPost from './musicPost/musicPost';
import MusicSlibar from './musicSlibar/musicSlibar';
class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='music'>
                <div className='wrapper'>
                    <div className='container'>
                        <MusicPost/>
                        <MusicSlibar/>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Music;