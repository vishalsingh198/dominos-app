import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import { AddCard } from '../Card/Card';
import { useSelector } from 'react-redux'
import "./Body.css"
import { data } from './Data';
import { Link } from "react-router-dom";

function Body() {
    const [cards, setCards] = useState([]);


    let [totalPrice, setTotalPrice] = useState(0);
    const Cart = useSelector((state) => state.ADDTOCART.Addcart);
    const flag = useSelector((state) => state.ADDTOCART.flag);
    useEffect(() => {
        Cart.length === 0 ? setTotalPrice(0) :

            Cart.map((obj) => {
                return flag === true ? setTotalPrice(totalPrice + (1 * obj.prise)) : setTotalPrice(totalPrice - (1 * obj.prise));
            })
        console.log("Falg => ", flag)

    }, [Cart])







    useEffect(() => {
        setCards(data);
    })




    return (
        <>

            <div className="body_main_cont">
                <div className="left_area">
                    {
                        cards.map((obj, idx) => {
                            return <Card obj={obj} />
                        })}

                    <div className="second_cart">
                        <span className="Cart_item_length">Cart : {Cart.length} Item</span>
                        <Link to="/cart" >
                            <button className='view_cart'>View Cart</button>

                        </Link>

                    </div>


                </div>
                {/*  */}
                <div className="right_area">

                    <div className="add_cart_block">
                        <div className="upper_half">
                            {
                                Cart.map((obj) => {

                                    return (

                                        <AddCard obj={obj} />

                                    )


                                })
                            }

                        </div>

                        <div className="other_half">
                            <div className="first">
                                <span>Subtotal</span>
                                <span className='total_price'>{totalPrice}</span>
                            </div>
                            <Link to="/cart" >
                                <button className='checkout'>CHECKOUT</button>

                            </Link>



                        </div>




                    </div>
                </div>


            </div>
        </>
    )
}

export default Body