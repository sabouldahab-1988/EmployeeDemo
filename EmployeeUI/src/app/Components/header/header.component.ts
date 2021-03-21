import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  imagePath:string;
  environmentColor:string;
  environmentType:string;
  constructor() { 
    this.imagePath = environment.imagePath;
    // this.environmentColor=environment.environmentColor;
    this.environmentType=environment.environmentType;
  }

  ngOnInit() {
  }

}
