import React, { Component } from "react";
import "../styles/App.css";
import "./SearchBar"
import SearchBar from "./SearchBar";
import youtube from '../services/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
class App extends Component {
  state = {
            videos: [],
            selectedVideo: null
        }
        handleSubmit = async (searchFieldFromSearchBar) => {
          
          const response = await youtube.get('/search', {
            params: {
              ...youtube.defaults.params,
              q: searchFieldFromSearchBar,
              
            }
            
          })
          console.log(response);
                      
            this.setState({
                videos: response.data.items
            })
        };
        handleVideoSelect = (video) => {
            this.setState({selectedVideo: video})
        }


  render() {
    return (
      <div className="App">
       <SearchBar handleFormSubmit={this.handleSubmit}/>
        <div id="results">
        <div className='ui grid'>
          <div className="ui row">
            {this.state.selectedVideo ? 
              <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo} />
              </div> : ''}
              
              <div className="five wide column">
                  
                  <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
              </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


