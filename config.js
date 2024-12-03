// const { name } = require("ejs");
const { config } = require("dotenv")
const mongoose = require("mongoose");
config()
const connect = mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`);

connect.then(() => {
    console.log("Kết nối thành công")
})
.catch((error) => {
    console.log("Kết nối thất bại", error)
});

const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required : true
    }
});

const colllection = new mongoose.model("user", LoginSchema);

module.exports = colllection;