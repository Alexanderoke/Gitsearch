import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable, Input, } from '@angular/core';
import { Observable } from 'rxjs';
import { GitAppComponent } from './git-app/git-app.component';
import { Igitprofile } from './gitprofile';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {  
  dataUrl!:string
  @Input()userQuery:any

  constructor(private http:HttpClient) { }
  

  public getProfile(searchQuery:any): Observable <Igitprofile[]>{
    this.userQuery='alexanderoke'
    this.dataUrl= `https://api.github.com/users/${this.userQuery}?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`
  
    return this.http.get<Igitprofile[]>(this.dataUrl);
    
  }
  
}
