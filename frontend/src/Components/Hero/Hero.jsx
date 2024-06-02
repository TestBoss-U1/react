import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import banner from '../Assets/banner.jpg'



const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>Dream House - Căn Hộ Trong Mơ Của Bạn</h2>
                <div> 
                    <div className="hand-hand-icon">
                        <p>Sale 100%</p>
                        <img src={hand_icon} alt=""/>
                    </div>
                    <p>Hỗ trợ</p> 
                    <p>	Sinh Viên</p>        
                </div> 
                <div className="hero-latest-btn">
                    <div>Thông Tin Chi Tiết</div>
                    <img src={arrow_icon} alt=""/>
                </div>
            </div>
            <div className="hero-right">
                <img src={banner} alt="" />
            </div>     
        </div>
    )  
}

export default Hero
