async function apifetch() {
    const data = await fetch("https://www.nseindia.com/api/marketStatus");
    const response = await data.json(); // Await the json() method
    console.log(response);
}

apifetch();