import { Component, OnInit, Input } from '@angular/core';
import { GitSearchService } from '../git-search.service';
@Component({
  selector: 'app-git-app',
  templateUrl: './git-app.component.html',
  styleUrls: ['./git-app.component.css']
})
export class GitAppComponent implements OnInit {
  public userQuery!:any;
  public githubProfile!:any;

  constructor(private gitservice:GitSearchService) { }
  public searchGit(){
    
    this.githubProfile= this.gitservice.getProfile(this.userQuery)
     
    
  }

  ngOnInit(): void {
   
  }

}
