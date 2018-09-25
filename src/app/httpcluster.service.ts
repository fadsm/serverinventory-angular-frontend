import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Cluster } from './cluster.component'

@Injectable()
export class HttpClusterService {
  constructor(private _http: Http) { }

  private extractData(res: Response) {
    return res.json();
  }

  getClusters(): Observable<Cluster[]> {
    return this._http.
      get('http://localhost:8080/serverinventory/rest/clusterrest').
      map(this.extractData);
  }

  addCluster(cluster: Cluster): Observable<string> {
    const json = JSON.stringify(cluster);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.
      post('http://localhost:8080/serverinventory/rest/clusterrest',
      json, options).map(res => res.json());
  }

  updateCluster(cluster: Cluster): Observable<string> {
    const json = JSON.stringify(cluster);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.
      post('http://localhost:8080/serverinventory/rest/clusterrest',
      json, options).map(res => res.json());
  }
/*
  deleteServer(server: Server): Observable<string> {
    const json = JSON.stringify(server);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.
      delete('http://localhost:8080/serverinventory/rest/server?'+server.id,
      json, options).map(res => res.json());
  }
*/
}
