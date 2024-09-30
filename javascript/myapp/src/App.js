import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    async function apifetch() {
      try {
        const data = await fetch("https://www.nseindia.com/api/marketStatus");
        const response = await data.json();
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    apifetch();
  }, []); 

  return <div>HELLO</div>;
}

export default App;
