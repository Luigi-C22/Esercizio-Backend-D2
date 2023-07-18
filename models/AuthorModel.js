const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    birthdate: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },

},
    { timestamps: true, strict: true, }
    )

    module.exports = mongoose.model("Author", AuthorSchema, "authors");