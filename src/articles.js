import axios from "axios";

export const fetchArticles = async (topic, page) => {
    try {
        const response = await axios.get("https://api.unsplash.com/search/photos", {
            headers: {
                Authorization: "Client-ID z84fcuITCax-77rSnKJBtHbzYiUapQ_YCHts72m6Xio"
            },
            params: {
                query: topic,
                page,
                per_page: 8,
            },
        });
        return response.data.results; 
    } catch (error) {
        console.error("Error fetching images:", error);
        throw error; 
    }
};


