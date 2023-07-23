import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class TimeComponent implements OnInit {
  currentDateTime: Date = new Date();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout() {
    // removing the headers stored in local storage
    localStorage.removeItem('access-token');
    localStorage.removeItem('client');
    localStorage.removeItem('expiry');
    localStorage.removeItem('token-type');
    localStorage.removeItem('uid');

    this.router.navigate(['/login']);
  }
}
