import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Publisher } from 'app/model/publisher';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  private readonly apiUrl = 'http://localhost:8080/api'


  constructor(private http: HttpClient ){
  }

  public getAllPublicationByPublisher(publisher: string): Observable<Publisher[]> {
    return this.http.get<Publisher[]>(`${this.apiUrl}/publisher/${publisher}`);
  }

  public getAllByPublicationAndPublisher(name: string, publisher: string): Observable<Publisher[]> {
    return this.http.get<Publisher[]>(`${this.apiUrl}/publisher/${name}/${publisher}`);
  }
}
