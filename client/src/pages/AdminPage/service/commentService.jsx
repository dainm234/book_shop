
import axios from "axios";
import { URL_API,API_BOOK_COMMENT } from "../../../util/url-api";
import { getNameBook,getNameUser } from "./getInforBook";


const getDataComment = async () => {
    try {
        const response = await axios.get(`${URL_API}/${API_BOOK_COMMENT}`);
        return response.data;
    } catch (error) {
        console.log("Error fetching comments:", error);
        throw error;
    }
};

const getNameBookInComment = async () => {
    try {
        const comments = await getDataComment();
        const bookNames = [];
        await Promise.all(comments.map(async (comment) => {
            const bookName = await getNameBook(comment.book);
            bookNames.push(bookName);
        }));
        return bookNames;
    } catch (error) {
        console.log("Error processing comments:", error);
        throw error;
    }
};

const getNameUserInComment = async () => {
    try {
        const comments = await getDataComment();

        await Promise.all(comments.map(async (comment) => {
            const name = await getNameUser(comment.user);
            return name;
        }));
        return comments
    } catch (error) {
        console.log("Error processing comments:", error);
        throw error;
    }
};
export {
    getNameBookInComment,
    getDataComment,
    getNameUserInComment
};