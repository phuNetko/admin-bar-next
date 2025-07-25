import client from "./client";


export const getProducts = async () => {
    const response = await client.get("/products");
    return response.data;
};
