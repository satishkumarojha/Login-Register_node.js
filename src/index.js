const express = require("express");

const register = require("./controllers/registration.controller")

const login = require("./controllers/login.controllers");


const cors = require("cors")

const productController = require("./controllers/product.controllers");
// const { register } = require("./controllers/auth.controllers");

const app = express();

app.use(express.json());

app.use(cors());


app.use("/login",login);
app.use("/register",register);

app.use("/product",productController);


module.exports=app;