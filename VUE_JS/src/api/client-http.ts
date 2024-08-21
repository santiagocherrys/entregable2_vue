import type { AxiosInstance } from "axios";
import axios from "axios";

class ClientHTTP {
  private api: AxiosInstance;
  private apiKey: string = "71e7ad5c";
  constructor() {
    this.api = axios.create({
      baseURL: "http://www.omdbapi.com",
      headers:{
        "Content-Type":"application/json"
      },
      params:{
        //tiene que llamarse igual al apikey que utiliza el api que estamos consumiendo
        apikey: this.apiKey
      }
    });
  }

  getApi(){
    return this.api;
  }
}

export default new ClientHTTP().getApi();