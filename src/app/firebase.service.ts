import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from 'angularfire2/firestore';


@Injectable()
export class FirebaseService {
  // define our class properties. apiUrl is what we need
  // usually you could get this from an environment file
  apiUrlServer = 'https://firestore.googleapis.com/v1beta1/{name=app-ventas-jjm/*/4qVIX5GGIcRL5oY3king/*}:exportDocuments';

  // inject the HttpClient as http so we can use it in this class
  constructor(private http: HttpClient) {}

  // return what comes back from this http call
  getServer() {
    return this.http.get(`${this.apiUrlServer}`);
  }

}
