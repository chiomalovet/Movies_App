const mongoose = require("mongoose");

const getMovies = async (request, response)=>
    {
       const moviesModel = mongoose.model("movies");
       
       const getMovies = await moviesModel.find({});

       response.status(200).json({
        status: "Success",
        data: getMovies
       })
    }


    module.exports = getMovies;