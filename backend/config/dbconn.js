const moongosh = require('mongoose')
const URL = process.env.DATABASE_URL
const dbconn = async() =>{
    try {
        await moongosh.connect(URL)
        console.log("Database Connection connection...")
    } catch (error) {
        console.log(error.message)
    }
}
module.exports = dbconn