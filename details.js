const mongoose = require('mongoose');


mongoose.Promise = global.Promise;

var detailsSchema = mongoose.Schema({
    email:{
        type: String,
        required: true,
        minlength: 1,
        unique: true
    },
    coin:{
        type: String
    },
    account:{
        type: String
    },
    transactionHash:{
        type: String
    },
    privateKey: {
        type: String
    }
})

var Detail = mongoose.model('Detail', detailsSchema);

module.exports = Detail;