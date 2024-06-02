import React, { useContext } from "react";
import './ProductDisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    const handleAddToCart = () => {
        addToCart(product.id);
        toast.success("Bạn đã thêm phòng vào giỏ hàng!");
    };

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="Product Thumbnail" />
                    <img src={product.image} alt="Product Thumbnail" />
                    <img src={product.image} alt="Product Thumbnail" />
                    <img src={product.image} alt="Product Thumbnail" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="Main Product" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <p>Đánh giá:  </p>
                    <img src={star_icon} alt="Star" />
                    <img src={star_icon} alt="Star" />
                    <img src={star_icon} alt="Star" />
                    <img src={star_icon} alt="Star" />
                    <img src={star_dull_icon} alt="Dull Star" />
                    <p>(5.9k)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">{product.old_price} vnđ</div>
                    <div className="productdisplay-right-price-new">{product.new_price} vnđ</div>
                </div>
                <div className="productdisplay-right-description">
                    Phòng trọ này sáng sủa và thoáng đãng với ánh sáng tự nhiên và không gian mở. Cảm giác ấm cúng được tạo ra bởi tông màu trung tính và nội thất tiện nghi. Không gian này là nơi lý tưởng để nghỉ ngơi sau một ngày làm việc mệt mỏi.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Diện Tích</h1>
                    <div className="productdisplay-right-sizes">
                        <div>16m2</div>
                        <div>20m2</div>
                        <div>25m2</div>
                        <div>30m2</div>
                        <div>35m2</div>
                    </div>
                </div>
                <button onClick={handleAddToCart}>ĐẶT LỊCH</button>
                <p className='productdisplay-right-category'><span>Dạng phòng :</span> Căn Hộ Dịch Vụ, phòng trọ sinh viên</p>
                <p className='productdisplay-right-category'><span>Tags :</span> Duplex, Studio.v.v.</p>
            </div>
        </div>
    )
}

export default ProductDisplay;
