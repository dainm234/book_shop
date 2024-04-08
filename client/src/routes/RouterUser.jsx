import PathUser from "../config/PathUser";
import Home from "../pages/UserPage/Home";
import BookDetail from "../pages/UserPage/BookDetail";
const publicRouterUser = [
    {
        path: PathUser.Home,
        component: Home,
        title: 'Home',
    },
    {
        path: PathUser.BookDetail,
        component: BookDetail,
        title: 'Ebook',
    },
   
]
export default publicRouterUser