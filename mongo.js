const MongoClient = require('mongodb').MongoClient;
const MONGO_URL = "mongodb://localhost:2701/admin";


module.exports = function (app) {
    MongoClient.connect(MONGO_URL)
        .then((connection) => {
            app.people = connection.collection("people");
            console.log("Database connection established")
        })
        .catch((err) => console.error(err))

};