import axios from 'axios';
import { URL_API, API_BOOK_CATEGORY,API_BOOK} from "../../util/url-api";

const BookNewApi = async () => {
    try {
        const response = await axios.get(`${URL_API}/${API_BOOK_CATEGORY}`);
        const buyCategory = response.data.find(category => category.name === 'Mua lẻ');
        if (buyCategory) {
            const productsResponse = await axios.get(`${URL_API}/${API_BOOK_CATEGORY}/${buyCategory._id}`);
            return productsResponse.data.books;
        }
    } catch (error) {
        console.error('Error fetching free books data:', error);
        throw error;
    }
};
const GetAllInforBook= async (bookId) => {
    try {
        const response = await axios.get(`${URL_API}/${API_BOOK}/${bookId}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error; 
    }
};
export {BookNewApi,GetAllInforBook}
