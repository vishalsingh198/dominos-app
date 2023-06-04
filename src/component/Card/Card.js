import React, { useEffect } from 'react'
import "./Card.css"
import { useDispatch } from 'react-redux'
import { AddtoCart, setQtyInc, setQtyDec, RemoveformCart} from '../Redux/Slice';


function Card({ obj }) {

    const dispatch = useDispatch();
   



    return (
        <>

            <div key={obj.key} className="card_cont">
                <div className="product_img">
                    <img src={obj.image} alt="" />
                </div>
                <div className="text">
                    <span style={{ color: "black", fontSize: "1rem", fontWeight: "600" }}>{obj.tital}</span>
                    <span className="Flavor_description">
                        {obj.discreption}
                    </span>
                </div>
                <div className="select_option">
                    <div className="left_select">
                        <div className="size">size</div>
                        <div>
                            <div className="select_size" >
                                <div className="size_option">Regular</div>
                                <div className="select_logo">
                                    <span class="material-symbols-outlined">
                                        arrow_drop_down
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right_select">


                        <div className="size">Crust</div>
                        <div>
                            <div className="select_size">
                                <div className="size_option">New Hand Tossed</div>
                                <div className="select_logo">
                                    <span class="material-symbols-outlined">
                                        arrow_drop_down
                                    </span>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="addtocart">
                    <button onClick={() => dispatch(AddtoCart(obj))}>

                        <span>ADD TO CART</span>

                    </button>
                </div>




            </div>

            
        </>
    )
}


export function AddCard({ obj }) {
    const dispatch = useDispatch();

    return (
        <>


            <div key={obj.key} className="add_cart_cont">
                <div className="top_half">

                    <div className="img_logo">
                        <img src={obj.image} alt="" />
                    </div>
                    <div className="right_descreption">
                        <div className="tital">
                            {obj.tital}
                        </div>
                        <div className="description">
                            {obj.discreption}
                        </div>
                    </div>

                </div>

                <div className="footer">
                    <div className="setQty">
                        <div className="left_btn" >
                            {
                                obj.qty === 1 ?
                                    <span className="material-symbols-outlined" onClick={() => dispatch(RemoveformCart(obj.key))}>
                                        delete
                                    </span>
                                    :

                                    <span class="material-symbols-outlined" onClick={() => dispatch(setQtyDec(obj.key))}>
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

                    <div className="prise">
                        <span className='rupee'>
                            {obj.prise * obj.qty}
                        </span>
                    </div>

                </div>

                <div className="border"></div>



            </div>

        </>
    )
}
export default Card