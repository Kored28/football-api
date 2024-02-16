const mongoose = require('mongoose');

const connectDB = (url) => {
    return mongoose.connect(url, {
        dbName: "football-api"
    })
}

module.exports = connectDB