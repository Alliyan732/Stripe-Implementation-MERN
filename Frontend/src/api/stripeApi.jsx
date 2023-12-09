import axios from 'axios'

const API_URL = 'http://localhost:8080'


// get stripe key
export const getStripeApiKey = async () => {
    try {
        const response = await axios.get(`${API_URL}/stripe_api_key`)
        // console.log("Response :", response.data)
        return response;
    }
    catch (error) {
        throw error;
    }
};

// process payment
export const processPayment = async () => {
    try {
        const response = await axios.post(`${API_URL}/process_payment`);
        console.log("Response :", response.data)
        return response;
    }
    catch (error) {
        throw error;
    }
};