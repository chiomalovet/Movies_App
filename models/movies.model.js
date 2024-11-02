const mongoose = require("mongoose");


const moviesSchema =  mongoose.Schema({

    movie_name: {
         type: String,
         required: [true, "Movie Name is required"]
    },

    info: {
        type: String,
        required:[true, "Info is required"]
    },

    rating: {
        type: Number,
        required: [true, "Rating is required"]
    },
    description: {
         type: String,
         required:[true, "Description is required"]
    }

})




const moviesModel= mongoose.model("movies", moviesSchema);


module.exports = moviesModel;