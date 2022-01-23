import { Component, Input, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() githubProfile:any;

  constructor(private gitservice:GitSearchService) { }

  ngOnInit(): void {
    this.gitservice.getProfile().subscribe(dataUrl=>this.githubProfile=dataUrl);
    
  }

}
