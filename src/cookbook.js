const axios = require('axios');

const client = axios.create({
    baseURL: 'https://yw-cookbook.herokuapp.com',
});

module.exports = {
    async getPage(query) {
        try {
            const res = await client.get(`/getPage`, {
                params: {
                    query: query
                }
            });
            return res.data;
        } catch (e) {
            console.log(e)
        }
    },
};