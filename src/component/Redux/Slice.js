import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    Addcart : [],
    flag: true,

}
export const AddToCart = createSlice({
    name: 'ADDTOCART',
    initialState,
    reducers: {
       
       
        RemoveformCart: (state, action) => {
            const removeProduct = state.Addcart;
           
            const setProduct = removeProduct.filter((obj ) => {
                return (
                   
                    obj.key !== action.payload
                    
                    )
            })

            state.Addcart = [...setProduct]

        },

        setQtyInc : (state , action) => {
            const products = state.Addcart;
            products.map((obj)=>{
                return (
                    
                    
                    obj.key === action.payload ? (obj.qty += 1 , state.flag = true
                        
                        
                        ) : null

                    
                )

            })
            


        },
        setQtyDec: (state, action) => {
            const products = state.Addcart;
            products.map((obj) => {
                return (
                    obj.key === action.payload ? (obj.qty -= 1 , state.flag = false ) : null
                )

            })

        },

        AddtoCart : (state , action) => {

          
            
            state.Addcart = [...state.Addcart , {...action.payload , qty : 1}]
            

        }
        
    }
})

export const { AddtoCart, RemoveformCart, setQty, setQtyDec, setQtyInc, setTotalPrice } = AddToCart.actions
export default AddToCart.reducer


