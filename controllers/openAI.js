const { GoogleGenerativeAI } = require("@google/generative-ai");
const OpenAI = require('openai');
 const mongoose = require("mongoose");



const getRecommendation = async(request, response)=>
    {


        const moviesModel = mongoose.model("movies");
        const allmovies = await moviesModel.find({});
        const movieString = (await allmovies).map((el)=> el.movie_name).join(",");
        
        // Make sure to include these imports:
        // import { GoogleGenerativeAI } from "@google/generative-ai";
            const genAI = new GoogleGenerativeAI(process.env.API_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            const prompt = `I need a recommendation based on these movies: ${movieString}. Provide me with 10 suggestions. separate movies with comma and new line`;
            
            const result = await model.generateContent(prompt);
            response.status(200).json(
                {
                    status: "Successfull",
                    message: result.response.text()
                })
        
        
    }


    module.exports = getRecommendation;