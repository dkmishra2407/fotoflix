import axios from 'axios';

const BACKEND_BASE_URL = "http://localhost:8000"

export async function fetchAllProducts() {
    const res = await axios.get(`${BACKEND_BASE_URL}/products`);
    if (res.status !== 200) {
        throw new Error('API Error');
    }
    return res.data;
}

export async function fetchProductById(productId) {
    const res = await axios.get(`${BACKEND_BASE_URL}/products/${productId}`);
    if (res.status !== 200) {
        throw new Error('API Error');
    }
    return res.data;
}
