import React, { Component } from "react";
import "../styles/App.css";
import "./SearchBar";
import SearchBar from "./SearchBar";
import youtube from "../services/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import BottomScrollListener from "react-bottom-scroll-listener";
//import { Link } from "react-router-dom";
var changed = false;
class App extends Component {
  state = {
    searchFieldFromSearchBar: null,
    nextPageToken: null,
    videos: [],
    selectedVideo: null
  };

  animation = () => {
    const element = document.getElementById("search-film");
    element.classList.add("animated", "slideOutUp");
  };
  handleSubmit = async searchFieldFromSearchBar => {
    if (
      this.state.searchFieldFromSearchBar === null ||
      (this.state.searchFieldFromSearchBar !== searchFieldFromSearchBar &&
        searchFieldFromSearchBar !== undefined)
    ) {
      changed =
        this.state.searchFieldFromSearchBar !== searchFieldFromSearchBar
          ? true
          : false;
      this.setState({
        searchFieldFromSearchBar: searchFieldFromSearchBar,
        nextPageToken: null,
        videos: []
      });
    }

    const response = await youtube.get("/search", {
      params:
        this.state.nextPageToken == null ||
        (changed && searchFieldFromSearchBar !== undefined)
          ? {
              ...youtube.defaults.params,
              q: searchFieldFromSearchBar
            }
          : {
              ...youtube.defaults.params,
              pageToken: this.state.nextPageToken,
              q: this.state.searchFieldFromSearchBar
            }
    });
    this.animation();
    this.setState({
      videos: this.state.videos.concat(response.data.items),
      nextPageToken: response.data.nextPageToken
    });
  };
  handleVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  resetVideo = async () => {
    this.setState({
      ...this.state,
      selectedVideo: null
    });
  };
  render() {
    return (
      <div>
        {this.state.selectedVideo ? (
          <div className="eleven wide column">
            <VideoDetail
              resetVideo={this.resetVideo}
              video={this.state.selectedVideo}
            />
          </div>
        ) : (
          <div className="App">
            <SearchBar handleFormSubmit={this.handleSubmit} />
            {this.state.videos.length !== 0 &&
            this.state.nextPageToken !== null ? (
              <div className="ui grid">
                <div id="results">
                  <div className="ui row">
                    <div className="five wide column">
                      <VideoList
                        handleVideoSelect={this.handleVideoSelect}
                        videos={this.state.videos}
                      />
                    </div>
                  </div>
                </div>
                <BottomScrollListener onBottom={this.handleSubmit} />
              </div>
            ) : (
              <div>
                {this.state.nextPageToken !== null ? (
                  <div>
                    <span className="emoji">&#128543;</span>{" "}
                    <div className="header center">
                      Não encontramos vídeos com o termo buscado.{" "}
                      <p className="header">Utilize outra palavra-chave</p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App;
