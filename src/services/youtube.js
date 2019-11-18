import axios from "axios";

var KEY = "AIzaSyCFevdADumbPEsj-UEDESesryIuXLwR-6s";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    //maxResults: 1, //para testes
    key: KEY
  }
});
