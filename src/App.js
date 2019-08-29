import React, {useState, useEffect } from "react";
import axios from "axios";
import ImageCard from './components/image component/image'
import TextComponent from './components/text component/text'
import styled from 'styled-components'


import "./App.scss";

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
  
  const AppContainer = styled.div`
  
    width: 80%;
    margin: 0 auto;

  `;

  const PageContainer = styled.div`
    background-color: black;
  `;


  return (
    <PageContainer>
      <AppContainer>
        
        <div className = 'image-container'>
          <ImageCard 
            url = {data.url}
            mediaType = {data.media_type}
            />
        </div>

        <div className = 'text-container'>
          <TextComponent 
            title = {data.title}
            explanation = {data.explanation}
            copyright = {data.copyright}
            date = {data.date}

            />
        </div>

      </AppContainer>
    </PageContainer>
  );
}

export default App;