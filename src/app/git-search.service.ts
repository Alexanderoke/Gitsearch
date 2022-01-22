import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Igitprofile } from './gitprofile';
@Injectable({
  providedIn: 'root'
})
export class GitSearchService {
  private url="https://api.github.com/users/alexanderoke?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"

  constructor(private http:HttpClient) { }
  public profile(): Observable <Igitprofile[]>{
    return this.http.get<Igitprofile[]>(this.url);
  }
}
