const mongoose = require("mongoose")
const Schema = mongoose.Schema

const infoSchema = new Schema({
    "number": {
        type: String
    },
    "telegram_id": {
        type: Number
    },
    "full_name": {
        type: String
    },
    "login": {
        type: String
    },
    "email": {
        type: String
    },
    "group": {
        type: String
    }
});

const statusSchema = new Schema({
    "attendance": {
        type: Number
    },
    "absence": [String]

});

const userSchema = new Schema({
    "info": infoSchema,
    "status": statusSchema
});
