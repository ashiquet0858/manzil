import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import {Observable} from 'rxjs/Observable';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class SeriviceService {
url=environment.rootUrl
  constructor(private http:HttpClient) {}
 
    // Uses http.get() to load data from a single API endpoint
    getFoods() {
        return this.http.get(this.url+'/products');
    }
    getPhardha() {
      return this.http.get(this.url+'/phardhas');
  }
    gettopes() {
      return this.http.get(this.url+'/tops');
  }
  getPants() {
    return this.http.get(this.url+'/pants');
}
getChuridars() {
  return this.http.get(this.url+'/churidars');
}
getRunning() {
  return this.http.get(this.url+'/running-materials');
}
getShall() {
  return this.http.get(this.url+'/shalls');
}
}
