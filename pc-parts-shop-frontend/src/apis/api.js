import axios from "axios";

export default class Api {
  constructor(accessToken = null) {
    this.client = null;
    this.api_token = accessToken;
    this.api_url = "http://127.0.0.1:8000/api/v1/";
  }
  init() {
    let headers = {
      Accept: "application/json",
    };

    if (this.api_token) {
      headers.Authorization = `Bearer ${this.api_token}`;
    }

    this.client = axios.create({
      baseURL: this.api_url,
      timeout: 31000,
      headers: headers,
    });

    return this.client;
  }
}
