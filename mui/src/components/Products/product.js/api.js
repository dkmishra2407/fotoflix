import axios from 'axios';

const BACKEND_BASE_URL = "https://fakestoreapi.com"

export async function fetchProductById(productId) {
    const res = await axios.get(`${BACKEND_BASE_URL}/products/${productId}`);
    if (res.status !== 200) {
        throw new Error('API Error');
    }
    return res.data;
}
