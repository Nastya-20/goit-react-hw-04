import axios from "axios";

export const fetchArticles = async () => {
    const response = await axios.get("");
    return response.data;
}