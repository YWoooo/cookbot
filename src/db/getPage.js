const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/";

const getPage = async (query) => {
    try {
        const db = (await MongoClient.connect(url)).db('cookbook')
        const collection = db.collection("pages");
        return await collection.find(query).toArray()
    } catch (e) {
        console.log('getPage error: ', e)
    }
}

module.exports = getPage