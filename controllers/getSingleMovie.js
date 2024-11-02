const mongoose = require("mongoose");

const getSingleMovies = async (request, response)=>
    {
       const moviesModel = mongoose.model("movies");
     
       const getMovies = await moviesModel.findOne({
        _id: request.params.movie_id,
       });

       response.status(200).json({
        status: "Success",
        data: getMovies
       })
    }


    module.exports = getSingleMovies;