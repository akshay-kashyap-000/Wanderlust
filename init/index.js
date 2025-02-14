const mongoose = require("mongoose");   
const initData = require("./data.js");  // Importing the data from data.js
const Listing = require('../models/listing.js');  // Importing the model from listing.js 

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(() =>{
    console.log("connected to DB");
}).catch((err) => {
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
};

const initDB = async () => {
    await Listing.deleteMany({});  // Deleting all the documents from the collection
    initData.data = initData.data.map((obj) =>({
        ...obj, 
        owner: "67a5b89413ba98fbd03de938",
    }));
    await Listing.insertMany(initData.data);  // Inserting the data from data.js into the collection
    console.log("Data was initialized");
};

initDB();  // Calling the function to initialize the database