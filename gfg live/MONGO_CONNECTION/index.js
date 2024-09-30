const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
    name: { type: String, required: true },
    salary: { type: Number, required: true },
    age: { type: Number, min: 0, max: 100 },
    email: { type: String, required: true, lowercase: true, minlength: 10 }
}, { versionKey: false, timestamps: true });

const Movie = mongoose.model('Movie', movieSchema); // Changed the model name to singular 'Movie'

async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/employee", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connection to MongoDB is open");

        // Create a movie instance and save it to the database
        const newMovie = await Movie.create({
            name: "wadu",
            salary: 450,
            age: 18,
            email: "dkmishradrfygtyuhu"
        });
        console.log("Movie is saved");
        console.log(newMovie);

        // Delete the movie record that was just created
        await Movie.deleteOne({ _id: newMovie._id });
        console.log("Movie deleted successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

async function run() {
    try {
        // Query the database for movies where age is greater than or equal to 18 and name is 'wadu'
        const movies = await Movie.find({ age: { $gte: 18 }, name: 'wadu' }).limit(2).select("name");
        console.log(movies);
        console.log("Here are the movies");
    } catch (error) {
        console.log(error);
    }
}

main();
run();
