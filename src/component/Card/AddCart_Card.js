import React from 'react'
import "./AddCart_Card.css"

import { useDispatch } from 'react-redux'
import { AddtoCart, setQtyInc, setQtyDec, RemoveformCart } from "../Redux/Slice"



function AddCart_Card({obj}) {
  const dispatch = useDispatch();
  return (
    <div className="Cart_card_cont">
      <div className="Cart_img_logo">
        <img src={obj.image} alt="" />
      </div>
      <div className="Card_cart_right">
        <span style={{ color: "black", fontSize: "1rem", fontWeight: "600" }}>{obj.tital}</span>
        <span className="Cart_card_description">
          {obj.discreption}

        </span>

        <span className='Cart_pizza_size_topping'>
        <span className="card_pizza_size">Medium</span>
        <span className='Cart_pizze_border'>|</span>
        <span className="card_pizza_topping">New Hand Tossed</span>

        </span>
      </div>

      <div className="Cart_pizza_qty_price">

        <div className="prise">
          <span className='rupee'>
            {obj.prise * obj.qty}
          </span>
        </div>


        <div className="setQty">
          <div className="left_btn" >
            {
              obj.qty === 1 ?
                <span className="material-symbols-outlined" onClick={() => dispatch(RemoveformCart(obj.key))}>
                  delete
                </span>
                :

                <span class="material-symbols-outlined" onClick={() => dispatch(setQtyDec(obj.key))} >
                  remove
                </span>

            }
            


          </div>
          <div className="qty">{obj.qty}</div>
          <div className="right_btn">

            <span class="material-symbols-outlined" onClick={() => dispatch(setQtyInc(obj.key))}>
              add
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AddCart_Card