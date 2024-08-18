// src/api.js
const API_URL = 'http://localhost:5000/api'; // Change this to your backend URL

export const getProducts = async () => {
    const response = await fetch(`${API_URL}/products`);
    return response.json();
};

export const getCart = async () => {
    const response = await fetch(`${API_URL}/cart`);
    return response.json();
};

export const getUser = async () => {
    const response = await fetch(`${API_URL}/users`);
    return response.json();
};

export const addToCart = async (product) => {
    const response = await fetch(`${API_URL}/cart`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    });
    return response.json();
};

// Add more API functions as needed
