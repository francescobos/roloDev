const fetchData = async (endpoint, params = {}) => {
console.log('Fetching data from:',  `${config.baseUrl}/${endpoint}`);
    try {
        const response = await axios.get(`${config.baseUrl}/${endpoint}`, {
        headers: config.defaultHeaders,
        params
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error.response?.data || error.message);
        throw error;
    }
};