import axios from 'axios';
import { URL_API, API_BOOK_CATEGORY,API_BOOK} from "../../util/url-api";

const BookFreeApi = async () => {
    try {
        const response = await axios.get(`${URL_API}/${API_BOOK_CATEGORY}`);
        const freeCategory = response.data.find(category => category.name === 'Sách miễn phí');
        if (freeCategory) {
            const productsResponse = await axios.get(`${URL_API}/${API_BOOK_CATEGORY}/${freeCategory._id}`);
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
export {BookFreeApi,GetAllInforBook}
