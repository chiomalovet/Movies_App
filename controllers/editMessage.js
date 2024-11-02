const mongoose = require("mongoose");

const editMessage = async(request, response)=>
    {
        const moviesModel = mongoose.model("movies")

        const {movie_id, movie_name, info, rating, description} = request.body
        
            if(!movie_id) "Movie_id is required"


         
        await moviesModel.updateOne(
            {
                _id:movie_id,
            },
            {
                movie_name: movie_name,
                info: info,
                rating: rating,
                description: description
            },
            {
                runValidators: true
            })
            
        response.status(200).json({
            status: "Edited Successfully"
        })
    }

    module.exports= editMessage;