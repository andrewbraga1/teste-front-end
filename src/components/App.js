import React, { Component } from "react";
import "../styles/App.css";
import "./SearchBar";
import SearchBar from "./SearchBar";
import youtube from "../services/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import BottomScrollListener from "react-bottom-scroll-listener";

class App extends Component {
  state = {
    searchFieldFromSearchBar: null,
    nextPageToken: null,
    videos: [],
    selectedVideo: null
  };
  handleSubmit = async searchFieldFromSearchBar => {
    if (
      this.state.searchFieldFromSearchBar === null ||
      (this.state.searchFieldFromSearchBar !== searchFieldFromSearchBar &&
        searchFieldFromSearchBar !== undefined)
    ) {
      var changed =
        this.state.searchFieldFromSearchBar !== searchFieldFromSearchBar
          ? true
          : false;
      this.setState({
        searchFieldFromSearchBar: searchFieldFromSearchBar,
        nextPageToken: null,
        videos: []
      });
    }
    const element = document.querySelector("form");
    element.classList.add("animated", "slideOutUp");

    const response = await youtube.get("/search", {
      params:
        this.state.nextPageToken == null || changed
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

    this.setState({
      videos: this.state.videos.concat(response.data.items),
      nextPageToken: response.data.nextPageToken
    });
  };
  handleVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="App">
        <SearchBar handleFormSubmit={this.handleSubmit} />
        <div id="results">
          <div className="ui grid">
            <div className="ui row">
              {this.state.selectedVideo ? (
                <div className="eleven wide column">
                  <VideoDetail video={this.state.selectedVideo} />
                </div>
              ) : (
                ""
              )}

              <div className="five wide column">
                <VideoList
                  handleVideoSelect={this.handleVideoSelect}
                  videos={this.state.videos}
                />
              </div>
            </div>
          </div>
        </div>
        <BottomScrollListener onBottom={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
