import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import Searchbar from './components/Searchbar';

var url = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBlVTXwn5IqS2-Iti6ihAiQQSHe2Y7b858&q=cricket&type=video&maxResults=20";

function App() {
  const [videolistAll, setvideolistAll] = useState({
    videos: [],
    selectedVideo:null
  });
  useEffect(() => {   
    makeApiCall("cricket")    
  }, []);

  const makeApiCall =(searchkey)=>{   
    console.log(searchkey);
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBlVTXwn5IqS2-Iti6ihAiQQSHe2Y7b858&q=${searchkey}&type=video&maxResults=15`).then(
      response => {
        console.log(response);
        setvideolistAll({ ...videolistAll, videos: response.data.items, selectedVideo:response.data.items[0] });
      },
      error => {
        console.log(error);
      }
    )
  }

  return (
    <div className="App">
      <Searchbar setSearchbarKey={(searchkeyTream)=>{
        makeApiCall(searchkeyTream);
      }}></Searchbar>      
      <div className="container" style={{marginTop:"90px"}}>
        <div className="row">
          <div className="col-md-9">
            <VideoPlayer video={videolistAll.selectedVideo}></VideoPlayer>
          </div>
          <div className="col-md-3">
            <VideoList listofvieos={videolistAll.videos} updateSelectedVideo={(sdv)=>{
              setvideolistAll({...videolistAll, selectedVideo:sdv});
            }}></VideoList>
          </div>  
        </div>
      </div>

    </div>
  );
}

export default App;
