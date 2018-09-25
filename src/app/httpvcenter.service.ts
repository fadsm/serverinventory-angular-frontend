import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Vcenter } from './vcenter.component'

@Injectable()
export class HttpVcenterService {
  constructor(private _http: Http) { }

  private extractData(res: Response) {
    return res.json();
  }

  getVcenters(): Observable<Vcenter[]> {
    return this._http.
      get('http://localhost:8080/serverinventory/rest/vcenterrest').
      map(this.extractData);
  }

  addVcenter(vcenter: Vcenter): Observable<string> {
    const json = JSON.stringify(vcenter);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.
      post('http://localhost:8080/serverinventory/rest/vcenterrest',
      json, options).map(res => res.json());
  }

  updateVcenter(vcenter: Vcenter): Observable<string> {
    const json = JSON.stringify(vcenter);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.
      post('http://localhost:8080/serverinventory/rest/vcentersrest',
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
