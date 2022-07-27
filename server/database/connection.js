const mongoose = require('mongoose');

const connectDB = async () => {
    /*try{
        // mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }*/
    mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true } 
        );
        try{
        const connection = mongoose.connection;
        connection.once('open', () => {
            console.log("MongoDB database connection established successfully");
        } )
       }catch(err){
        console.log(err);
        process.exit(1);//to exit from the process
    }
}

module.exports = connectDB