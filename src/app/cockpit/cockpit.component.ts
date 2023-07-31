import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() bluePrintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // newServerName = '';
  newServerContent = '';

  constructor() {}

  ngOnInit() {}

  onAddServer(nameInput: HTMLInputElement) {
    console.log('nameInput: ', nameInput);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent,
    });
  }
  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent,
    });
  }
  // onAddBlueprint() {
  //   console.log('adding', this.newServerContent);
  //   this.blueprintCreated.emit({
  //     serverName: this.newServerName,
  //     severContent: this.newServerContent,
  //   });
  // }
}
