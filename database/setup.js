// SET UP MONGOOSE
const mongoose = require('mongoose')
require('dotenv').config()
const connectionString = process.env.DB_URL

module.exports = function() {
    mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if(err) {
            console.log(err)
        } else {
            console.log('database connection successful');
        }
    })
}