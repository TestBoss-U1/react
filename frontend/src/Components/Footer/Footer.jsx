import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-logo">
                    <img src={footer_logo} alt="Dream House Logo" />
                    <p>DREAM HOUSE</p>
                </div>

                <div className="footer-info">
                    <h4>Thông tin liên hệ</h4>
                    <p>Địa chỉ: 63 Kênh Nước Đen, Bình Hưng Hòa, Quận Bình Tân - TP Hồ Chí Minh</p>
                    <p>Email: trinhhoaitan170303@gmail.com</p>
                    <p>Điện thoại: (076) 4402 614</p>
                </div>

                <div className="footer-map">
                    <h4>Địa chỉ của chúng tôi</h4>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.924561394105!2d105.78361281532425!3d21.03623779284251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab1540a7c0d9%3A0xd33cbe0d3dd00048!2sHanoi!5e0!3m2!1sen!2svn!4v1620542674810!5m2!1sen!2svn"
                        width="600"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Map"
                    ></iframe>
                </div>

                <div className="footer-social-icon">
                    <h4>Kết nối với chúng tôi</h4>
                    <div className="footer-icons-container">
                        <img src={instagram_icon} alt="Instagram" />
                        <p>Instagram: @dreamhouse_instagram</p>
                    </div>
                    <div className="footer-icons-container">
                        <img src={pintester_icon} alt="Pintester" />
                        <p>Pintester: @dreamhouse_pintester</p>
                    </div>
                    <div className="footer-icons-container">
                        <img src={whatsapp_icon} alt="Whatsapp" />
                        <p>Whatsapp: (076) 4402 614</p>
                    </div>
                </div>

                <div className="footer-support">
                    <h4>Tổng đài hỗ trợ miễn phí</h4>
                    <p>Gọi mua hàng 1800.2097 (7h30 - 22h00)</p>
                    <p>Gọi khiếu nại 1800.2063 (8h00 - 21h30)</p>
                    <p>Gọi bảo hành 1800.2064 (8h00 - 21h00)</p>
                </div>

                <div className="footer-links">
                    {/* <h4>Liên kết nhanh</h4>
                    <ul>
                        <li>Địa chỉ Liên Hệ: 63 Kênh Nước Đen, Bình Hưng Hòa, Quận Bình Tân - TP Hồ Chí Minh</li>
                        <li>Các Phòng Khác: Phòng Marketing, Phòng Hỗ Trợ Khách Hàng, Phản Ánh Nhân Viên</li>
                        <li>Thông Tin Chung: Thông tin về công ty, dịch vụ, và các chính sách</li>
                        <li>Liên Hệ: Liên hệ qua email, điện thoại, hoặc mạng xã hội</li>
                    </ul>*/}
                </div>

                <div className="footer-services">
                  {/* Single-line comments  <h4>Dịch vụ và thông tin khác</h4>
                    <ul>
                        <li>Khách hàng doanh nghiệp (B2B)</li>
                        <li>Ưu đãi thanh toán</li>
                        <li>Quy chế hoạt động</li>
                        <li>Chính sách bảo mật thông tin cá nhân</li>
                        <li>Chính sách Bảo hành</li>
                        <li>Liên hệ hợp tác kinh doanh</li>
                        <li>Tuyển dụng</li>
                        <li>Dịch vụ bảo hành điện thoại</li>
                        <li>Dịch vụ bảo hành mở rộng</li>
                    </ul>*/}
                </div> 
            </div>

            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - Dream House - Trịnh Hoài Tân</p>
            </div>
        </div>
    );
};

export default Footer;
