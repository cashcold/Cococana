import React, { Component } from 'react';
import './style.css'
import EventPost from '../EventPost/eventPost';
import EventSlibar from '../EventSlibar/eventSlibar';
class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='event'>
                <div className='eventListBlog'>
                    <EventPost/>
                    <EventSlibar/>
                </div>
            </div>
         );
    }
}
 
export default Event;