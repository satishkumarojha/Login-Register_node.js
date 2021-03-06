const app = require("./index");
require('dotenv').config();
const connectdb = require("./configs/db")

const PORT = process.env.PORT || 5000
app.listen(PORT, async () => {
    try{
        await connectdb();
        console.log("listening on port 5000")
    }
    catch(err){
        console.log(err.message);
    }
});