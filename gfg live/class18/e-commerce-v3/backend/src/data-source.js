const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");

class Database{
    static async connect() {
        try{
            await mongoose.connect('mongodb://127.0.0.1/shopping-cart');
        }
        catch(err){
            await moongose.disconnect();
            console.log(err);
        }
    }
}
module.exports = Database;