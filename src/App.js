import React, {useState, useEffect } from "react";
import axios from "axios";
import ImageCard from './components/image component/image'
import TextComponent from './components/text component/text'
import { PageContainer, AppContainer } from './styles/styles'


import "./App.scss";

const App = () => {
  const [data, setData] = useState({});
  
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
    <PageContainer>
      <AppContainer>
        
        <div className = 'image-container'>
          <ImageCard 
            url = {data.url}
            mediaType = {data.media_type}
            />
        </div>


{/*Not sure if this is gonna work. */}

        {/* <div>
        <Player
            playsInline
            poster="/assets/poster.png"
            src={props.url}
            />

        </div> */}

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