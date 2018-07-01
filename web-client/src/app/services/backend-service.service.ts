import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private httpClient: HttpClient) { }

  public GetPOIs(): Promise<any> {
    return this.httpClient.get('/api/poi').toPromise();
  }
}
