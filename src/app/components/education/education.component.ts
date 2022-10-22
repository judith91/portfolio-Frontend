import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educations: any = [{title:"Isnstituto del Profesorado Gral. San Martín f- 49. Nivel Superior.", date:"March 2010 - August 2017", description:"Profesorado de educación secundaria en lengua y literatura"}]

  constructor() { }

  ngOnInit(): void {
    
  }

}
