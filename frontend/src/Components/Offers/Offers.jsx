import React from 'react'
import  './Offers.css'
import  datlich from    '../Assets/datlich.jpg'

const Offers = () => {
    return (
        <div className='offers'>
            <div className="offers-left">
                <h2>Ưu Đãi Hôm Nay</h2>
                <h2>Với Khách Đặt</h2>
                <p>Ngay Trên Website</p>
                <button>Xem Phòng Ngay</button>    
            </div>
            <div className="offers-right">
                <img src={datlich} alt="" />
            </div>
        </div> 
    )
}

export default Offers
