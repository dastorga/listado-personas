import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JsonService {
  // define our class properties. apiUrl is what we need
  // usually you could get this from an environment file
  apiUrl = 'https://randomuser.me/api/';

  apiUrlJsonServer = 'my-json-server.typicode.com/dastorga/listado-personas/';
  apiUrlJsonServerLocal = 'http://localhost:3000/posts';

  // inject the HttpClient as http so we can use it in this class
  constructor(private http: HttpClient) {}

  // return what comes back from this http call
  getProducts() {
    return this.http.get(`${this.apiUrl}?results=10`);
  }

  getJsonServer() {
    return this.http.get(`${this.apiUrlJsonServer}`);
  }

}
