import axios from 'axios';

export const fetchProducts = async (price) => {
    try {
        const response = await axios.get('https://api.example.com/products', {
            params: { price }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const fetchProductsByPostedTime = async (postedTime) => {
    try {
        const response = await axios.get('/api/products', {
            params: { postedTime }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};