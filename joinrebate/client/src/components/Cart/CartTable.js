import React from 'react';

const CartTable = () => {
  return (
    <table className="shop_table shop_table_responsive cart">
      <thead>
        <tr>
          <th>Product</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span>
              <img
                src="http://via.placeholder.com/70x70"
                className="img-responsive"
                alt=""
              />
            </span>
          </td>
          <td>
            <p>
              <a href="shop_single.html">Keemun Tea</a>
            </p>
          </td>
          <td>
            <p>$15</p>
          </td>
          <td>
            <div className="hb_quantity">
              <input
                type="number"
                min="0"
                className="hb_input"
                placeholder="Quantity"
              />
            </div>
          </td>
          <td>
            <p>$75</p>
          </td>
          <td>
            <span>
              <a href="#" className="hb_closebtn">
                <i className="fa fa-times"></i>
              </a>
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <span>
              <img
                src="http://via.placeholder.com/70x70"
                className="img-responsive"
                alt=""
              />
            </span>
          </td>
          <td>
            <p>
              <a href="shop_single.html">Black Tea</a>
            </p>
          </td>
          <td>
            <p>$15</p>
          </td>
          <td>
            <div className="hb_quantity">
              <input
                type="number"
                min="0"
                className="hb_input"
                placeholder="Quantity"
              />
            </div>
          </td>
          <td>
            <p>$75</p>
          </td>
          <td>
            <span>
              <a href="#" className="hb_closebtn">
                <i className="fa fa-times"></i>
              </a>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CartTable;
