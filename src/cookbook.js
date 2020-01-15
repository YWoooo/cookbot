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

    async getAllPages(pageNumber, pageSize) {
        try {
            const res = await client.get(`/getAllPages`, {
                params: {
                    pageNumber: pageNumber,
                    pageSize: pageSize
                }
            });
            return res.data;
        } catch (e) {
            console.log(e)
        }
    },

    async getCount() {
        try {
            const res = await client.get(`/getCount`);
            return res.data;
        } catch (e) {
            console.log(e)
        }
    },
};