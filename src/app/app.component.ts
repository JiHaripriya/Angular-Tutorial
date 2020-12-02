import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server', name:'Test Server', content: 'Just a test'}];

  onServerAdded(serverInfo: {name:string, content:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverInfo.name,
      content: serverInfo.content
    });
  }

  onBlueprintAdded(blueprintInfo: {name:string, content:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintInfo.name,
      content: blueprintInfo.content
    });
  }
}
