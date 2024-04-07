const mongoose = require("mongoose");
const {ATLAS_DB_URL,NODE_ENV} = require("./server.config");
const {DB_NAME} = require("../constants");

async function connectToDB(){
    try {
        if(NODE_ENV == 'dev'){
            console.log(ATLAS_DB_URL+`${DB_NAME}`);
            await mongoose.connect(ATLAS_DB_URL+`${DB_NAME}`);
        }
    } catch (error) {
        console.log("Unable To connect to DB");
        console.error(error);
    }
}

module.exports = connectToDB;