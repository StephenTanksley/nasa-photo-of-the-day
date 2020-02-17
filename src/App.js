import React, {useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from 'react-player'
import ImageCard from './components/image component/image'
import TextComponent from './components/text component/text'
import { PageContainer, AppContainer, LoadingContainer } from './styles/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const App = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    let didCancel = false;
    
    const getData = async () => {
      !didCancel && setLoading(true)
      try {
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=SOl08bQFOhqbyuBGL0TKGfOs2i1pbQZIgRWhpIDF`)
        console.log(response)  
        !didCancel && setData(response.data)
      }
      catch (error) {
        console.log(error)
      }
      finally {
        !didCancel && setLoading(false)
      }
    }
    getData()
    return () => { didCancel = true }
  }, [])

  return (
    <PageContainer>
      <AppContainer>
        { 
          loading 
            ? <LoadingContainer>
                <CircularProgress size="7rem"/>
                <div>
                  <h2 className="loading-text">Loading NASA's Astronomy Picture of the Day...</h2>
                </div>
              </LoadingContainer>
              
              : data.media_type === 'video' 
              
              ? <div className= 'video-container'>
                  <ReactPlayer
                      url={data.url}
                      playing
                      loop
                      />
                </div>

              : <div className = 'image-container'>
                  <ImageCard 
                    url = {data.url}
                    mediaType = {data.media_type}
                    />


                <div className = 'text-container'>
                  <TextComponent 
                    title = {data.title}
                    explanation = {data.explanation}
                    copyright = {data.copyright}
                    date = {data.date}
                    />
              </div>
            </div>
      }

      </AppContainer>
    </PageContainer>
  );
}

export default App;