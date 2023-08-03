import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges,
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srcElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild("heading", { static: true }) header: ElementRef;
  constructor() {
    console.log("Constructor called");

  }
  ngOnDestroy(): void {
    console.log("-ngOnDestroy called");

  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called");
    console.log("Test Content:::" + this.header.nativeElement.textContent)

  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called");

  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called");


  }
  ngDoCheck(): void {
    console.log("ngDoCheck called");

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called");
    console.log("ngOnChanges called", changes);

  }

  ngOnInit(): void {
    console.log("NG_ON_INIT called");

  }
}
