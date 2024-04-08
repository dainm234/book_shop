import axios from "axios"
import { useState, useEffect } from "react";
import { URL_API , API_USER_CART} from "../../util/url-api";
import { useContext } from "react";
import { DataUser } from "../../contexts/authContext/DataUserLogin";

const GetProductCart = () => {
    const [cartUser, setCartUser] = useState([]);
    const {inforUser} = useContext(DataUser);
    const User = inforUser._id;
    console.log(User);

const getApiCart = async (idUser)=> {
    try {
        const response = await axios.get(`${URL_API}/${API_USER_CART}/${idUser}`);
        setCartUser(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
    useEffect(()=>{
        getApiCart(User)
    },[])
    console.log(cartUser);
    return cartUser;
};

export { GetProductCart };
