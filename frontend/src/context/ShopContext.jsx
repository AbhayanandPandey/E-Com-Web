import { createContext, useEffect, useState } from "react";
import { products } from '../assets/assets'
import { toast } from "react-toastify";

export const ShopContext = createContext()

const ShopContextProvider = (props) =>{

    const currency = '$';
    const delevery_fee = 10;
    const [search,setSearch] = useState('')
    const [showSearch,setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({})

    const AddToCart = async (itemId,size)=>{
        if(!size){
            toast('Select Product Size')
            return;
        }
        let cartData = structuredClone(cartItems);

        if(cartData[itemId]){
            if(cartData[itemId][size])
            {
                cartData[itemId][size] += 1;
                toast('Product Added To Cart')
            }
            else{
                cartData[itemId][size] = 1;
                toast('Product Added To Cart')
            }
        }
        else 
        {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
            toast('Product Added To Cart')
        }
        setCartItems(cartData)
    }

    const getCartCount =  () => {
        let TotalCnt = 0
        for(const items in cartItems ){
            for (const item in cartItems[items]){
                try {
                    if(cartItems[items][item] > 0){
                        TotalCnt += cartItems[items][item];
                    }
                } catch (error) {
                    
                }
            }
        }
        return TotalCnt;
    }
    
    const value = {
        products , currency, delevery_fee,
        search,setSearch,showSearch,setShowSearch,
        cartItems,AddToCart,
        getCartCount
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider