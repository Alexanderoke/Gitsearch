import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GitAppComponent } from './git-app/git-app.component';
import { Igitprofile } from './gitprofile';
@Injectable({
  providedIn: 'root'
})
export class GitSearchService {  
  dataUrl!:string

  constructor(private http:HttpClient) { }
  

  public getProfile(): Observable <Igitprofile[]>{
    let userQuery= `GitAppComponent.userQuery!:String`
    let dataUrl= `https://api.github.com/users/${userQuery}?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`
    return this.http.get<Igitprofile[]>(this.dataUrl);
  }
}
