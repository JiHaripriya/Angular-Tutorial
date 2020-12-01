import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = ' ';
  serverCreated = false;
  servers = ['Server 1', 'Server 2']

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit(): void {
  }

  createServer() {
    this.servers.push(this.serverName)
    console.log(this.servers)
    this.serverCreated = true;
  }
}
