import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showBanner: boolean = false
  isLogin: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  getShowBanner(): void {
    this.showBanner = !this.showBanner
  }

}
