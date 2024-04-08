import axios from "axios";
import { URL_API } from "../../util/url-api";

export const RegisterAuth = {
    register: async (userData) => {
        try {
            const response = await axios.post(`${URL_API}/auth/register`, userData);
            if (response.data.token) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
};


