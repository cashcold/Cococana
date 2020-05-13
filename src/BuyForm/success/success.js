import React from 'react'
import './style.css'
class Success extends React.Component{
    render(){
        const returnHomeFuction = ()=>{
            setTimeout(()=>{
                window.location = '/music'
            },7000)
        }
        const {Values}= this.props
        return(
            <div className='success'>
                <div className='container'>
                    <h1>Hi {Values.firstName} {Values.lastName}<br/><h4>Thank You for interested<br/>
                        @KaazyTeam will Contact you in 24hr </h4><br/>Thank you</h1><br/><br/>
                        <div className='successStyle'>
                        <span>Keep on Downloading and Listen Kaazy Music Entertainment and get Free T-Shirt</span>
                        <div className='successImg'>
                            <img src={require('../../Cococana Gh-fils/aa305aba-3836-4276-9910-f5f0730f530f.jpg')} alt='pic'/>
                        </div>
                        <div className='returnHomeFuction'>
                            {returnHomeFuction()}
                        </div>
                        </div>
                </div>
            </div>
        )
    }
}
export default Success;