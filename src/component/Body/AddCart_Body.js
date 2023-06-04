import React,{useState, useEffect} from 'react'
import "./AddCart_Body.css"
import AddCart_Card from "../Card/AddCart_Card"
import { useSelector } from 'react-redux'


function AddCart_Body() {
  const Cart = useSelector((state) => state.ADDTOCART.Addcart);
  const flag = useSelector((state) => state.ADDTOCART.flag);
  let [carttotalPrice, setCartTotalPrice] = useState(0);
  useEffect(() => {
    Cart.length === 0 ? setCartTotalPrice(0) :

      Cart.map((obj) => {
        return flag === true ? setCartTotalPrice(carttotalPrice + (1 * obj.prise)) : setCartTotalPrice(carttotalPrice - (1 * obj.prise));
      })
    console.log("Falg => ", flag)

  }, [Cart])

  return (
    <div className="main_cart_cont">
        <div className="cart_left">

          {
            Cart.map((obj)=>{
              return <AddCart_Card  obj = {obj}/>
            })

          }

           

        </div>
        <div className="cart_right">
            <div className="Cart_card_right">

              <div className="Cart_sub_total">
                <span className="sub__total_text">Sub Total</span>
            <span className="sub_total_price">{carttotalPrice}</span>
              </div>

              <button className='place_order'>PLACE ORDER</button>
            </div>


        </div>

    </div>
  )
}

export default AddCart_Body