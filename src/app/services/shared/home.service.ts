import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Publication } from 'app/model/publication.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private readonly apiUrl = 'http://localhost:8080/api'



  constructor(private http: HttpClient) { }

  public getReport(): Observable<Publication[]> {
    return this.http.get<Publication[]>(`${this.apiUrl}/publication/all`);
  }
}
