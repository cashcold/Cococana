import React, { Component } from 'react';
import './App.css'
import Header from './Container/header/header';
import Hero from './Container/Hero/hero';
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './Components/Home/home';
import Music from './MusicFolder/music'
import Videos from './VideoFolder/videoPostmain/videoPost'
import Event from './UpComingEvent/MainFolder/event'
import orderNow from './BuyForm/mainForm/mainForm'
import Footer from './footer/footer';
import Picture from './Picture/picture';
import About from './About/about';
import Contact from './Contact/contact'
class MainApp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Router>
                <div className='wrapper'>
                    <div className='top-container'>
                    <Header/>
                    <Hero/>
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/videos' component={Videos}/>
                        <Route path='/event' component={Event}/>
                        <Route path='/orderNow' component={orderNow}/>  
                        <Route path='/picture' component={Picture}/>
                        <Route path='/about' component={About}/>
                        <Route path='/contact' component={Contact}/>
                    </Switch>
                    <Footer/>
                    </div>
                </div>
            </Router>
         );
    }
}
 
export default MainApp;