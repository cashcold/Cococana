import React, { Component } from 'react';
import './style.css'
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='about'>
                <div className='showcase'>
                     <div className='about-info'>
                        <div classNam='aboutInfo'>
                            <div className='aboutImg-cococana'>
                                <img src={require('../Cococana Gh-fils/92963500_3026770310676601_727290013645012992_o.jpg')} alt='pic'></img>
                            </div>
                            <br/>
                            <div className='aboutText'>
                                <p>My name is Albert Cudjoe.  I was born on 30th September 1990 to Mr. Alex Cudjoe and Miss. Francisca Otoo in Elmina, one of the suburbs in the central Region of Ghana.  I had my basic education at Elmina Methodist and ﬁnished in the year 2006 and then to Edinaman Senior High School where I had  my second cycle education and ﬁnished in the 2009. 
                                Albert is a hardworking young man with an excellent  eye for detail and the patience to see a complex work through to completion. Growing up, I could do a lot of things; from running to playing football to singing among others. But up until 2006, I realised my true talent was music and it was evident  when I had the opportunity to record my ﬁrst song during my ﬁrst year at Senior High School in 2006. I was mesmerized  as people jammed to the song everywhere it was played and that motivated me to do more.
                                In the year 2008, I recorded a song titled "Ghana girls" (Take away nti na woko eyi), where I featured other talents in Elmina. It was a viral song in Central and some part of the Western region of Ghana. Two years later, I teamed up with a friend where we created a group called De Roc. We had the opportunity to work with Kaywa and the  songs we recorded were  "Akosua Maame" and "Mama" featuring Castro" but later in 2010, De Roc was dissolved  by mutual understanding.
                                In 2012, I featured Stay Jay on a song tittled  "why you do me that" and it was produced by Prezdoe. The video for the song was directed by Steve Gyamﬁ, one of the popular music video directors in Ghana. The song had a massive air play and made me known even more. 
                                Other songs: "Aliyah", "Me ne Woaa" featuring Ayesem and my latest song "Fab3wo" produced by Kopow have also been released.
                               </p>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className='aboutImg'>
                            <img src={require('../Cococana Gh-fils/062469eb-7bf4-458d-862f-f9ac8a998c35.jpg')}alt='pic'/>
                        </div>
                </div>
            </div>
         );
    }
}
 
export default About;