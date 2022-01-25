import { Component, Input, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { Igitprofile } from '../gitprofile';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() githubProfile:any;
  @Input()userQuery:any
  constructor(private gitservice:GitSearchService) { 
    
  }
  
  ngOnInit(): void {
    this.gitservice.getProfile(this.userQuery).subscribe(dataUrl=>{
      this.githubProfile=dataUrl
      // console.log(dataUrl)
      // console.log(this.userQuery['name']);
      
    });
    
  }

}
