const mongoose = require("mongoose");

class DataBase {
    static async connect(){
    try{
        await mongoose.connect("moongodb://");
    }
    catch(error){
        await mongoose.disconnect();
        console.log(error);
    }
}
}

module.exports = DataBase;