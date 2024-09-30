const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser('weneedabettersecret'));

const products = [
    {
        name: 'Iphone'
    },
    {
        name: 'Macbook'
    }
]

app.get('/hello', (req, res) => {
    res.cookie('mode', 'dark');
    res.cookie('username', 'max');
    res.cookie('recommened', JSON.stringify(products));
    res.send('Sent you all the cookies');
});

app.get('/greet', (req, res) => {
    console.log(req.cookies);
    res.send('Greeting from server');
});

app.get('/scream', (req, res) => {
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.send('<h1>Screaming.....</h1>')
});

app.get('/fav-color', (req, res) => {
    res.cookie('color', 'blue', { signed: true });
    res.send('sent you a fav color cookie');
})

app.listen(8080, () => {
    console.log('server running on port 8080');
})
