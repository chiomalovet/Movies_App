require("express-async-errors");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const addMovie = require("./controllers/addMovie");
const mongoose = require("mongoose");
const { connect } = require("http2");
const getMovies = require("./controllers/getMovie");
const getSingleMovies = require("./controllers/getSingleMovie");
const editMessage = require("./controllers/editMessage");
const { error } = require("console");
const deleteMovies = require("./controllers/deleteMovies");
const getRecommendation = require("./controllers/openAI");
const errorHandler = require("./handlers/errorHandler");

// database connection
mongoose.connect(process.env.mongo_connect, {})
  .then(() => {
    console.log("DataBase Connected");
  })
  .catch((error) => {
    console.log("DataBase Not Connected", error.message || error);
  });

  
const app = express();
app.use(cors());
app.use(errorHandler)

// to access data from the body of postman for now
app.use(express.json()); 

// models....
require("./models/movies.model");


// Routing....
app.post("/api/Movies", addMovie);
app.get("/api/movies", getMovies);
app.get("/api/movies/:movie_id", getSingleMovies);
app.patch("/api/movies", editMessage);
app.delete("/api/movies/:movie_id", deleteMovies);

//openAI Routing....
app.get("/api/movies/openai/getRecommendation", getRecommendation)
app.all("*", ()=> 
  {
    response.status(401).json(
      {
        status: "Failed",
        message: "Page Not Found"
      })
  })
app.use(errorHandler)

app.listen(8000, () => console.log("Server Successfully Connected"));
