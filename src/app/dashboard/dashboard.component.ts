import { Component, OnInit } from '@angular/core';
import { Client } from '../model/Client';
import { Contractor } from '../model/Contractor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  Client: Client = { name: 'Client', id: 0 };

  openChatBot() {}
}
