import Header from "../../layouts/Header";
import Section from "../../layouts/Section";
import ListBookFree from "../../layouts/Contents/MainHome/ListBookFree";
import { useContext } from "react";
import ListBookNew from "../../layouts/Contents/MainHome/ListBookNew";
import Cart from "../../layouts/Contents/MainCart/Cart";
import { Uicontext } from "../../contexts/UiContext";
const Home = () => {
     const {displayCart} = useContext(Uicontext)
    return (
        <>
            <div>
                <div className="relative">
                    <Header
                        page1="Sách điện tử"
                        page2="Sách nói"
                        page3="Sách hiệu sổi"
                        page4="Sách tóm tắt"
                    />
                </div>
                <Section />
                <ListBookFree />
                <ListBookNew />
                <div className={`fixed z-10 top-0 right-0 ${displayCart} ease-in duration-300 `}>
                    <Cart />
                </div>
            </div>
        </>
    );
};

export default Home;