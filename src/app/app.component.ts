import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'Test Server 1', content: 'Just a test server!' },
    { type: 'server', name: 'Test Server 2', content: 'Just a test server!' },
  ];

  onServerAdded = (serverData: {
    serverName: string;
    serverContent: string;
  }) => {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  };

  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    const obj = {
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    };
    let serverName = blueprintData.serverName;
    let serverContent = blueprintData.serverContent;
    console.log(obj, serverName, serverContent);

    this.serverElements.push(obj);
  }
  onChangeFirst() {
    this.serverElements[0].name = 'Changed';
  } onDestroy() {
    this.serverElements.splice(0, 1);
  }
}
