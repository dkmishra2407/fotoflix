const mongoose = require('mongoose');

class Database{
    static async connect() {
        try {
            await mongoose.connect('mongodb://127.0.0.1/shopping-cart');
        }
        catch (err) {
            await mongoose.disconnect();
            console.error(err);
        }
    }
}

module.exports = Database;