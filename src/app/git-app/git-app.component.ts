import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';
@Component({
  selector: 'app-git-app',
  templateUrl: './git-app.component.html',
  styleUrls: ['./git-app.component.css']
})
export class GitAppComponent implements OnInit {
  public userQuery! :any;
  public githubProfile!:any;

  constructor(private gitservice:GitSearchService) { }
  public searchGit(){
    return this.gitservice.profile()
    
  }

  ngOnInit(): void {
  }

}
