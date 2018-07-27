import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-all-videos',
  templateUrl: './all-videos.component.html',
  styleUrls: ['./all-videos.component.css']
})
export class AllVideosComponent implements OnInit {
  configUrl = 'http://localhost:3030';
  constructor(private http: HttpClient) { 
    
  }

  ngOnInit() {
    console.log('hello2');
  }

  getConfig() {
    return this.http.get(this.configUrl)


  }
}
