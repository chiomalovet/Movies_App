const mongoose = require("mongoose");

const addMovie= async (request, response)=>{

     const moviesModel = mongoose.model("movies");
     const {movie_name, info, rating, description} = request.body

        //validation........
         
            if(!movie_name)throw "Movie_Name Must Be Provided";
            if(!info) throw "Info Must Be Provided";
            if(!rating) throw "Rating Must Be Provided";
            if(rating<1 || rating >10) throw "rating Must Be Between 1 and 10";
          
    

     
        const createdMovies= await moviesModel.create({
            movie_name: movie_name,
            info: info,
            rating: rating,
            description: description
        })


      //success
    response.status(200).json({
        status: "Sucess",
        message: "movies added Successfully",
        

    })
}

module.exports= addMovie;