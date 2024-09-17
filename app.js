const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const dotenv = require("dotenv");

// Config .env Variables
dotenv.config();

// Import Routes
const indexRouter = require("./routes/index");
const productsRouter = require("./routes/products");
const cartRouter = require("./routes/cart");

// Accessing .env Variables
const PORT = process.env.PORT || 3000;
const MONGOURL = process.env.MONGOURL || "mongodb://localhost:27017/CropAdvisor";

// Connect MongoDB Database
mongoose.connect(MONGOURL).then(() => console.log('Database Connected!')).catch((error) => console.log(error));

// Create PORT & App
const app = express();

// Set Ejs as View Engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Third - Party Middlewares
app.use(logger('dev'));

// Built - In Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));

// Routes Middlewares
app.use('/', indexRouter);
app.use("/products", productsRouter);
app.use("/cart", cartRouter);

// Error Handling Middleware

// 404 (Page not found Error)
app.use((req, res, next) => {
    return res.render("error", {message: "Oop's, Page Not found!", code: 404});
});

// 500 (Internal Server Error)
app.use((error, req, res, next) => {
    return res.render("error", {message: "Internal Server Error!", code: 500});
});

// Listen App
app.listen(PORT, () => {
    console.log('Server Listen on PORT ', PORT);
})