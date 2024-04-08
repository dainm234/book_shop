import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext, useState, useEffect } from "react";
import Search from "../components/search/Search";
import { Uicontext } from "../contexts/UiContext";
import { DataUser } from "../contexts/authContext/DataUserLogin";
import ListMenuUser from "../components/menuUser/listMenuUser";


const Header = (props) => {
    const { page1, page2, page3, page4 } = props;
    const { handleDisplayLogin, handleDisplayRegister } = useContext(Uicontext);
    const { userEmail } = useContext(DataUser);
    const { isAdmin } = useContext(DataUser);
    const {handleDisplayCart} = useContext(Uicontext);
   

    const handleLogout = () => {
        if (isAdmin) {
            localStorage.removeItem('#');
            
        }
        localStorage.removeItem('token');
        window.location.assign('/')
    };
    const [stateBgHeader, setStateBgHeader] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrolledHeight = window.pageYOffset;
            if (scrolledHeight === 0) {
                setStateBgHeader('bg-transparent')
            } else {
                setStateBgHeader('bg-[#1f1f1f]')
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={` ${stateBgHeader}
             items-center justify-between p-3 opacity-[0.9] flex fixed w-full z-[2] 
            `}>
                <div className="flex items-center gap-4 ">
                    <div className="px-5">
                        <Link to={'/'}>
                            <h1 className="text-green-200 text-[35px] font-bold">Sách</h1>
                        </Link>
                    </div>
                    <ul className="flex gap-2">
                        <li className="text-white font-bold px-2 cursor-pointer">{page1}</li>
                        <li className="text-white font-bold px-2 cursor-pointer">{page2}</li>
                        <li className="text-white font-bold px-2 cursor-pointer">{page3}</li>
                        <li className="text-white font-bold px-2 cursor-pointer">{page4}</li>

                    </ul>
                </div>
                <div className="flex items-center gap-5 px-1">
                    <div className="cursor-pointer flex items-center">
                        <Search />
                    </div>

                    <div>
                    <FaShoppingCart onClick={()=>handleDisplayCart()} className="text-[20px] text-[#fff] cursor-pointer"/>
                    </div>

                    <div className="flex gap-2 items-center">
                        {!userEmail ? (
                            <>
                                <button className="text-white font-bold bg-[#C7C7C8] p-[6px] rounded-full border-[1px] border-gray-300 bg-transparent bg-opacity-50 w-[100px]" onClick={handleDisplayRegister}>Đăng ký</button>
                                <button className="text-white font-bold bg-[#139F7B] p-[5px] rounded-full w-[110px]" onClick={handleDisplayLogin}>Đăng nhập</button>
                            </>
                        ) : (
                            <>
                                <ListMenuUser LogoutUser={handleLogout} />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;