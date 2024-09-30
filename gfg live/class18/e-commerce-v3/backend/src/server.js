const Database = require('./data-source');
const app = require('./app');

const PORT = 8000;

// Use an immediately invoked async function to start the server after connecting to the database
(async () => {
    try {
        await Database.connect();
        app.listen(PORT, () => {
            console.log(`Server is started on port ${PORT}`);
        });
    } catch (err) {
        console.error(err);
    }
})()