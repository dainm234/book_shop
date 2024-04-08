import { useContext, useEffect } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { Uicontext } from "../../../contexts/UiContext";
import { GetProductCart } from "../../../services/cart/cartService";

const Cart = () => {
    const {handleHideCart} = useContext(Uicontext);
      const  renderDataCart = async ()=>{
        try {
            const response = await GetProductCart();
            console.log(response);
        } catch (error) {
            console.log(error);
        }
      }
      useEffect(()=>{
        renderDataCart()
      },[])
    return (
        <>
            <div className="w-[400px] bg-[#333] h-screen p-5 rounded-l-md">
                <div className="flex cursor-pointer">
                    <CiCircleRemove onClick={()=>handleHideCart()}  className="text-[30px] text-[#fff]" />
                </div>
                <h1 className="text-[#fff]"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, magni ratione officiis ea atque optio ex accusantium tempore laboriosam vero maiores consectetur quae? Obcaecati magni quam sit. Incidunt, aliquam ipsam? </h1>
            </div>
        </>
    );
};

export default Cart;