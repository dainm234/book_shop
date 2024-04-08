import { createContext, useState } from "react";

export const Uicontext = createContext();
const DisplayContext = ({ children }) => {
    const [displayLogin, setDisplayLogin] = useState(false);
    const [displayRegister, setDisplayRegister] = useState(false);
    const [displayComment, setDisplayComment] = useState(false);

    const [displayCart, setDisplayCart] = useState("translate-x-[400px]");


    const [filter, setFilter] = useState(null);
    // Ui login 
    const handleDisplayLogin = () => {
        setTimeout(() => {
            setDisplayLogin((prevLogin) => !prevLogin);
        }, 100)
        setDisplayRegister(false)
        setFilter('filter')
    }
    // Ui register
    const handleDisplayRegister = () => {
        setTimeout(() => {
            setDisplayRegister((prveRegister) => !prveRegister);
        }, 100)

        setDisplayLogin(false);
        setFilter('filter')

    }
    const handleDisplayComment = () => {
        setTimeout(() => {
            setDisplayComment((prveComment) => !prveComment);
        }, 100)

        setDisplayComment(false);
        setFilter('filter')
    }
    const handleHideComment = () => {
        setDisplayComment(false);
        setFilter('')
    }
    const handleDisplayCart = () => {
        setDisplayCart("translate-x-[0px]");
    }
    const handleHideCart = () => {
        setDisplayCart("translate-x-[400px]");
    }
    
    const dataDisplay = {
        displayCart,
        displayRegister,
        displayLogin,
        displayComment,
        filter,
        setFilter,

        handleHideCart,
        handleDisplayCart,
        handleDisplayRegister,
        handleDisplayLogin,
        handleHideComment,
        handleDisplayComment,


    }
    return (
        <div>
            <Uicontext.Provider value={dataDisplay}>
                {children}
            </Uicontext.Provider>
        </div>
    );
};

export default DisplayContext;