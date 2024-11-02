const mongoose= require("mongoose")


const deleteMovies = async (request, response)=> 
    {
        const moviesModel= mongoose.model("movies");
         
        const findMovie = await moviesModel.findOne(
            {
                _id: request.params.movie_id,
            })
        
            if(!findMovie) throw "Movie Does not exist"
            
          await moviesModel.deleteOne({
            _id: request.params.movie_id,
          })

        
      response.status(200).json(
        {
            status: "successful",
            message: "Movie Deleted"
        })
        return;

    }

    module.exports = deleteMovies;