import React, {useState, useEffect } from "react";
import axios from "axios";
import ImageCard from './components/image component/image'

import "./App.css";

function App() {
  const [data, setData] = useState({}); //stateful variable. Should contain the response.data object so we have access to ALL the keys inside it.
  
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=SOl08bQFOhqbyuBGL0TKGfOs2i1pbQZIgRWhpIDF')
      .then(response =>  {
        console.log(response.data);
        setData(response.data)
      })
      .catch(function(error) {
        console.log(error)
      });
  }, [])
  
  return (
    <div className="App">
      <ImageCard title = {data.title}
                 url = {data.url}
                 description = {data.explanation} />
    </div>
  );
}

export default App;