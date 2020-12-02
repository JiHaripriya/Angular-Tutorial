import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter }  from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreate = new EventEmitter<{name:string, content:string}>();
  @Output('bpCreated') blueprintCreate = new EventEmitter<{name:string, content:string}>();
  @ViewChild('newServerContent') serverContent:ElementRef;
  
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverInput: HTMLInputElement, serverContent:HTMLInputElement) {
    this.serverCreate.emit({
      name: serverInput.value, 
      content:serverContent.value
    });
  }

  onAddBlueprint(serverInput: HTMLInputElement) {
    this.blueprintCreate.emit({
      name: serverInput.value, 
      content:this.serverContent.nativeElement.value
    });
  }
}
