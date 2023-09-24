import React from 'react';

const CartTotals = () => {
  return (
    <div className="cart_totals">
      <div className="cart_total_inner">
        <h2>cart total</h2>
        <table className="shop_table shop_table_responsive">
          <tbody>
            <tr className="cart-subtotal">
              <th>Sub total</th>
              <td data-title="Subtotal">
                <span className="woocommerce-Price-amount amount">
                  <span className="woocommerce-Price-currencySymbol">$</span>150.00
                </span>
              </td>
            </tr>
            <tr className="cart-lessamount">
              <th>Less Discounts</th>
              <td data-title="Less_Discount">
                <span className="woocommerce-Price-amount amount">
                  <span className="woocommerce-Price-currencySymbol">- $</span>50.00
                </span>
              </td>
            </tr>
            <tr className="order-total">
              <th>Total</th>
              <td data-title="Total">
                <span className="woocommerce-Price-amount amount">
                  <span className="woocommerce-Price-currencySymbol">$</span>100.00
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="wc-proceed-to-checkout">
          <a href="checkout.html" className="checkout-button hb_btn">
            Proceed to Checkout
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
