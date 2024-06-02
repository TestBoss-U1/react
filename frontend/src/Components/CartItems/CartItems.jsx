import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartItems = () => {
  const {
    all_product,
    cartItems,
    removeFromCart,
    getTotalCartAmount,
    placeOrder,
  } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount(); // Tính tổng giá trị giỏ hàng

  const handlePlaceOrder = () => {
    placeOrder();
    toast.success("Bạn đã đặt lịch xem phòng thành công!");
  };

  return (
    <form onSubmit={handlePlaceOrder} className="font">
      <div className="cartitems">
        <div className="cartitems-format-main">
          <p>Hình</p>
          <p>Địa chỉ</p>
          <p>Giá phòng</p>
          <p>Số lượng</p>
          <p>Loại phòng</p>
          <p>Xóa</p>
        </div>
        <hr />
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id}>
                <div className="cartitems-format cartitems-format-main">
                  <img src={e.image} alt="" className="cartitems-product-icon" />
                  <p>{e.name}</p>
                  <p>{(e.new_price * cartItems[e.id] * 10000).toLocaleString()} đồng</p>{" "}
                  {/* Hiển thị giá trị thực của sản phẩm */}
                  <button className="cartitems-quantity">{cartItems[e.id]}</button>
                  <p>{e.category}</p>
                  <img
                    className="cartitems-remove-icon"
                    src={remove_icon}
                    onClick={() => {
                      removeFromCart(e.id);
                    }}
                    alt=""
                  />
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>Tổng tiền đặt cọc</h1>
            <div>
              <div className="cartitems-total-item">
                <p>Giá</p>
                <p>{(totalAmount * 10000).toLocaleString()} VNĐ</p>{" "}
                {/* Hiển thị tổng giá trị giỏ hàng */}
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p> Phí dịch vụ</p>
                <p>Miễn phí</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <h3>Tổng tiền cần thanh toán: </h3>
                <h3>{(totalAmount * 10000).toLocaleString()} VNĐ</h3>{" "}
                {/* Hiển thị tổng giá trị giỏ hàng */}
              </div>
            </div>
            <button type="submit">Xác nhận đặt lịch xem phòng</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CartItems;
