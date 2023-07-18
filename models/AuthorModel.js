const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    firstname: {
        type: string,
        required: true,
    },
    surname: {
        type: string,
        required: true,
    },
    birthdate: {
        type: string,
        required: true,
    },
    email: {
        type: string,
        required: true,
    },
    avatar: {
        type: string,
        required: true,
    },

},
    { timestamps: true, Strict: true, }
    )

    module.exports = mongoose.model("Author", AuthorSchema, "authors");