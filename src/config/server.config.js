const dotenv = require("dotenv");
const {DB_NAME,LOG_DB_NAME} = require("../constants");


dotenv.config();

module.exports = {
    PORT : process.env.PORT || 3000 ,
    ATLAS_DB_URL : process.env.ATLAS_DB_URL + DB_NAME,
    LOG_DB_URL: process.env.LOG_DB_URL + LOG_DB_NAME,
    NODE_ENV : process.env.NODE_ENV || "dev"
}